// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0 <0.9.0;

interface ICurvePoolTokenV3 {
    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    event Approval(
        address indexed _owner,
        address indexed _spender,
        uint256 _value
    );

    function decimals() external view returns (uint256);

    function transfer(address _to, uint256 _value) external returns (bool);

    function transferFrom(
        address _from,
        address _to,
        uint256 _value
    ) external returns (bool);

    function approve(address _spender, uint256 _value) external returns (bool);

    function increaseAllowance(address _spender, uint256 _added_value)
        external
        returns (bool);

    function decreaseAllowance(address _spender, uint256 _subtracted_value)
        external
        returns (bool);

    function mint(address _to, uint256 _value) external returns (bool);

    function burnFrom(address _to, uint256 _value) external returns (bool);

    function set_minter(address _minter) external;

    function set_name(string memory _name, string memory _symbol) external;

    function name() external view returns (string memory);

    function symbol() external view returns (string memory);

    function balanceOf(address arg0) external view returns (uint256);

    function allowance(address arg0, address arg1)
        external
        view
        returns (uint256);

    function totalSupply() external view returns (uint256);

    function minter() external view returns (address);
}
