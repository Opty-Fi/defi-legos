import LendingPoolAddressesProviderAbi from "./abi/AaveLendingPoolAddressesProvider.json";
import PriceOracleAbi from "./abi/AavePriceOracle.json";
import ATokenAbi from "./abi/AToken.json";
import ProtocolDataProviderAbi from "./abi/AaveProtocolDataProvider.json";
import AaveAbi from "./abi/Aave.json";
import LendingPoolAddressesProviderRegistryAbi from "./abi/AaveLendingPoolAddressesProviderRegistry.json";

const contracts = {
  AToken: { abi: ATokenAbi },
  Aave: { abi: AaveAbi },
  AavePriceOracle: { abi: PriceOracleAbi, address: "0x0229f777b0fab107f9591a41d5f02e4e98db6f2d" },
  AaveLendingPoolAddressesProvider: {
    abi: LendingPoolAddressesProviderAbi,
    address: "0xd05e3E715d945B59290df0ae8eF85c1BdB684744",
  },
  AaveLendingPoolAddressesProviderRegistry: {
    abi: LendingPoolAddressesProviderRegistryAbi,
    address: "0x3ac4e9aa29940770aeC38fe853a4bbabb2dA9C19",
  },
  AaveLendingPool: {
    abi: AaveAbi,
    address: "0x8dff5e27ea6b7ac08ebfdf9eb090f32ee9a30fcf",
  },
  AaveProtocolDataProvider: {
    abi: ProtocolDataProviderAbi,
    address: "0x7551b5D2763519d4e37e8B81929D336De671d46d",
  },
  pools: {
    dai: {
      pool: "0x8dff5e27ea6b7ac08ebfdf9eb090f32ee9a30fcf",
      lpToken: "0x27F8D03b3a2196956ED754baDc28D73be8830A6e",
      tokens: ["0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063"],
    },
    usdc: {
      pool: "0x8dff5e27ea6b7ac08ebfdf9eb090f32ee9a30fcf",
      lpToken: "0x1a13F4Ca1d028320A707D99520AbFefca3998b7F",
      tokens: ["0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"],
    },
    usdt: {
      pool: "0x8dff5e27ea6b7ac08ebfdf9eb090f32ee9a30fcf",
      lpToken: "0x60D55F02A771d515e077c9C2403a1ef324885CeC",
      tokens: ["0xc2132D05D31c914a87C6611C10748AEb04B58e8F"],
    },
    wbtc: {
      pool: "0x8dff5e27ea6b7ac08ebfdf9eb090f32ee9a30fcf",
      lpToken: "0x5c2ed810328349100A66B82b78a1791B101C9D61",
      tokens: ["0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6"],
    },
    weth: {
      pool: "0x8dff5e27ea6b7ac08ebfdf9eb090f32ee9a30fcf",
      lpToken: "0x28424507fefb6f7f8E9D3860F56504E4e5f5f390",
      tokens: ["0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"],
    },
    wmatic: {
      pool: "0x8dff5e27ea6b7ac08ebfdf9eb090f32ee9a30fcf",
      lpToken: "0x8dF3aad3a84da6b69A4DA8aeC3eA40d9091B2Ac4",
      tokens: ["0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"],
    },
  },
};

export default contracts;
