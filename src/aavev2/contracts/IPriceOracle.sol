pragma solidity ^0.5.0;

interface IPriceOracle {
    event AssetSourceUpdated(address indexed asset, address indexed source);
    event FallbackOracleUpdated(address indexed fallbackOracle);
    event OwnershipTransferred(
        address indexed previousOwner,
        address indexed newOwner
    );
    event WethSet(address indexed weth);

    function WETH() external view returns (address);

    function getAssetPrice(address asset) external view returns (uint256);

    function getAssetsPrices(address[] memory assets)
        external
        view
        returns (uint256[] memory);

    function getFallbackOracle() external view returns (address);

    function getSourceOfAsset(address asset) external view returns (address);

    function owner() external view returns (address);

    function renounceOwnership() external;

    function setAssetSources(address[] memory assets, address[] memory sources)
        external;

    function setFallbackOracle(address fallbackOracle) external;

    function transferOwnership(address newOwner) external;
}