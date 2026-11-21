// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0 <=0.9.0;
pragma experimental ABIEncoderV2;

// https://github.com/convex-eth/platform/blob/main/contracts/contracts/CvxLocker.sol
// Mainnet (vlCVX): 0x72a19342e8F1838460eBFCCEf09F6585e32db86E
interface IConvexCvxLocker {
    struct LockedBalance {
        uint112 amount;
        uint112 boosted;
        uint32 unlockTime;
    }

    struct EarnedData {
        address token;
        uint256 amount;
    }

    struct Epoch {
        uint224 supply;
        uint32 date;
    }

    event Staked(address indexed _user, uint256 _paidAmount, uint256 _lockedAmount, uint256 _boostedAmount);
    event Withdrawn(address indexed _user, uint256 _amount, bool _relocked);
    event KickReward(address indexed _user, address indexed _kicked, uint256 _reward);
    event RewardPaid(address indexed _user, address indexed _rewardsToken, uint256 _reward);
    event RewardAdded(address indexed _token, uint256 _reward);
    event Recovered(address _token, uint256 _amount);

    // --- View functions ---

    function decimals() external view returns (uint8);

    function name() external view returns (string memory);

    function symbol() external view returns (string memory);

    function totalSupply() external view returns (uint256);

    function totalSupplyAtEpoch(uint256 _epoch) external view returns (uint256);

    function balanceOf(address _user) external view returns (uint256);

    function balanceAtEpochOf(uint256 _epoch, address _user) external view returns (uint256);

    function lockedBalanceOf(address _user) external view returns (uint256);

    function lockedBalances(address _user)
        external
        view
        returns (
            uint256 total,
            uint256 unlockable,
            uint256 locked,
            LockedBalance[] memory lockData
        );

    function claimableRewards(address _account) external view returns (EarnedData[] memory);

    function rewardWeightOf(address _user) external view returns (uint256);

    function epochCount() external view returns (uint256);

    function findEpochId(uint256 _time) external view returns (uint256);

    function rewardPerToken(address _rewardsToken) external view returns (uint256);

    function lastTimeRewardApplicable(address _rewardsToken) external view returns (uint256);

    function getRewardForDuration(address _rewardsToken) external view returns (uint256);

    function stakingToken() external view returns (address);

    function rewardsDuration() external view returns (uint256);

    function lockDuration() external view returns (uint256);

    // --- State-changing functions ---

    function lock(
        address _account,
        uint256 _amount,
        uint256 _spendRatio
    ) external;

    function processExpiredLocks(bool _relock) external;

    function processExpiredLocks(
        bool _relock,
        uint256 _spendRatio,
        address _withdrawTo
    ) external;

    function kickExpiredLocks(address _account) external;

    function getReward(address _account, bool _stake) external;

    function getReward(address _account) external;

    function checkpointEpoch() external;

    function notifyRewardAmount(address _rewardsToken, uint256 _reward) external;

    function recoverERC20(address _tokenAddress, uint256 _tokenAmount) external;

    // --- Admin functions ---

    function addReward(
        address _rewardsToken,
        address _distributor,
        bool _useBoost
    ) external;

    function approveRewardDistributor(
        address _rewardsToken,
        address _distributor,
        bool _approved
    ) external;

    function setStakingContract(address _staking) external;

    function setStakeLimits(uint256 _minimum, uint256 _maximum) external;

    function setBoost(
        uint256 _max,
        uint256 _rate,
        address _receivingAddress
    ) external;

    function setKickIncentive(uint256 _rate, uint256 _delay) external;

    function shutdown() external;

    function setApprovals() external;
}
