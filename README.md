<img src="https://avatars.githubusercontent.com/u/71294241?s=400&u=0b62a061c11a7536c27b1d53760152b5e9bd40f5&v=4" alt="Header" style="width:200px;align=center;float: right;" />

## defi-legos

Collection of ABIs, Addresses and Solidity Interfaces that is integrated with opty.fi's earn protocol

## Overview

### Installation

- Using `npm`

```console
$ npm install @opty_fi/defi-legos
```

- Using `yarn`

```console
$ yarn add @opty_fi/defi-legos
```

### Usage

Once installed, you can use the legos in the library by importing them:

```solidity
// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.0;

import "@opty_fi/ethereum/curve/contracts/ICurveAddressProvider.sol";
import "@opty_fi/ethereum/curve/contracts/CurveAddresses.sol";

contract CurveDepositAdapter {
    function getCurveRegistry() public view returns (address) {
        return ICurveAddressProvider(CurveAddresses.ADDRESS_PROVIDER).get_registry();
    }
}
```

## Security

The library of defi legos is maintained by core developers and builder community of [opty.fi](https://opty.fi). Opty.fi's defi legos are used in building defi adapters and subgraphs for the yield generating protocol of opty.fi called earn-protocol

The reason behind building defi legos' library is to achieve opty.fi's philosophy of simple, modular and seamless integration of defi protocols to its yield generating protocol.

## Contribute

Opty.fi's defi legos is being developed - thanks to the open source smart contracts of various defi protocols and builder community. Check out the [contribution guide](CONTRIBUTING.md) in order to participate to this library!

## License

Opty.fi's defi-legos is released under the [MIT License](LICENSE).

