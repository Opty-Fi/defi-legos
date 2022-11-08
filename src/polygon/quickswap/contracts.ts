import QuickswapFactoryAbi from "../../uniswapV2/abi/IUniswapV2Factory.json";
import QuickswapPairAbi from "../../uniswapV2/abi/IUniswapV2Pair.json";
import QuickswapRouterAbi from "../../uniswapV2/abi/IUniswapV2Router02.json";
import StakingRewardsFactoryAbi from "./abi/StakingRewardsFactory.json";

const contracts = {
  QuickswapFactory: { abi: QuickswapFactoryAbi, address: "0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32" },
  QuickswapRouter: { abi: QuickswapRouterAbi, address: "0xa5e0829caced8ffdd4de3c43696c57f7d7a678ff" },
  StakingRewardsFactory: { abi: StakingRewardsFactoryAbi, address: "0x8aAA5e259F74c8114e0a471d9f2ADFc66Bfe09ed" },
  rootKFactor: "5000000000000000000",
  staking: {
    abi: [],
    pools: {},
  },
  liquidity: {
    abi: QuickswapPairAbi,
    pools: {
      "USDT-OPT3": {
        pool: "0xcfeadf2671f85674c6377e2fdd2593985adfa8c5",
        token0: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
        token1: "0xCf630283E8Ff2e30C29093bC8aa58CADD8613039",
      },
      "WETH-DAI": {
        pool: "0x4a35582a710e1f4b2030a3f826da20bfb6703c09",
        token0: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
        token1: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
      },
      "WETH-USDT": {
        pool: "0xf6422b997c7f54d1c6a6e103bcb1499eea0a7046",
        token0: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
        token1: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
      },
      "WBTC-WETH": {
        pool: "0xdc9232e2df177d7a12fdff6ecbab114e2231198d",
        token0: "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6",
        token1: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
      },
      "WETH-RVLT": {
        pool: "0x3902b89e0e28a23f82086b87bb81ef5a1eabf276",
        token0: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
        token1: "0xf0f9D895aCa5c8678f706FB8216fa22957685A13",
      },
      "WMATIC-WETH": {
        pool: "0xadbf1854e5883eb8aa7baf50705338739e558e5b",
        token0: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
        token1: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
      },
      "USDC-miMATIC": {
        pool: "0x160532d2536175d65c03b97b0630a9802c274dad",
        token0: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
        token1: "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1",
      },
      "USDC-USDT": {
        pool: "0x2cf7252e74036d1da831d11089d326296e64a728",
        token0: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
        token1: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
      },
      "USDC-WETH": {
        pool: "0x853ee4b2a13f8a742d64c8f088be7ba2131f670d",
        token0: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
        token1: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
      },
      "WMATIC-USDC": {
        pool: "0x6e7a5FAFcec6BB1e78bAE2A1F0B612012BF14827",
        token0: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
        token1: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
      },
    },
  },
};

export default contracts;
