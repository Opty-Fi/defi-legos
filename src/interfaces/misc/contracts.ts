import IWETHAbi from "./abi/WETH.json";
import IYWETHAbi from "./abi/YWETH.json";
import IETHGatewayAbi from "./abi/ETHGateway.json";

const contracts = {
    IETHGateway: { abi: IETHGatewayAbi },
    IWETH: { abi: IWETHAbi },
    IYWETH: { abi: IYWETHAbi },
};

export default contracts; 