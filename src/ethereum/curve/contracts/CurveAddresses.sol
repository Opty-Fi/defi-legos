// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0 <=0.9.0;

library CurveAddresses {
    /** @notice  Curve Registry Address Provider */
    address public constant ADDRESS_PROVIDER = address(0x0000000022D53366457F9d5E68Ec105046FC4383);

    /** @notice Curve's compound zap deposit contract address */
    address public constant COMPOUND_DEPOSIT_POOL = address(0xeB21209ae4C2c9FF2a86ACA31E123764A3B6Bc06);

    /** @notice Curve's usdt zap deposit contract address */
    address public constant USDT_DEPOSIT_POOL = address(0xac795D2c97e60DF6a99ff1c814727302fD747a80);

    /** @notice Curve's pax zap deposit contract address */
    address public constant PAX_DEPOSIT_POOL = address(0xA50cCc70b6a011CffDdf45057E39679379187287);

    /** @notice Curve's y zap deposit contract address */
    address public constant Y_DEPOSIT_POOL = address(0xbBC81d23Ea2c3ec7e56D39296F0cbB648873a5d3);

    /** @notice Curve's busd zap deposit contract address */
    address public constant BUSD_DEPOSIT_POOL = address(0xb6c057591E073249F2D9D88Ba59a46CFC9B59EdB);

    /** @notice Curve's susd zap deposit contract address */
    address public constant SUSD_DEPOSIT_POOL = address(0xFCBa3E75865d2d561BE8D220616520c171F12851);
}
