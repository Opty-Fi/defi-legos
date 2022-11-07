/* solhint-disable*/
// SPDX-License-Identifier:MIT
pragma solidity >=0.6.0 <0.9.0;

interface ICurveRegistryExchange {
    event TokenExchange(
        address indexed buyer,
        address indexed receiver,
        address indexed pool,
        address token_sold,
        address token_bought,
        uint256 amount_sold,
        uint256 amount_bought
    );

    function exchange_with_best_rate(
        address _from,
        address _to,
        uint256 _amount,
        uint256 _expected
    ) external payable returns (uint256);

    function exchange_with_best_rate(
        address _from,
        address _to,
        uint256 _amount,
        uint256 _expected,
        address _receiver
    ) external payable returns (uint256);

    function exchange(
        address _pool,
        address _from,
        address _to,
        uint256 _amount,
        uint256 _expected
    ) external payable returns (uint256);

    function exchange(
        address _pool,
        address _from,
        address _to,
        uint256 _amount,
        uint256 _expected,
        address _receiver
    ) external payable returns (uint256);

    function exchange_multiple(
        address[9] memory _route,
        uint256[3][4] memory _swap_params,
        uint256 _amount,
        uint256 _expected
    ) external payable returns (uint256);

    function exchange_multiple(
        address[9] memory _route,
        uint256[3][4] memory _swap_params,
        uint256 _amount,
        uint256 _expected,
        address[4] memory _pools
    ) external payable returns (uint256);

    function exchange_multiple(
        address[9] memory _route,
        uint256[3][4] memory _swap_params,
        uint256 _amount,
        uint256 _expected,
        address[4] memory _pools,
        address _receiver
    ) external payable returns (uint256);

    function get_best_rate(
        address _from,
        address _to,
        uint256 _amount
    ) external view returns (address, uint256);

    function get_best_rate(
        address _from,
        address _to,
        uint256 _amount,
        address[8] memory _exclude_pools
    ) external view returns (address, uint256);

    function get_exchange_amount(
        address _pool,
        address _from,
        address _to,
        uint256 _amount
    ) external view returns (uint256);

    function get_input_amount(
        address _pool,
        address _from,
        address _to,
        uint256 _amount
    ) external view returns (uint256);

    function get_exchange_amounts(
        address _pool,
        address _from,
        address _to,
        uint256[100] memory _amounts
    ) external view returns (uint256[100] memory);

    function get_exchange_multiple_amount(
        address[9] memory _route,
        uint256[3][4] memory _swap_params,
        uint256 _amount
    ) external view returns (uint256);

    function get_exchange_multiple_amount(
        address[9] memory _route,
        uint256[3][4] memory _swap_params,
        uint256 _amount,
        address[4] memory _pools
    ) external view returns (uint256);

    function get_calculator(address _pool) external view returns (address);

    function update_registry_address() external returns (bool);

    function set_calculator(address _pool, address _calculator) external returns (bool);

    function set_default_calculator(address _calculator) external returns (bool);

    function claim_balance(address _token) external returns (bool);

    function set_killed(bool _is_killed) external returns (bool);

    function registry() external view returns (address);

    function factory_registry() external view returns (address);

    function crypto_registry() external view returns (address);

    function default_calculator() external view returns (address);

    function is_killed() external view returns (bool);
}
