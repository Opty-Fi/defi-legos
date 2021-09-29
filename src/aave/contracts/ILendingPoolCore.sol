pragma solidity ^0.5.0;

/**
@title ILendingPoolCore interface
@notice provides the interface to interact with the LendingPoolCore
 */
interface ILendingPoolCore {
    event ReserveUpdated(
        address indexed reserve,
        uint256 liquidityRate,
        uint256 stableBorrowRate,
        uint256 variableBorrowRate,
        uint256 liquidityIndex,
        uint256 variableBorrowIndex
    );

    fallback() external payable;

    function CORE_REVISION() external view returns (uint256);

    function activateReserve(address _reserve) external;

    function addressesProvider() external view returns (address);

    function deactivateReserve(address _reserve) external;

    function disableBorrowingOnReserve(address _reserve) external;

    function disableReserveAsCollateral(address _reserve) external;

    function disableReserveStableBorrowRate(address _reserve) external;

    function enableBorrowingOnReserve(
        address _reserve,
        bool _stableBorrowRateEnabled
    ) external;

    function enableReserveAsCollateral(
        address _reserve,
        uint256 _baseLTVasCollateral,
        uint256 _liquidationThreshold,
        uint256 _liquidationBonus
    ) external;

    function enableReserveStableBorrowRate(address _reserve) external;

    function freezeReserve(address _reserve) external;

    function getReserveATokenAddress(address _reserve)
        external
        view
        returns (address);

    function getReserveAvailableLiquidity(address _reserve)
        external
        view
        returns (uint256);

    function getReserveConfiguration(address _reserve)
        external
        view
        returns (
            uint256,
            uint256,
            uint256,
            bool
        );

    function getReserveCurrentAverageStableBorrowRate(address _reserve)
        external
        view
        returns (uint256);

    function getReserveCurrentLiquidityRate(address _reserve)
        external
        view
        returns (uint256);

    function getReserveCurrentStableBorrowRate(address _reserve)
        external
        view
        returns (uint256);

    function getReserveCurrentVariableBorrowRate(address _reserve)
        external
        view
        returns (uint256);

    function getReserveDecimals(address _reserve)
        external
        view
        returns (uint256);

    function getReserveInterestRateStrategyAddress(address _reserve)
        external
        view
        returns (address);

    function getReserveIsActive(address _reserve) external view returns (bool);

    function getReserveIsFreezed(address _reserve) external view returns (bool);

    function getReserveIsStableBorrowRateEnabled(address _reserve)
        external
        view
        returns (bool);

    function getReserveLastUpdate(address _reserve)
        external
        view
        returns (uint40 timestamp);

    function getReserveLiquidationBonus(address _reserve)
        external
        view
        returns (uint256);

    function getReserveLiquidationThreshold(address _reserve)
        external
        view
        returns (uint256);

    function getReserveLiquidityCumulativeIndex(address _reserve)
        external
        view
        returns (uint256);

    function getReserveNormalizedIncome(address _reserve)
        external
        view
        returns (uint256);

    function getReserveTotalBorrows(address _reserve)
        external
        view
        returns (uint256);

    function getReserveTotalBorrowsStable(address _reserve)
        external
        view
        returns (uint256);

    function getReserveTotalBorrowsVariable(address _reserve)
        external
        view
        returns (uint256);

    function getReserveTotalLiquidity(address _reserve)
        external
        view
        returns (uint256);

    function getReserveUtilizationRate(address _reserve)
        external
        view
        returns (uint256);

    function getReserveVariableBorrowsCumulativeIndex(address _reserve)
        external
        view
        returns (uint256);

    function getReserves() external view returns (address[] memory);

    function getUserBasicReserveData(address _reserve, address _user)
        external
        view
        returns (
            uint256,
            uint256,
            uint256,
            bool
        );

    function getUserBorrowBalances(address _reserve, address _user)
        external
        view
        returns (
            uint256,
            uint256,
            uint256
        );

    function getUserCurrentBorrowRateMode(address _reserve, address _user)
        external
        view
        returns (uint8);

    function getUserCurrentStableBorrowRate(address _reserve, address _user)
        external
        view
        returns (uint256);

    function getUserLastUpdate(address _reserve, address _user)
        external
        view
        returns (uint256 timestamp);

    function getUserOriginationFee(address _reserve, address _user)
        external
        view
        returns (uint256);

    function getUserUnderlyingAssetBalance(address _reserve, address _user)
        external
        view
        returns (uint256);

    function getUserVariableBorrowCumulativeIndex(
        address _reserve,
        address _user
    ) external view returns (uint256);

    function initReserve(
        address _reserve,
        address _aTokenAddress,
        uint256 _decimals,
        address _interestRateStrategyAddress
    ) external;

    function initialize(address _addressesProvider) external;

    function isReserveBorrowingEnabled(address _reserve)
        external
        view
        returns (bool);

    function isReserveUsageAsCollateralEnabled(address _reserve)
        external
        view
        returns (bool);

    function isUserAllowedToBorrowAtStable(
        address _reserve,
        address _user,
        uint256 _amount
    ) external view returns (bool);

    function isUserUseReserveAsCollateralEnabled(
        address _reserve,
        address _user
    ) external view returns (bool);

    function lendingPoolAddress() external view returns (address);

    function liquidateFee(
        address _token,
        uint256 _amount,
        address _destination
    ) external payable;

    function refreshConfiguration() external;

    function removeLastAddedReserve(address _reserveToRemove) external;

    function reservesList(uint256) external view returns (address);

    function setReserveBaseLTVasCollateral(address _reserve, uint256 _ltv)
        external;

    function setReserveDecimals(address _reserve, uint256 _decimals) external;

    function setReserveInterestRateStrategyAddress(
        address _reserve,
        address _rateStrategyAddress
    ) external;

    function setReserveLiquidationBonus(address _reserve, uint256 _bonus)
        external;

    function setReserveLiquidationThreshold(
        address _reserve,
        uint256 _threshold
    ) external;

    function setUserUseReserveAsCollateral(
        address _reserve,
        address _user,
        bool _useAsCollateral
    ) external;

    function transferToFeeCollectionAddress(
        address _token,
        address _user,
        uint256 _amount,
        address _destination
    ) external payable;

    function transferToReserve(
        address _reserve,
        address _user,
        uint256 _amount
    ) external payable;

    function transferToUser(
        address _reserve,
        address _user,
        uint256 _amount
    ) external;

    function unfreezeReserve(address _reserve) external;

    function updateStateOnBorrow(
        address _reserve,
        address _user,
        uint256 _amountBorrowed,
        uint256 _borrowFee,
        uint8 _rateMode
    ) external returns (uint256, uint256);

    function updateStateOnDeposit(
        address _reserve,
        address _user,
        uint256 _amount,
        bool _isFirstDeposit
    ) external;

    function updateStateOnFlashLoan(
        address _reserve,
        uint256 _availableLiquidityBefore,
        uint256 _income,
        uint256 _protocolFee
    ) external;

    function updateStateOnLiquidation(
        address _principalReserve,
        address _collateralReserve,
        address _user,
        uint256 _amountToLiquidate,
        uint256 _collateralToLiquidate,
        uint256 _feeLiquidated,
        uint256 _liquidatedCollateralForFee,
        uint256 _balanceIncrease,
        bool _liquidatorReceivesAToken
    ) external;

    function updateStateOnRebalance(
        address _reserve,
        address _user,
        uint256 _balanceIncrease
    ) external returns (uint256);

    function updateStateOnRedeem(
        address _reserve,
        address _user,
        uint256 _amountRedeemed,
        bool _userRedeemedEverything
    ) external;

    function updateStateOnRepay(
        address _reserve,
        address _user,
        uint256 _paybackAmountMinusFees,
        uint256 _originationFeeRepaid,
        uint256 _balanceIncrease,
        bool _repaidWholeLoan
    ) external;

    function updateStateOnSwapRate(
        address _reserve,
        address _user,
        uint256 _principalBorrowBalance,
        uint256 _compoundedBorrowBalance,
        uint256 _balanceIncrease,
        uint8 _currentRateMode
    ) external returns (uint8, uint256);
}