import LendingPoolAddressesProviderAbi from "./abi/AaveLendingPoolAddressesProvider.json";
import PriceOracleAbi from "./abi/AaveOracle.json";
import ATokenAbi from "./abi/AToken.json";
import ProtocolDataProviderAbi from "./abi/AaveProtocolDataProvider.json";
import LendingPoolAddressesProviderRegistryAbi from "./abi/AaveLendingPoolAddressesProviderRegistry.json";
import IncentivesController from "./abi/AaveIncentives.json";

const contracts = {
  AToken: { abi: ATokenAbi },
  AavePriceOracle: { abi: PriceOracleAbi, address: "0xb023e699F5a33916Ea823A16485e259257cA8Bd1" },
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
      tokens: ["0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063"],
    },
    link: {
      pool: "0x770ef9f4fe897e59daCc474EF11238303F9552b6",
      lpToken: "0x191c10Aa4AF7C30e871E70C95dB0E4eb77237530",
      tokens: ["0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39"],
    },
    usdc: {
      pool: "0x770ef9f4fe897e59daCc474EF11238303F9552b6",
      lpToken: "0x625E7708f30cA75bfd92586e17077590C60eb4cD",
      tokens: ["0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"],
    },
    usdt: {
      pool: "0x770ef9f4fe897e59daCc474EF11238303F9552b6",
      lpToken: "0x6ab707Aca953eDAeFBc4fD23bA73294241490620",
      tokens: ["0xc2132D05D31c914a87C6611C10748AEb04B58e8F"],
    },
    wbtc: {
      pool: "0x770ef9f4fe897e59daCc474EF11238303F9552b6",
      lpToken: "0x078f358208685046a11C85e8ad32895DED33A249",
      tokens: ["0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6"],
    },
    weth: {
      pool: "0x770ef9f4fe897e59daCc474EF11238303F9552b6",
      lpToken: "0xe50fA9b3c56FfB159cB0FCA61F5c9D750e8128c8",
      tokens: ["0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"],
    },
    aave: {
      pool: "0x770ef9f4fe897e59daCc474EF11238303F9552b6",
      lpToken: "0xf329e36C7bF6E5E86ce2150875a84Ce77f477375",
      tokens: ["0xD6DF932A45C0f255f85145f286eA0b292B21C90B"],
    },
    wmatic: {
      pool: "0x770ef9f4fe897e59daCc474EF11238303F9552b6",
      lpToken: "0x6d80113e533a2C0fe82EaBD35f1875DcEA89Ea97",
      tokens: ["0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"],
    },
    ageur: {
      pool: "0x770ef9f4fe897e59daCc474EF11238303F9552b6",
      lpToken: "0x8437d7C167dFB82ED4Cb79CD44B7a32A1dd95c77",
      tokens: ["0xE0B52e49357Fd4DAf2c15e02058DCE6BC0057db4"],
    },
    eur: {
      pool: "0x770ef9f4fe897e59daCc474EF11238303F9552b6",
      lpToken: "0x38d693cE1dF5AaDF7bC62595A37D667aD57922e5",
      tokens: ["0xE111178A87A3BFf0c8d18DECBa5798827539Ae99"],
    },
    crv: {
      pool: "0x770ef9f4fe897e59daCc474EF11238303F9552b6",
      lpToken: "0x513c7E3a9c69cA3e22550eF58AC1C0088e918FFf",
      tokens: ["0x172370d5Cd63279eFa6d502DAB29171933a610AF"],
    },
    sushi: {
      pool: "0x770ef9f4fe897e59daCc474EF11238303F9552b6",
      lpToken: "0xc45A479877e1e9Dfe9FcD4056c699575a1045dAA",
      tokens: ["0x0b3F868E0BE5597D5DB7fEB59E1CADBb0fdDa50a"],
    },
    ghst: {
      pool: "0x770ef9f4fe897e59daCc474EF11238303F9552b6",
      lpToken: "0x8Eb270e296023E9D92081fdF967dDd7878724424",
      tokens: ["0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7"],
    },
    jeur: {
      pool: "0x770ef9f4fe897e59daCc474EF11238303F9552b6",
      lpToken: "0x6533afac2E7BCCB20dca161449A13A32D391fb00",
      tokens: ["0x4e3Decbb3645551B8A19f0eA1678079FCB33fB4c"],
    },
    dpi: {
      pool: "0x770ef9f4fe897e59daCc474EF11238303F9552b6",
      lpToken: "0x724dc807b04555b71ed48a6896b6F41593b8C637",
      tokens: ["0x85955046DF4668e1DD369D2DE9f3AEB98DD2A369"],
    },
    bal: {
      pool: "0x770ef9f4fe897e59daCc474EF11238303F9552b6",
      lpToken: "0x8ffDf2DE812095b1D19CB146E4c004587C0A0692",
      tokens: ["0x9a71012B13CA4d3D0Cdc72A177DF3ef03b0E76A3"],
    },
  },
};

export default contracts;
