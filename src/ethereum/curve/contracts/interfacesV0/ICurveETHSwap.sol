// solhint-disable func-name-mixedcase
// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0 <=0.9.0;

interface ICurveETHSwap {
    function remove_liquidity_one_coin(
        uint256 amountIn,
        int128 i,
        uint256 minAmountOut
    ) external;

    /// @dev Function for every 2token pool.
    function add_liquidity(uint256[2] calldata amountsIn, uint256 minAmountOut) external payable;

    /// @dev Function for every 3token pool.
    function add_liquidity(uint256[3] calldata amountsIn, uint256 minAmountOut) external payable;

    /// @dev Function for every 4token pool.
    function add_liquidity(uint256[4] calldata amountsIn, uint256 minAmountOut) external payable;

    function remove_liquidity(uint256 _amount, uint256[2] calldata minAmountOut) external;

    function remove_liquidity(uint256 _amount, uint256[3] calldata minAmountOut) external;

    function remove_liquidity(uint256 _amount, uint256[4] calldata minAmountOut) external;

    function calc_token_amount(uint256[] calldata amountsIn, bool deposit) external view returns (uint256);

    function get_virtual_price() external view returns (uint256);

    function coins(uint256 arg0) external view returns (address);
}
