// SPDX-License-Identifier: gpl-3.0

pragma solidity >=0.6.0 <0.9.0;

//  libraries
import { Address } from "@openzeppelin/contracts/utils/Address.sol";
import { SafeMath } from "@openzeppelin/contracts/math/SafeMath.sol";

// helper contracts
import { ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import { AdapterModifiersBase } from "./AdapterModifiersBase.sol";

// interfaces
import "../../interfaces/defiAdapters/contracts/IAdapterInvestLimit.sol";

abstract contract AdapterInvestLimitBase is IAdapterInvestLimit, AdapterModifiersBase {
    using Address for address;
    using SafeMath for uint256;

    /** @notice max deposit value datatypes */
    MaxExposure public maxDepositProtocolMode;

    /** @notice max deposit's protocol value in percentage */
    uint256 public maxDepositProtocolPct; // basis points

    /** @notice  Maps liquidityPool to max deposit value in percentage */
    mapping(address => uint256) public maxDepositPoolPct; // basis points

    /** @notice  Maps liquidityPool to max deposit value in absolute value for a specific token */
    mapping(address => mapping(address => uint256)) public maxDepositAmount;

    constructor() public {
        maxDepositProtocolPct = uint256(10000); // 100% (basis points)
        maxDepositProtocolMode = MaxExposure.Pct;
    }

    /**
     * @inheritdoc IAdapterInvestLimit
     */
    function setMaxDepositPoolPct(address _liquidityPool, uint256 _maxDepositPoolPct)
        external
        virtual
        override
        onlyRiskOperator
    {
        maxDepositPoolPct[_liquidityPool] = _maxDepositPoolPct;
        emit LogMaxDepositPoolPct(maxDepositPoolPct[_liquidityPool], msg.sender);
    }

    /**
     * @inheritdoc IAdapterInvestLimit
     */
    function setMaxDepositAmount(
        address _liquidityPool,
        address _underlyingToken,
        uint256 _maxDepositAmount
    ) external virtual override onlyRiskOperator {
        maxDepositAmount[_liquidityPool][_underlyingToken] = _maxDepositAmount;
        emit LogMaxDepositAmount(maxDepositAmount[_liquidityPool][_underlyingToken], msg.sender);
    }

    /**
     * @inheritdoc IAdapterInvestLimit
     */
    function setMaxDepositProtocolMode(MaxExposure _mode) external virtual override onlyRiskOperator {
        maxDepositProtocolMode = _mode;
        emit LogMaxDepositProtocolMode(maxDepositProtocolMode, msg.sender);
    }

    /**
     * @inheritdoc IAdapterInvestLimit
     */
    function setMaxDepositProtocolPct(uint256 _maxDepositProtocolPct) external virtual override onlyRiskOperator {
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
    function getDepositAmount(
        address _liquidityPool,
        address _underlyingToken,
        uint256 _amount,
        uint256 _poolValue
    ) public view virtual returns (uint256) {
        uint256 _limit =
            maxDepositProtocolMode == MaxExposure.Pct
                ? getMaxDepositAmountByPct(_liquidityPool, _poolValue)
                : maxDepositAmount[_liquidityPool][_underlyingToken];
        return _amount > _limit ? _limit : _amount;
    }

    /**
     * @dev Gets the maximum amount in underlying token limited by percentage
     * @param _liquidityPool liquidity pool address
     * @param _poolValue pool value
     * @return  amount in underlying token to be deposited affected by
     *          investment limit in percentage
     */
    function getMaxDepositAmountByPct(address _liquidityPool, uint256 _poolValue)
        public
        view
        virtual
        returns (uint256)
    {
        uint256 _poolPct = maxDepositPoolPct[_liquidityPool];
        uint256 _limit =
            _poolPct == 0
                ? (_poolValue.mul(maxDepositProtocolPct)).div(uint256(10000))
                : (_poolValue.mul(_poolPct)).div(uint256(10000));
        return _limit;
    }
}
