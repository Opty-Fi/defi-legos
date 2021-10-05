// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0 <= 0.9.0;

import "./BPool.sol";

interface BFactory {

    function isBPool(address b) external view returns (bool);
    function newBPool() external returns (BPool);
    
}