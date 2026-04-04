// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0 <=0.9.0;
pragma experimental ABIEncoderV2;

// https://github.com/convex-eth/platform/blob/main/contracts/contracts/cvxRewardPool.sol
// Mainnet: 0xCF50b810E57Ac33B91dCF525C6ddd9881B139332
interface IConvexCvxRewardPool {
    event RewardAdded(uint256 reward);
    event Staked(address indexed user, uint256 amount);
    event Withdrawn(address indexed user, uint256 amount);
    event RewardPaid(address indexed user, uint256 reward);

    // --- View functions ---

    function totalSupply() external view returns (uint256);

    function balanceOf(address _account) external view returns (uint256);

    function extraRewardsLength() external view returns (uint256);

    function extraRewards(uint256 _index) external view returns (address);

    function rewardToken() external view returns (address);

    function stakingToken() external view returns (address);

    function operator() external view returns (address);

    function crvDeposits() external view returns (address);

    function cvxCrvRewards() external view returns (address);

    function cvxCrvToken() external view returns (address);

    function rewardManager() external view returns (address);

    function periodFinish() external view returns (uint256);

    function rewardRate() external view returns (uint256);

    function lastUpdateTime() external view returns (uint256);

    function rewardPerTokenStored() external view returns (uint256);

    function queuedRewards() external view returns (uint256);

    function currentRewards() external view returns (uint256);

    function historicalRewards() external view returns (uint256);

    function userRewardPerTokenPaid(address _account) external view returns (uint256);

    function rewards(address _account) external view returns (uint256);

    function lastTimeRewardApplicable() external view returns (uint256);

    function rewardPerToken() external view returns (uint256);

    function earned(address _account) external view returns (uint256);

    // --- State-changing functions ---

    function stake(uint256 _amount) external;

    function stakeAll() external;

    function stakeFor(address _for, uint256 _amount) external;

    function withdraw(uint256 _amount, bool _claim) external;

    function withdrawAll(bool _claim) external;

    function getReward(
        address _account,
        bool _claimExtras,
        bool _stake
    ) external;

    function getReward(bool _stake) external;

    function donate(uint256 _amount) external returns (bool);

    function queueNewRewards(uint256 _rewards) external;

    function addExtraReward(address _reward) external;

    function clearExtraRewards() external;
}
