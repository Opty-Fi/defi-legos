// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0 <=0.9.0;

interface IStakingRewardsFactory {
    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    function deploy(
        address stakingToken,
        uint256 rewardAmount,
        uint256 rewardsDuration
    ) external;

    function isOwner() external view returns (bool);

    function notifyRewardAmount(address stakingToken) external;

    function notifyRewardAmounts() external;

    function owner() external view returns (address);

    function pullExtraTokens(address token, uint256 amount) external;

    function renounceOwnership() external;

    function rewardsToken() external view returns (address);

    function stakingRewardsGenesis() external view returns (uint256);

    function stakingRewardsInfoByStakingToken(address)
        external
        view
        returns (
            address stakingRewards,
            uint256 rewardAmount,
            uint256 duration
        );

    function stakingTokens(uint256) external view returns (address);

    function transferOwnership(address newOwner) external;

    function update(
        address stakingToken,
        uint256 rewardAmount,
        uint256 rewardsDuration
    ) external;
}
