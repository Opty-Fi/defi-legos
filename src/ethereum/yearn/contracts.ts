import IYearnAbi from "./abi/IYearn.json";

const contracts = {
  yearn: {abi: IYearnAbi},
  pools: {
    "dai_dai+usdc+usdt_yearn": {
        "pool": "0x2dded6Da1BF5DBdF597C45fcFaa3194e53EcfeAF",
        "lpToken": "0x5282a4eF67D9C33135340fB3289cc1711c13638C",
        "tokens": ["0x6B175474E89094C44Da98b954EedeAC495271d0F"]
      },
      "usdc_dai+usdc+usdt_yearn": {
        "pool": "0x2dded6Da1BF5DBdF597C45fcFaa3194e53EcfeAF",
        "lpToken": "0x5282a4eF67D9C33135340fB3289cc1711c13638C",
        "tokens": ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"]
      },
      "usdt_dai+usdc+usdt_yearn": {
        "pool": "0x2dded6Da1BF5DBdF597C45fcFaa3194e53EcfeAF",
        "lpToken": "0x5282a4eF67D9C33135340fB3289cc1711c13638C",
        "tokens": ["0xdAC17F958D2ee523a2206206994597C13D831ec7"]
      },
      "dai+usdc+usdt_yearn": {
        "pool": "0x2dded6Da1BF5DBdF597C45fcFaa3194e53EcfeAF",
        "lpToken": "0x5282a4eF67D9C33135340fB3289cc1711c13638C",
        "tokens": [
          "0x6B175474E89094C44Da98b954EedeAC495271d0F",
          "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          "0xdAC17F958D2ee523a2206206994597C13D831ec7"
        ]
      },
  },
}

export default contracts;