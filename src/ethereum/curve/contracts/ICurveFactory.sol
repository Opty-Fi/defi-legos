// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.9.0;

interface ICurveFactory {
    event CryptoPoolDeployed(
        address token,
        address[2] coins,
        uint256 A,
        uint256 gamma,
        uint256 mid_fee,
        uint256 out_fee,
        uint256 allowed_extra_profit,
        uint256 fee_gamma,
        uint256 adjustment_step,
        uint256 admin_fee,
        uint256 ma_half_time,
        uint256 initial_price,
        address deployer
    );
    event LiquidityGaugeDeployed(address pool, address token, address gauge);
    event UpdateFeeReceiver(address _old_fee_receiver, address _new_fee_receiver);
    event UpdatePoolImplementation(address _old_pool_implementation, address _new_pool_implementation);
    event UpdateTokenImplementation(address _old_token_implementation, address _new_token_implementation);
    event UpdateGaugeImplementation(address _old_gauge_implementation, address _new_gauge_implementation);
    event TransferOwnership(address _old_owner, address _new_owner);

    function deploy_pool(
        string calldata _name,
        string calldata _symbol,
        address[2] calldata _coins,
        uint256 A,
        uint256 gamma,
        uint256 mid_fee,
        uint256 out_fee,
        uint256 allowed_extra_profit,
        uint256 fee_gamma,
        uint256 adjustment_step,
        uint256 admin_fee,
        uint256 ma_half_time,
        uint256 initial_price
    ) external returns (address);

    function deploy_gauge(address _pool) external returns (address);

    function set_fee_receiver(address _fee_receiver) external;

    function set_pool_implementation(address _pool_implementation) external;

    function set_token_implementation(address _token_implementation) external;

    function set_gauge_implementation(address _gauge_implementation) external;

    function commit_transfer_ownership(address _addr) external;

    function accept_transfer_ownership() external;

    function find_pool_for_coins(address _from, address _to) external view returns (address);

    function find_pool_for_coins(
        address _from,
        address _to,
        uint256 i
    ) external view returns (address);

    function get_coins(address _pool) external view returns (address[2] memory);

    function get_decimals(address _pool) external view returns (uint256[2] memory);

    function get_balances(address _pool) external view returns (uint256[2] memory);

    function get_coin_indices(
        address _pool,
        address _from,
        address _to
    ) external view returns (uint256, uint256);

    function get_gauge(address _pool) external view returns (address);

    function get_eth_index(address _pool) external view returns (uint256);

    function get_token(address _pool) external view returns (address);

    function admin() external view returns (address);

    function future_admin() external view returns (address);

    function fee_receiver() external view returns (address);

    function pool_implementation() external view returns (address);

    function token_implementation() external view returns (address);

    function gauge_implementation() external view returns (address);

    function pool_count() external view returns (uint256);

    function pool_list(uint256 arg0) external view returns (address);
}
