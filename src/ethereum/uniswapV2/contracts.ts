import factoryAbi from "../../uniswapV2/abi/IUniswapV2Factory.json";
import pairAbi from "../../uniswapV2/abi/IUniswapV2Pair.json";
import router01Abi from "../../uniswapV2/abi/IUniswapV2Router01.json";
import router02Abi from "../../uniswapV2/abi/IUniswapV2Router02.json";

const contracts = {
  factory: {
    address: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
    abi: factoryAbi,
  },
  pair: {
    abi: pairAbi,
  },
  router01: {
    address: "0xf164fC0Ec4E93095b804a4795bBe1e041497b92a",
    abi: router01Abi,
  },
  router02: {
    address: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
    abi: router02Abi,
  },
  liquidity: {
    abi: pairAbi,
    pools: {
      "WISE-ETH": {
        pool: "0x21b8065d10f73EE2e260e5B47D3344d3Ced7596E",
        token0: "0x66a0f676479Cee1d7373f3DC2e2952778BfF5bd6",
        token1: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      },
      "USDC-ETH": {
        pool: "0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc",
        token0: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        token1: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      },
      "DAI-USDC": {
        pool: "0xAE461cA67B15dc8dc81CE7615e0320dA1A9aB8D5",
        token0: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        token1: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      },
      "ETH-USDT": {
        pool: "0x0d4a11d5EEaaC28EC3F61d100daF4d40471f1852",
        token0: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        token1: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      },
      "FNK-USDT": {
        pool: "0x61B62c5D56ccD158A38367eF2f539668a06356aB",
        token0: "0xB5FE099475d3030DDe498c3BB6F3854F762A48Ad",
        token1: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      },
      "MC-ETH": {
        pool: "0xcCb63225a7B19dcF66717e4d40C9A72B39331d61",
        token0: "0x949D48EcA67b17269629c7194F4b727d4Ef9E5d6",
        token1: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      },
      "UNI-ETH": {
        pool: "0xd3d2E2692501A5c9Ca623199D38826e513033a17",
        token0: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
        token1: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      },
      "PAXG-ETH": {
        pool: "0x9C4Fe5FFD9A9fC5678cFBd93Aa2D4FD684b67C4C",
        token0: "0x45804880De22913dAFE09f4980848ECE6EcbAf78",
        token1: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      },
      "FEI-TRIBE": {
        pool: "0x9928e4046d7c6513326cCeA028cD3e7a91c7590A",
        token0: "0x956F47F50A910163D8BF957Cf5846D573E7f87CA",
        token1: "0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B",
      },
      "FXS-FRAX": {
        pool: "0xE1573B9D29e2183B1AF0e743Dc2754979A40D237",
        token0: "0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0",
        token1: "0x853d955aCEf822Db058eb8505911ED77F175b99e",
      },
    },
  },
};

export default contracts;
