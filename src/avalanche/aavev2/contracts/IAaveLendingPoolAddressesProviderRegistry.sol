// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0 <=0.9.0;

interface IAaveLendingPoolAddressesProviderRegistry {
    event AddressesProviderRegistered(address indexed newAddress);
    event AddressesProviderUnregistered(address indexed newAddress);

    function getAddressesProvidersList() external view returns (address[] memory);

    function getAddressesProviderIdByAddress(address addressesProvider) external view returns (uint256);

    function registerAddressesProvider(address provider, uint256 id) external;

    function unregisterAddressesProvider(address provider) external;
}
