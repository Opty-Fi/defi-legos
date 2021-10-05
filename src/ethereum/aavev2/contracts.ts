import LendingPoolAddressesProviderAbi from "./abi/LendingPoolAddressProvider.json"
import PriceOracleAbi from "./abi/PriceOracle.json"
import ATokenAbi from "./abi/AToken.json";
import LendingPoolAddressProviderRegistryAbi from "./abi/LendingPoolAddressProviderRegistry.json"
import LendingPoolAbi from "./abi/LendingPool.json"
import ProtocolDataProviderAbi from "./abi/ProtocolDataProvider.json"

const contracts = {
    ATokenAbi,
    LendingPoolAddressesProvider: {
        abi: LendingPoolAddressesProviderAbi,
        address: "0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5"
    },
    LendingPoolAddressProviderRegistry: {
        abi: LendingPoolAddressProviderRegistryAbi,
        address: "0x52D306e36E3B6B02c153d0266ff0f85d18BCD413"
    },
    LendingPool: {
        abi: LendingPoolAbi,
        address: "0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9"
    },
    PriceOracle: {
        abi: PriceOracleAbi,
        address: "0xA50ba011c48153De246E5192C8f9258A2ba79Ca9"
    },
    ProtocolDataProvider: {
        abi: ProtocolDataProviderAbi,
        address: "0x057835Ad21a177dbdd3090bB1CAE03EaCF78Fc6d"
    },
}

export default contracts;