// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0 <=0.9.0;

interface ExchangeProxy {
    function batchSwapExactIn(
        Swap[] memory swaps,
        address tokenIn,
        address tokenOut,
        uint256 totalAmountIn,
        uint256 minTotalAmountOut
    ) public returns (uint256 totalAmountOut);

    function batchSwapExactOut(
        Swap[] memory swaps,
        address tokenIn,
        address tokenOut,
        uint256 maxTotalAmountIn
    ) public returns (uint256 totalAmountIn);

    function batchEthInSwapExactIn(
        Swap[] memory swaps,
        address tokenOut,
        uint256 minTotalAmountOut
    ) public payable returns (uint256 totalAmountOut);

    function batchEthOutSwapExactIn(
        Swap[] memory swaps,
        address tokenIn,
        uint256 totalAmountIn,
        uint256 minTotalAmountOut
    ) public returns (uint256 totalAmountOut);

    function batchEthInSwapExactOut(Swap[] memory swaps, address tokenOut)
        public
        payable
        returns (uint256 totalAmountIn);

    function batchEthOutSwapExactOut(
        Swap[] memory swaps,
        address tokenIn,
        uint256 maxTotalAmountIn
    ) public returns (uint256 totalAmountIn);
}
