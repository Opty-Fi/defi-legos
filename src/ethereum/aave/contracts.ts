import ATokenAbi from "./abi/AToken.json";
import LendingPoolAbi from "./abi/LendingPool.json";
import LendingPoolAddressesProviderAbi from "./abi/LendingPoolAddessProvider.json";
import LendingPoolCoreAbi from "./abi/LendingPoolCore.json";
import PriceOracleAbi from "./abi/PriceOracle.json";
import IAaveV1Abi from "./abi/IAaveV1.json";

const contracts = {
  ATokenAbi,
  IAaveV1Abi,
  pools: {
    "dai": {
      "pool": "0x24a42fD28C976A61Df5D00D0599C34c4f90748c8",
      "lpToken": "0xfC1E690f61EFd961294b3e1Ce3313fBD8aa4f85d",
      "tokens": ["0x6b175474e89094c44da98b954eedeac495271d0f"]
    },
    "usdc": {
      "pool": "0x24a42fD28C976A61Df5D00D0599C34c4f90748c8",
      "lpToken": "0x9bA00D6856a4eDF4665BcA2C2309936572473B7E",
      "tokens": ["0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"]
    },
    "usdt": {
      "pool": "0x24a42fD28C976A61Df5D00D0599C34c4f90748c8",
      "lpToken": "0x71fc860F7D3A592A4a98740e39dB31d25db65ae8",
      "tokens": ["0xdac17f958d2ee523a2206206994597c13d831ec7"]
    },
    "tusd": {
      "pool": "0x24a42fD28C976A61Df5D00D0599C34c4f90748c8",
      "lpToken": "0x4DA9b813057D04BAef4e5800E36083717b4a0341",
      "tokens": ["0x0000000000085d4780B73119b644AE5ecd22b376"]
    },
    "wbtc": {
      "pool": "0x24a42fD28C976A61Df5D00D0599C34c4f90748c8",
      "lpToken": "0xFC4B8ED459e00e5400be803A9BB3954234FD50e3",
      "tokens": ["0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599"]
    },
    "susd": {
      "pool": "0x24a42fD28C976A61Df5D00D0599C34c4f90748c8",
      "lpToken": "0x625aE63000f46200499120B906716420bd059240",
      "tokens": ["0x57ab1ec28d129707052df4df418d58a2d46d5f51"]
    },
    "link": {
      "pool": "0x24a42fD28C976A61Df5D00D0599C34c4f90748c8",
      "lpToken": "0xA64BD6C70Cb9051F6A9ba1F163Fdc07E0DfB5F84",
      "tokens": ["0x514910771AF9Ca656af840dff83E8264EcF986CA"]
    },
    "busd": {
      "pool": "0x24a42fD28C976A61Df5D00D0599C34c4f90748c8",
      "lpToken": "0x6Ee0f7BB50a54AB5253dA0667B0Dc2ee526C30a8",
      "tokens": ["0x4Fabb145d64652a948d72533023f6E7A623C7C53"]
    },
    "knc": {
      "pool": "0x24a42fD28C976A61Df5D00D0599C34c4f90748c8",
      "lpToken": "0x9D91BE44C06d373a8a226E1f3b146956083803eB",
      "tokens": ["0xdd974D5C2e2928deA5F71b9825b8b646686BD200"]
    },
    "zrx": {
      "pool": "0x24a42fD28C976A61Df5D00D0599C34c4f90748c8",
      "lpToken": "0x6Fb0855c404E09c47C3fBCA25f08d4E41f9F062f",
      "tokens": ["0xe41d2489571d322189246dafa5ebde1f4699f498"]
    },
    "uni": {
      "pool": "0x24a42fD28C976A61Df5D00D0599C34c4f90748c8",
      "lpToken": "0xB124541127A0A657f056D9Dd06188c4F1b0e5aab",
      "tokens": ["0x1f9840a85d5af5bf1d1762f925bdaddc4201f984"]
    },
    "bat": {
      "pool": "0x24a42fD28C976A61Df5D00D0599C34c4f90748c8",
      "lpToken": "0xE1BA0FB44CCb0D11b80F92f4f8Ed94CA3fF51D00",
      "tokens": ["0x0D8775F648430679A709E98d2b0Cb6250d2887EF"]
    },
    "rep": {
      "pool": "0x24a42fD28C976A61Df5D00D0599C34c4f90748c8",
      "lpToken": "0x71010A9D003445aC60C4e6A7017c1E89A477B438",
      "tokens": ["0x1985365e9f78359a9b6ad760e32412f4a445e862"]
    },
    "mkr": {
      "pool": "0x24a42fD28C976A61Df5D00D0599C34c4f90748c8",
      "lpToken": "0x7deB5e830be29F91E298ba5FF1356BB7f8146998",
      "tokens": ["0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2"]
    },
    "yfi": {
      "pool": "0x24a42fD28C976A61Df5D00D0599C34c4f90748c8",
      "lpToken": "0x12e51E77DAAA58aA0E9247db7510Ea4B46F9bEAd",
      "tokens": ["0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e"]
    },
    "aave": {
      "pool": "0x24a42fD28C976A61Df5D00D0599C34c4f90748c8",
      "lpToken": "0xba3D9687Cf50fE253cd2e1cFeEdE1d6787344Ed5",
      "tokens": ["0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9"]
    },
    "eth": {
      "pool": "0x24a42fD28C976A61Df5D00D0599C34c4f90748c8",
      "lpToken": "0x3a3A65aAb0dd2A17E3F1947bA16138cd37d08c04",
      "tokens": ["0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"]
    },
    "enj": {
      "pool": "0x24a42fD28C976A61Df5D00D0599C34c4f90748c8",
      "lpToken": "0x712DB54daA836B53Ef1EcBb9c6ba3b9Efb073F40",
      "tokens": ["0xF629cBd94d3791C9250152BD8dfBDF380E2a3B9c"]
    },
    "mana": {
      "pool": "0x24a42fD28C976A61Df5D00D0599C34c4f90748c8",
      "lpToken": "0x6FCE4A401B6B80ACe52baAefE4421Bd188e76F6f",
      "tokens": ["0x0F5D2fB29fb7d3CFeE444a200298f468908cC942"]
    },
    "ren": {
      "pool": "0x24a42fD28C976A61Df5D00D0599C34c4f90748c8",
      "lpToken": "0x69948cC03f478B95283F7dbf1CE764d0fc7EC54C",
      "tokens": ["0x408e41876cCCDC0F92210600ef50372656052a38"]
    },
    "snx": {
      "pool": "0x24a42fD28C976A61Df5D00D0599C34c4f90748c8",
      "lpToken": "0x328C4c80BC7aCa0834Db37e6600A6c49E12Da4DE",
      "tokens": ["0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F"]
    }
  },
  LendingPoolAddressesProvider: {
    abi: LendingPoolAddressesProviderAbi,
    address: "0x24a42fd28c976a61df5d00d0599c34c4f90748c8",
  },
  LendingPool: {
    abi: LendingPoolAbi,
    address: "0x398ec7346dcd622edc5ae82352f02be94c62d119",
  },
  LendingPoolCore: {
    abi: LendingPoolCoreAbi,
    address: "0x3dfd23a6c5e8bbcfc9581d2e864a68feb6a076d3",
  },
  PriceOracle: {
    abi: PriceOracleAbi,
    address: "0x76B47460d7F7c5222cFb6b6A75615ab10895DDe4",
  },
  aETH: {
    address: "0x3a3a65aab0dd2a17e3f1947ba16138cd37d08c04",
    abi: ATokenAbi,
    decimals: 18,
  },
  aDAI: {
    address: "0xfc1e690f61efd961294b3e1ce3313fbd8aa4f85d",
    abi: ATokenAbi,
    decimals: 18,
  },
  aUSDC: {
    address: "0x9ba00d6856a4edf4665bca2c2309936572473b7e",
    abi: ATokenAbi,
    decimals: 6,
  },
  aSUSD: {
    address: "0x625ae63000f46200499120b906716420bd059240",
    abi: ATokenAbi,
    decimals: 18,
  },
  aTUSD: {
    address: "0x4da9b813057d04baef4e5800e36083717b4a0341",
    abi: ATokenAbi,
    decimals: 18,
  },
  aUSDT: {
    address: "0x71fc860f7d3a592a4a98740e39db31d25db65ae8",
    abi: ATokenAbi,
    decimals: 6,
  },
  aBUSD: {
    address: "0x6ee0f7bb50a54ab5253da0667b0dc2ee526c30a8",
    abi: ATokenAbi,
    decimals: 18,
  },
  aBAT: {
    address: "0xe1ba0fb44ccb0d11b80f92f4f8ed94ca3ff51d00",
    abi: ATokenAbi,
    decimals: 18,
  },
  aKNC: {
    address: "0x9d91be44c06d373a8a226e1f3b146956083803eb",
    abi: ATokenAbi,
    decimals: 18,
  },
  aLEND: {
    address: "0x7d2d3688df45ce7c552e19c27e007673da9204b8",
    abi: ATokenAbi,
    decimals: 18,
  },
  aLINK: {
    address: "0xa64bd6c70cb9051f6a9ba1f163fdc07e0dfb5f84",
    abi: ATokenAbi,
    decimals: 18,
  },
  aMANA: {
    address: "0x6fce4a401b6b80ace52baaefe4421bd188e76f6f",
    abi: ATokenAbi,
    decimals: 18,
  },
  aMKR: {
    address: "0x7deb5e830be29f91e298ba5ff1356bb7f8146998",
    abi: ATokenAbi,
    decimals: 18,
  },
  aREP: {
    address: "0x71010a9d003445ac60c4e6a7017c1e89a477b438",
    abi: ATokenAbi,
    decimals: 18,
  },
  aSNX: {
    address: "0x328c4c80bc7aca0834db37e6600a6c49e12da4de",
    abi: ATokenAbi,
    decimals: 18,
  },
  aWBTC: {
    address: "0xfc4b8ed459e00e5400be803a9bb3954234fd50e3",
    abi: ATokenAbi,
    decimals: 8,
  },
  aZRX: {
    address: "0x6fb0855c404e09c47c3fbca25f08d4e41f9f062f",
    abi: ATokenAbi,
    decimals: 18,
  },
};

export default contracts;
