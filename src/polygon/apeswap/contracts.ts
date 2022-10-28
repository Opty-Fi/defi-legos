import ApeswapFactoryAbi from "../../uniswapV2/abi/IUniswapV2Factory.json";
import ApeswapPairAbi from "../../uniswapV2/abi/IUniswapV2Pair.json";
import ApeswapRouterAbi from "../../uniswapV2/abi/IUniswapV2Router02.json";

const contracts = {
  ApeswapFactory: { abi: ApeswapFactoryAbi, address: "0xCf083Be4164828f00cAE704EC15a36D711491284" },
  ApeswapRouter: { abi: ApeswapRouterAbi, address: "0xC0788A3aD43d79aa53B09c2EaCc313A787d1d607" },
  staking: {
    abi: [],
    pools: {},
  },
  liquidity: {
    abi: ApeswapPairAbi,
    pools: {
      "WMATIC-USDC": {
        pool: "0x6Cf8654e85AB489cA7e70189046D507ebA233613",
        token0: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
        token1: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
      },
    },
  },
};

export default contracts;
