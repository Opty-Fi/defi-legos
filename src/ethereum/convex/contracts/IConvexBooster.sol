// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0 <=0.9.0;
pragma experimental ABIEncoderV2;

// https://github.com/convex-eth/platform/blob/main/contracts/contracts/Booster.sol
// Mainnet: 0xF403C135812408BFbE8713b5A23a04b3D48AAE31
interface IConvexBooster {
    struct PoolInfo {
        address lptoken;
        address token;
        address gauge;
        address crvRewards;
        address stash;
        bool shutdown;
    }

    event Deposited(address indexed user, uint256 indexed poolid, uint256 amount);
    event Withdrawn(address indexed user, uint256 indexed poolid, uint256 amount);

    // --- View functions ---

    function poolLength() external view returns (uint256);

    function poolInfo(uint256 _pid) external view returns (PoolInfo memory);

    function staker() external view returns (address);

    function minter() external view returns (address);

    function crv() external view returns (address);

    function registry() external view returns (address);

    function lockRewards() external view returns (address);

    function stakerRewards() external view returns (address);

    function lockFees() external view returns (address);

    function feeToken() external view returns (address);

    function feeDistro() external view returns (address);

    function lockIncentive() external view returns (uint256);

    function stakerIncentive() external view returns (uint256);

    function earmarkIncentive() external view returns (uint256);

    function platformFee() external view returns (uint256);

    function FEE_DENOMINATOR() external view returns (uint256);

    function MaxFees() external view returns (uint256);

    function owner() external view returns (address);

    function feeManager() external view returns (address);

    function poolManager() external view returns (address);

    function treasury() external view returns (address);

    function isShutdown() external view returns (bool);

    function voteDelegate() external view returns (address);

    // --- State-changing functions ---

    function deposit(
        uint256 _pid,
        uint256 _amount,
        bool _stake
    ) external returns (bool);

    function depositAll(uint256 _pid, bool _stake) external returns (bool);

    function withdraw(uint256 _pid, uint256 _amount) external returns (bool);

    function withdrawAll(uint256 _pid) external returns (bool);

    function withdrawTo(
        uint256 _pid,
        uint256 _amount,
        address _to
    ) external returns (bool);

    function earmarkRewards(uint256 _pid) external returns (bool);

    function earmarkFees() external returns (bool);

    function rewardClaimed(
        uint256 _pid,
        address _address,
        uint256 _amount
    ) external returns (bool);

    function claimRewards(uint256 _pid, address _gauge) external returns (bool);

    function setGaugeRedirect(uint256 _pid) external returns (bool);

    function vote(
        uint256 _voteId,
        address _votingAddress,
        bool _support
    ) external returns (bool);

    function voteGaugeWeight(address[] calldata _gauge, uint256[] calldata _weight) external returns (bool);

    // --- Admin functions ---

    function setOwner(address _owner) external;

    function setFeeManager(address _feeM) external;

    function setPoolManager(address _poolM) external;

    function setFactories(
        address _rfactory,
        address _sfactory,
        address _tfactory
    ) external;

    function setArbitrator(address _arb) external;

    function setVoteDelegate(address _voteDelegate) external;

    function setRewardContracts(address _rewards, address _stakerRewards) external;

    function setFeeInfo() external;

    function setFees(
        uint256 _lockFees,
        uint256 _stakerFees,
        uint256 _callerFees,
        uint256 _platform
    ) external;

    function setTreasury(address _treasury) external;

    function addPool(
        address _lptoken,
        address _gauge,
        uint256 _stashVersion
    ) external returns (bool);

    function shutdownPool(uint256 _pid) external returns (bool);

    function shutdownSystem() external;
}
