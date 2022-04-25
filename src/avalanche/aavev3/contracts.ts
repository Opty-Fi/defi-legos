import LendingPoolAddressesProviderAbi from "./abi/AaveLendingPoolAddressesProvider.json";
import PriceOracleAbi from "./abi/AaveOracle.json";
import ATokenAbi from "./abi/AToken.json";
import ProtocolDataProviderAbi from "./abi/AaveProtocolDataProvider.json";
import LendingPoolAddressesProviderRegistryAbi from "./abi/AaveLendingPoolAddressesProviderRegistry.json";
import IncentivesController from "./abi/AaveIncentives.json";

const contracts = {
  AToken: { abi: ATokenAbi },
  AavePriceOracle: { abi: PriceOracleAbi, address: "0xEBd36016B3eD09D4693Ed4251c67Bd858c3c7C9C" },
  AaveLendingPoolAddressesProvider: {
    abi: LendingPoolAddressesProviderAbi,
    address: "0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb",
  },
  AaveLendingPoolAddressesProviderRegistry: {
    abi: LendingPoolAddressesProviderRegistryAbi,
    address: "0x770ef9f4fe897e59daCc474EF11238303F9552b6",
  },
  AaveLendingPool: {
    address: "0x794a61358D6845594F94dc1DB02A252b5b4814aD",
  },
  AaveProtocolDataProvider: {
    abi: ProtocolDataProviderAbi,
    address: "0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb",
  },
  AaveIncentivesController: {
    abi: IncentivesController,
    address: "0x929EC64c34a17401F460460D4B9390518E5B473e",
  },
  pools: {
    dai: {
      pool: "0x770ef9f4fe897e59daCc474EF11238303F9552b6",
      lpToken: "0x82E64f49Ed5EC1bC6e43DAD4FC8Af9bb3A2312EE",
      tokens: ["0xd586E7F844cEa2F87f50152665BCbc2C279D8d70"],
    },
    link: {
      pool: "0x770ef9f4fe897e59daCc474EF11238303F9552b6",
      lpToken: "0x191c10Aa4AF7C30e871E70C95dB0E4eb77237530",
      tokens: ["0x5947BB275c521040051D82396192181b413227A3"],
    },
    usdc: {
      pool: "0x770ef9f4fe897e59daCc474EF11238303F9552b6",
      lpToken: "0x625E7708f30cA75bfd92586e17077590C60eb4cD",
      tokens: ["0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E"],
    },
    usdt: {
      pool: "0x770ef9f4fe897e59daCc474EF11238303F9552b6",
      lpToken: "0x6ab707Aca953eDAeFBc4fD23bA73294241490620",
      tokens: ["0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7"],
    },
    wbtc: {
      pool: "0x770ef9f4fe897e59daCc474EF11238303F9552b6",
      lpToken: "0x078f358208685046a11C85e8ad32895DED33A249",
      tokens: ["0x50b7545627a5162F82A992c33b87aDc75187B218"],
    },
    weth: {
      pool: "0x770ef9f4fe897e59daCc474EF11238303F9552b6",
      lpToken: "0xe50fA9b3c56FfB159cB0FCA61F5c9D750e8128c8",
      tokens: ["0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB"],
    },
    aave: {
      pool: "0x770ef9f4fe897e59daCc474EF11238303F9552b6",
      lpToken: "0xf329e36C7bF6E5E86ce2150875a84Ce77f477375",
      tokens: ["0x63a72806098Bd3D9520cC43356dD78afe5D386D9"],
    },
    wavax: {
      pool: "0x770ef9f4fe897e59daCc474EF11238303F9552b6",
      lpToken: "0x6d80113e533a2C0fe82EaBD35f1875DcEA89Ea97",
      tokens: ["0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7"],
    },
  },
};

export default contracts;
