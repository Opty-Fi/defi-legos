// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0 <=0.9.0;

interface ICurveDAO {
    function mint(address liquidityPoolGauge) external; // Function to mint CRV tokens.
}
