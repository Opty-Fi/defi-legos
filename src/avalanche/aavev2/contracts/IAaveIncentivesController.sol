// SPDX-License-Identifier: agpl-3.0
pragma solidity >=0.6.0 <=0.9.0;
pragma experimental ABIEncoderV2;

struct Assets {
    uint104 emissionPerSecond;
    uint104 index;
    uint40 lastUpdateTimestamp;
}

interface IAaveIncentivesController {
    event RewardsAccrued(address indexed user, uint256 amount);

    event RewardsClaimed(address indexed user, address indexed to, address indexed claimer, uint256 amount);

    event ClaimerSet(address indexed user, address indexed claimer);

    function setClaimer(address user, address claimer) external;

    function getClaimer(address user) external view returns (address);

    function configureAssets(address[] calldata assets, uint256[] calldata emissionsPerSecond) external;

    function handleAction(
        address asset,
        uint256 userBalance,
        uint256 totalSupply
    ) external;

    function getRewardsBalance(address[] calldata assets, address user) external view returns (uint256);

    function claimRewards(
        address[] calldata assets,
        uint256 amount,
        address to
    ) external returns (uint256);

    function claimRewardsOnBehalf(
        address[] calldata assets,
        uint256 amount,
        address user,
        address to
    ) external returns (uint256);

    function getUserUnclaimedRewards(address user) external view returns (uint256);

    function REWARD_TOKEN() external view returns (address);

    function assets(address asset) external view returns (Assets memory);
}
