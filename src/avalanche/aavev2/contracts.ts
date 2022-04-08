import LendingPoolAddressesProviderAbi from "./abi/AaveLendingPoolAddressesProvider.json";
import PriceOracleAbi from "./abi/AavePriceOracle.json";
import ATokenAbi from "./abi/AToken.json";
import ProtocolDataProviderAbi from "./abi/AaveProtocolDataProvider.json";
import AaveAbi from "./abi/Aave.json";
import LendingPoolAddressesProviderRegistryAbi from "./abi/AaveLendingPoolAddressesProviderRegistry.json";
import IncentivesController from "./abi/AaveIncentivesController.json";

const contracts = {
  AToken: { abi: ATokenAbi },
  Aave: { abi: AaveAbi },
  AavePriceOracle: { abi: PriceOracleAbi, address: "0xdC336Cd4769f4cC7E9d726DA53e6d3fC710cEB89" },
  AaveLendingPoolAddressesProvider: {
    abi: LendingPoolAddressesProviderAbi,
    address: "0xb6A86025F0FE1862B372cb0ca18CE3EDe02A318f",
  },
  AaveLendingPoolAddressesProviderRegistry: {
    abi: LendingPoolAddressesProviderRegistryAbi,
    address: "0x4235E22d9C3f28DCDA82b58276cb6370B01265C2",
  },
  AaveLendingPool: {
    abi: AaveAbi,
    address: "0x4F01AeD16D97E3aB5ab2B501154DC9bb0F1A5A2C",
  },
  AaveProtocolDataProvider: {
    abi: ProtocolDataProviderAbi,
    address: "0x65285E9dfab318f57051ab2b139ccCf232945451",
  },
  AaveIncentivesController: {
    abi: IncentivesController,
    address: "0x01D83Fe6A10D2f2B7AF17034343746188272cAc9",
  },
  pools: {
    dai: {
      pool: "0x4235E22d9C3f28DCDA82b58276cb6370B01265C2",
      lpToken: "0x47AFa96Cdc9fAb46904A55a6ad4bf6660B53c38a",
      tokens: ["0xd586E7F844cEa2F87f50152665BCbc2C279D8d70"],
    },
    usdc: {
      pool: "0x4235E22d9C3f28DCDA82b58276cb6370B01265C2",
      lpToken: "0x46A51127C3ce23fb7AB1DE06226147F446e4a857",
      tokens: ["0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664"],
    },
    usdt: {
      pool: "0x4235E22d9C3f28DCDA82b58276cb6370B01265C2",
      lpToken: "0x532E6537FEA298397212F09A61e03311686f548e",
      tokens: ["0xc7198437980c041c805A1EDcbA50c1Ce5db95118"],
    },
    wbtc: {
      pool: "0x4235E22d9C3f28DCDA82b58276cb6370B01265C2",
      lpToken: "0x686bEF2417b6Dc32C50a3cBfbCC3bb60E1e9a15D",
      tokens: ["0x50b7545627a5162F82A992c33b87aDc75187B218"],
    },
    weth: {
      pool: "0x4235E22d9C3f28DCDA82b58276cb6370B01265C2",
      lpToken: "0x53f7c5869a859F0AeC3D334ee8B4Cf01E3492f21",
      tokens: ["0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB"],
    },
    aave: {
      pool: "0x4235E22d9C3f28DCDA82b58276cb6370B01265C2",
      lpToken: "0xD45B7c061016102f9FA220502908f2c0f1add1D7",
      tokens: ["0x63a72806098Bd3D9520cC43356dD78afe5D386D9"],
    },
    wavax: {
      pool: "0x4235E22d9C3f28DCDA82b58276cb6370B01265C2",
      lpToken: "0xDFE521292EcE2A4f44242efBcD66Bc594CA9714B",
      tokens: ["0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7"],
    },
  },
};

export default contracts;
