// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0 <=0.9.0;
pragma experimental ABIEncoderV2;

// cvxCRV staking is a BaseRewardPool deployed for cvxCRV token staking
// Mainnet: 0x3Fe65692bfCD0e6CF84Cb1E7d24108E434A7587e
// This interface covers the BaseRewardPool used for cvxCRV staking rewards
interface IConvexCvxCrvStaking {
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

    function duration() external view returns (uint256);

    function operator() external view returns (address);

    function rewardManager() external view returns (address);

    function pid() external view returns (uint256);

    function periodFinish() external view returns (uint256);

    function rewardRate() external view returns (uint256);

    function lastUpdateTime() external view returns (uint256);

    function rewardPerTokenStored() external view returns (uint256);

    function queuedRewards() external view returns (uint256);

    function currentRewards() external view returns (uint256);

    function historicalRewards() external view returns (uint256);

    function newRewardRatio() external view returns (uint256);

    function userRewardPerTokenPaid(address _account) external view returns (uint256);

    function rewards(address _account) external view returns (uint256);

    function lastTimeRewardApplicable() external view returns (uint256);

    function rewardPerToken() external view returns (uint256);

    function earned(address _account) external view returns (uint256);

    // --- State-changing functions ---

    function stake(uint256 _amount) external returns (bool);

    function stakeAll() external returns (bool);

    function stakeFor(address _for, uint256 _amount) external returns (bool);

    function withdraw(uint256 _amount, bool _claim) external returns (bool);

    function withdrawAll(bool _claim) external;

    function withdrawAndUnwrap(uint256 _amount, bool _claim) external returns (bool);

    function withdrawAllAndUnwrap(bool _claim) external;

    function getReward(address _account, bool _claimExtras) external returns (bool);

    function getReward() external returns (bool);

    function donate(uint256 _amount) external returns (bool);

    function queueNewRewards(uint256 _rewards) external returns (bool);

    function addExtraReward(address _reward) external returns (bool);

    function clearExtraRewards() external;
}
