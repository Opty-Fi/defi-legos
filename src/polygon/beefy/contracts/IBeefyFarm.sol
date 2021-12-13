// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0 <=0.9.0;
pragma experimental ABIEncoderV2;

interface IBeefyFarm {
    function stake(uint256 _value) external; //fine

    function exit() external; //fine

    function earned(address _holder) external view returns (uint256); //fine

    function balanceOf(address _holder) external view returns (uint256); //fine
}