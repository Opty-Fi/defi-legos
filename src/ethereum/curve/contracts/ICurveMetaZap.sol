// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0 <0.9.0;

interface ICurveMetaZap {
    function add_liquidity(uint256[4] memory amounts, uint256 min_mint_amount) external returns (uint256);

    function remove_liquidity(uint256 _amount, uint256[4] memory min_amounts) external returns (uint256[4] memory);

    function remove_liquidity_one_coin(
        uint256 _token_amount,
        int128 i,
        uint256 _min_amount
    ) external returns (uint256);

    function remove_liquidity_imbalance(uint256[4] memory amounts, uint256 max_burn_amount) external returns (uint256);

    function calc_withdraw_one_coin(uint256 _token_amount, int128 i) external view returns (uint256);

    function calc_token_amount(uint256[4] memory amounts, bool is_deposit) external view returns (uint256);

    function pool() external view returns (address);

    function token() external view returns (address);

    function base_pool() external view returns (address);

    function coins(uint256 arg0) external view returns (address);

    function base_coins(uint256 arg0) external view returns (address);
}
