// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0 <=0.9.0;

import { AdapterInvestLimitBase, AdapterModifiersBase } from "../../utils/contracts/AdapterInvestLimitBase.sol";

contract AdapterInvestLimitBaseMock is AdapterInvestLimitBase {
    constructor(address _registry) public AdapterModifiersBase(_registry) {}
}
