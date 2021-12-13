import YVaultAbi from "./abi/IYVault.json";

const contracts = {
    yvault: {abi: YVaultAbi},
    pools: {
        "dai": {
            "pool": "0xACd43E627e64355f1861cEC6d3a6688B31a6F952",
            "lpToken": "0xACd43E627e64355f1861cEC6d3a6688B31a6F952",
            "tokens": ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
            "deprecated": true
          },
          "usdc": {
            "pool": "0x597aD1e0c13Bfe8025993D9e79C69E1c0233522e",
            "lpToken": "0x597aD1e0c13Bfe8025993D9e79C69E1c0233522e",
            "tokens": ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
            "deprecated": true
          },
          "usdt": {
            "pool": "0x2f08119C6f07c006695E079AAFc638b8789FAf18",
            "lpToken": "0x2f08119C6f07c006695E079AAFc638b8789FAf18",
            "tokens": ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
            "deprecated": true
          },
          "three_crv": {
            "pool": "0x9cA85572E6A3EbF24dEDd195623F188735A5179f",
            "lpToken": "0x9cA85572E6A3EbF24dEDd195623F188735A5179f",
            "tokens": ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
            "deprecated": true
          },
          "tusd": {
            "pool": "0x37d19d1c4E1fa9DC47bD1eA12f742a0887eDa74a",
            "lpToken": "0x37d19d1c4E1fa9DC47bD1eA12f742a0887eDa74a",
            "tokens": ["0x0000000000085d4780B73119b644AE5ecd22b376"],
            "deprecated": true
          },
          "weth": {
            "pool": "0xe1237aA7f535b0CC33Fd973D66cBf830354D16c7",
            "lpToken": "0xe1237aA7f535b0CC33Fd973D66cBf830354D16c7",
            "tokens": ["0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"],
            "deprecated": true
          },
          "link_yLINK": {
            "pool": "0x881b06da56BB5675c54E4Ed311c21E54C5025298",
            "lpToken": "0x881b06da56BB5675c54E4Ed311c21E54C5025298",
            "tokens": ["0x514910771AF9Ca656af840dff83E8264EcF986CA"],
            "deprecated": true
          },
          "busd": {
            "pool": "0x04bc0ab673d88ae9dbc9da2380cb6b79c4bca9ae",
            "lpToken": "0x04bc0ab673d88ae9dbc9da2380cb6b79c4bca9ae",
            "tokens": ["0x4Fabb145d64652a948d72533023f6E7A623C7C53"],
            "deprecated": true
          },
          "yfi": {
            "pool": "0xBA2E7Fed597fd0E3e70f5130BcDbbFE06bB94fe1",
            "lpToken": "0xBA2E7Fed597fd0E3e70f5130BcDbbFE06bB94fe1",
            "tokens": ["0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e"],
            "deprecated": true
          }
    },
}

export default contracts;