// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.9.0;

interface ICurveATriCryptoZap {
    function add_liquidity(uint256[5] memory _amounts, uint256 _min_mint_amount) external;

    function add_liquidity(
        uint256[5] memory _amounts,
        uint256 _min_mint_amount,
        address _receiver
    ) external;

    function exchange_underlying(
        uint256 i,
        uint256 j,
        uint256 _dx,
        uint256 _min_dy
    ) external;

    function exchange_underlying(
        uint256 i,
        uint256 j,
        uint256 _dx,
        uint256 _min_dy,
        address _receiver
    ) external;

    function remove_liquidity(uint256 _amount, uint256[5] memory _min_amounts) external;

    function remove_liquidity(
        uint256 _amount,
        uint256[5] memory _min_amounts,
        address _receiver
    ) external;

    function remove_liquidity_one_coin(
        uint256 _token_amount,
        uint256 i,
        uint256 _min_amount
    ) external;

    function remove_liquidity_one_coin(
        uint256 _token_amount,
        uint256 i,
        uint256 _min_amount,
        address _receiver
    ) external;

    function get_dy_underlying(
        uint256 i,
        uint256 j,
        uint256 _dx
    ) external view returns (uint256);

    function calc_token_amount(uint256[5] memory _amounts, bool _is_deposit) external view returns (uint256);

    function calc_withdraw_one_coin(uint256 token_amount, uint256 i) external view returns (uint256);

    function coins(uint256 arg0) external view returns (address);

    function underlying_coins(uint256 arg0) external view returns (address);

    function pool() external view returns (address);

    function base_pool() external view returns (address);

    function token() external view returns (address);
}
