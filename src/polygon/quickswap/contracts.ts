import QuickswapFactoryAbi from "../../uniswapV2/abi/IUniswapV2Factory.json";
import QuickswapPairAbi from "../../uniswapV2/abi/IUniswapV2Pair.json";
import QuickswapRouterAbi from "../../uniswapV2/abi/IUniswapV2Router02.json";
import StakingRewardsFactoryAbi from "./abi/StakingRewardsFactory.json";

const contracts = {
  QuickswapFactory: { abi: QuickswapFactoryAbi, address: "0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32" },
  QuickswapRouter: { abi: QuickswapRouterAbi, address: "0xa5e0829caced8ffdd4de3c43696c57f7d7a678ff" },
  StakingRewardsFactory: { abi: StakingRewardsFactoryAbi, address: "0x8aAA5e259F74c8114e0a471d9f2ADFc66Bfe09ed" },
  staking: {
    abi: [],
    pools: {},
  },
  liquidity: {
    abi: QuickswapPairAbi,
    pools: {
      "WMATIC-USDC": {
        pool: "0x6e7a5FAFcec6BB1e78bAE2A1F0B612012BF14827",
        token0: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
        token1: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
      },
    },
  },
};

export default contracts;
