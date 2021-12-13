// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0 <0.9.0;

interface ICurvePoolTokenV1 {
    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    event Approval(address indexed _owner, address indexed _spender, uint256 _value);

    function set_minter(address _minter) external;

    function totalSupply() external view returns (uint256 out);

    function allowance(address _owner, address _spender) external view returns (uint256 out);

    function transfer(address _to, uint256 _value) external returns (bool out);

    function transferFrom(
        address _from,
        address _to,
        uint256 _value
    ) external returns (bool out);

    function approve(address _spender, uint256 _value) external returns (bool out);

    function mint(address _to, uint256 _value) external;

    function burn(uint256 _value) external;

    function burnFrom(address _to, uint256 _value) external;

    function name() external view returns (string memory out);

    function symbol() external view returns (string memory out);

    function decimals() external view returns (uint256 out);

    function balanceOf(address arg0) external view returns (uint256 out);
}
