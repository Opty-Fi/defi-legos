pragma solidity ^0.5.0;

/**
@title IPriceOracle interface
@notice provides the interface to interact with the PriceOracle
 */
interface IPriceOracle {
event AssetSourceUpdated(address indexed asset, address indexed source);
    event FallbackOracleUpdated(address indexed fallbackOracle);
    event OwnershipTransferred(
        address indexed previousOwner,
        address indexed newOwner
    );

    function getAssetPrice(address _asset) external view returns (uint256);

    function getAssetsPrices(address[] memory _assets)
        external
        view
        returns (uint256[] memory);

    function getFallbackOracle() external view returns (address);

    function getSourceOfAsset(address _asset) external view returns (address);

    function isOwner() external view returns (bool);

    function owner() external view returns (address);

    function renounceOwnership() external;

    function setAssetSources(
        address[] memory _assets,
        address[] memory _sources
    ) external;

    function setFallbackOracle(address _fallbackOracle) external;

    function transferOwnership(address newOwner) external;
}