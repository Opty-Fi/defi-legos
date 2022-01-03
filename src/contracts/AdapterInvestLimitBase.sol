// SPDX-License-Identifier: gpl-3.0

pragma solidity >0.6.0 <0.9.0;

//  libraries
import { Address } from "@openzeppelin/contracts/utils/Address.sol";

// helper contracts
import { ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

import { AdapterModifiersBase } from "./AdapterModifiersBase.sol";

import "../interfaces/defiAdapters/contracts/IAdapterInvestLimit.sol";

abstract contract AdapterInvestLimitBase is IAdapterInvestLimit, AdapterModifiersBase {
    using Address for address;

    /** @notice max deposit value datatypes */
    MaxExposure public maxDepositProtocolMode;

    /** @notice max deposit's default value in percentage */
    uint256 public maxDepositProtocolPct; // basis points

    /** @notice Maps liquidityPool to absolute max deposit value in underlying */
    mapping(address => uint256) public maxDepositAmount;

    /** @notice  Maps liquidityPool to max deposit value in percentage */
    mapping(address => uint256) public maxDepositPoolPct; // basis points

    constructor() public {
        maxDepositProtocolPct = uint256(10000); // 100% (basis points)
        maxDepositProtocolMode = MaxExposure.Pct;
    }

    /**
     * @inheritdoc IAdapterInvestLimit
     */
    function setMaxDepositPoolPct(address _liquidityPool, uint256 _maxDepositPoolPct)
        external
        override
        onlyRiskOperator
    {
        require(_liquidityPool.isContract(), "!isContract");
        maxDepositPoolPct[_liquidityPool] = _maxDepositPoolPct;
        emit LogMaxDepositPoolPct(maxDepositPoolPct[_liquidityPool], msg.sender);
    }

    /**
     * @inheritdoc IAdapterInvestLimit
     */
    function setMaxDepositAmount(
        address _liquidityPool,
        address,
        uint256 _maxDepositAmount
    ) external override onlyRiskOperator {
        require(_liquidityPool.isContract(), "!isContract");
        // Note : use 18 as decimals for USD, BTC and ETH
        maxDepositAmount[_liquidityPool] = _maxDepositAmount;
        emit LogMaxDepositAmount(maxDepositAmount[_liquidityPool], msg.sender);
    }

    /**
     * @inheritdoc IAdapterInvestLimit
     */
    function setMaxDepositProtocolMode(MaxExposure _mode) public override onlyRiskOperator {
        maxDepositProtocolMode = _mode;
        emit LogMaxDepositProtocolMode(maxDepositProtocolMode, msg.sender);
    }

    /**
     * @inheritdoc IAdapterInvestLimit
     */
    function setMaxDepositProtocolPct(uint256 _maxDepositProtocolPct) public override onlyRiskOperator {
        maxDepositProtocolPct = _maxDepositProtocolPct;
        emit LogMaxDepositProtocolPct(maxDepositProtocolPct, msg.sender);
    }

    /**
     * @dev Get the final value of amount in underlying token to be deposited
     * @param _liquidityPool liquidity pool address
     * @param _underlyingToken underlying token address
     * @param _amount amount in underlying token
     * @param _poolValue pool value
     * @return amount in underlying token to be deposited affected by investment limitation
     */
    function _getDepositAmount(
        address _liquidityPool,
        address _underlyingToken,
        uint256 _amount,
        uint256 _poolValue
    ) internal view returns (uint256) {
        return
            maxDepositProtocolMode == MaxExposure.Pct
                ? _getMaxDepositAmountPct(_liquidityPool, _underlyingToken, _amount, _poolValue)
                : _getMaxDepositAmount(_liquidityPool, _underlyingToken, _amount);
    }

    /**
     * @dev Gets the maximum amount in underlying token limited by percentage
     * @param _liquidityPool liquidity pool address
     * @param _underlyingToken underlying token address
     * @param _amount amount in underlying token
     * @param _poolValue pool value
     * @return  amount in underlying token to be deposited affected by
     *          investment limit in percentage
     */
    function _getMaxDepositAmountPct(
        address _liquidityPool,
        address _underlyingToken,
        uint256 _amount,
        uint256 _poolValue
    ) internal view returns (uint256) {
        uint256 _poolPct = maxDepositPoolPct[_liquidityPool];
        uint256 _decimals = ERC20(_underlyingToken).decimals();
        uint256 _actualAmount = _amount * (10**(uint256(18) - _decimals));
        uint256 _limit = _poolPct == 0 ? (_poolValue * maxDepositProtocolPct) / 10000 : (_poolValue * _poolPct) / 10000;
        return _actualAmount > _limit ? _limit / 10**(uint256(18) - _decimals) : _amount;
    }

    /**
     * @dev Gets the maximum amount in underlying token affected by investment
     *      limit set for liquidity pool in amount
     * @param _liquidityPool liquidity pool address
     * @param _underlyingToken underlying token address
     * @param _amount amount in underlying token
     * @return amount in underlying token to be deposited affected by
     *         investment limit set for liquidity pool in amount
     */
    function _getMaxDepositAmount(
        address _liquidityPool,
        address _underlyingToken,
        uint256 _amount
    ) internal view returns (uint256) {
        uint256 _decimals = ERC20(_underlyingToken).decimals();
        uint256 _maxAmount = maxDepositAmount[_liquidityPool] / (10**(uint256(18) - (_decimals)));
        return _amount > _maxAmount ? _maxAmount : _amount;
    }
}
