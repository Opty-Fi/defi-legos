import ModifiersAbi from "./abi/Modifiers.json";
import ModifiersControllerAbi from "./abi/ModifiersController.json";
import MultiCallAbi from "./abi/MultiCall.json";
import RegistryAbi from "./abi/Registry.json";
import VaultAbi from "./abi/Vault.json";

const contracts = {
    Modifiers: { abi: ModifiersAbi },
    ModifiersController: { abi: ModifiersControllerAbi },
    MultiCall: { abi: MultiCallAbi },
    Registry: { abi: RegistryAbi },
    Vault: { abi: VaultAbi }
};

export default contracts;