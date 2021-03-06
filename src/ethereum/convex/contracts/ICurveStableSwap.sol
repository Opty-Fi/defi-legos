// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0 <=0.9.0;

interface ICurveStableSwap {
    /* solhint-disable func-name-mixedcase, var-name-mixedcase */
    /**
     * @notice Estimate the amount of LP tokens minted or burned based on a deposit or withdrawal.
     * @dev https://curve.readthedocs.io/factory-pools.html?highlight=calc_token_amount#StableSwap.calc_token_amount
     */
    function calc_token_amount(uint256[] memory _amounts, bool _is_deposit) external view returns (uint256);

    /**
     * @notice Getter for the array of swappable coins within the pool.
     * The last coin will always be the LP token of the base pool.
     * @dev https://curve.readthedocs.io/factory-pools.html?highlight=calc_token_amount#StableSwap.coins
     */
    function coins(uint256 _index) external view returns (address);

    /**
     * @notice Deposits coins into to the pool and mints new LP tokens.
     * @dev https://curve.readthedocs.io/factory-pools.html?highlight=calc_token_amount#StableSwap.add_liquidity
     */
    function add_liquidity(uint256[] memory _amounts, uint256 _min_mint_amount) external;
    /* solhint-enable func-name-mixedcase, var-name-mixedcase */
}

interface ICurveStableSwap2 {
    /* solhint-disable func-name-mixedcase, var-name-mixedcase */
    function calc_token_amount(uint256[2] memory _amounts, bool _is_deposit) external view returns (uint256);

    function add_liquidity(uint256[2] memory _amounts, uint256 _min_mint_amount) external;
    /* solhint-enable func-name-mixedcase, var-name-mixedcase */
}

interface ICurveStableSwap3 {
    /* solhint-disable func-name-mixedcase, var-name-mixedcase */
    function calc_token_amount(uint256[3] memory _amounts, bool _is_deposit) external view returns (uint256);

    function add_liquidity(uint256[3] memory _amounts, uint256 _min_mint_amount) external;
    /* solhint-enable func-name-mixedcase, var-name-mixedcase */
}

interface ICurveStableSwap4 {
    /* solhint-disable func-name-mixedcase, var-name-mixedcase */
    function calc_token_amount(uint256[4] memory _amounts, bool _is_deposit) external view returns (uint256);

    function add_liquidity(uint256[4] memory _amounts, uint256 _min_mint_amount) external;
    /* solhint-enable func-name-mixedcase, var-name-mixedcase */
}
