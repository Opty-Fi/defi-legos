import swapAbi from "./abi/CurveSwap.json";
import metaSwapAbi from "./abi/CurveMetaSwap.json";
import poolTokenV1Abi from "./abi/CurvePoolTokenV1.json";
import poolTokenV2Abi from "./abi/CurvePoolTokenV2.json";
import poolTokenV3Abi from "./abi/CurvePoolTokenV3.json";
import zapAbi from "./abi/CurveZap.json";
import metaZapAbi from "./abi/CurveMetaZap.json";
import liquidityGaugeAbi from "./abi/CurveLiquidityGauge.json"
import liquidityGaugeV2Abi from "./abi/CurveLiquidityGaugeV2.json"
import liquidityGaugeV3Abi from "./abi/CurveLiquidityGaugeV3.json"

// Reference: https://curve.readthedocs.io/ref-addresses.html#deployment-addresses

const contracts = {
  poolTokenV1Abi,
  poolTokenV2Abi,
  poolTokenV3Abi,
  swapAbi,
  metaSwapAbi,
  zapAbi,
  metaZapAbi,
  liquidityGaugeAbi,
  liquidityGaugeV2Abi,
  liquidityGaugeV3Abi,
  "CurveDepositPool": {
    "tusd_dai+usdc+usdt+tusd": {
      "pool": "0xbBC81d23Ea2c3ec7e56D39296F0cbB648873a5d3",
      "lpToken": "0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8",
      "tokens": ["0x0000000000085d4780B73119b644AE5ecd22b376"]
    },
    "dai_dai+usdc": {
      "pool": "0xeB21209ae4C2c9FF2a86ACA31E123764A3B6Bc06",
      "lpToken": "0x845838DF265Dcd2c412A1Dc9e959c7d08537f8a2",
      "tokens": ["0x6b175474e89094c44da98b954eedeac495271d0f"]
    },
    "usdc_dai+usdc": {
      "pool": "0xeB21209ae4C2c9FF2a86ACA31E123764A3B6Bc06",
      "lpToken": "0x845838DF265Dcd2c412A1Dc9e959c7d08537f8a2",
      "tokens": ["0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"]
    },
    "dai+usdc": {
      "pool": "0xeB21209ae4C2c9FF2a86ACA31E123764A3B6Bc06",
      "lpToken": "0x845838DF265Dcd2c412A1Dc9e959c7d08537f8a2",
      "tokens": ["0x6b175474e89094c44da98b954eedeac495271d0f", "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"]
    },
    "dai_dai+usdc+usdt": {
      "pool": "0xac795D2c97e60DF6a99ff1c814727302fD747a80",
      "lpToken": "0x9fC689CCaDa600B6DF723D9E47D84d76664a1F23",
      "tokens": ["0x6b175474e89094c44da98b954eedeac495271d0f"]
    },
    "usdc_dai+usdc+usdt": {
      "pool": "0xac795D2c97e60DF6a99ff1c814727302fD747a80",
      "lpToken": "0x9fC689CCaDa600B6DF723D9E47D84d76664a1F23",
      "tokens": ["0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"]
    },
    "usdt_dai+usdc+usdt": {
      "pool": "0xac795D2c97e60DF6a99ff1c814727302fD747a80",
      "lpToken": "0x9fC689CCaDa600B6DF723D9E47D84d76664a1F23",
      "tokens": ["0xdac17f958d2ee523a2206206994597c13d831ec7"]
    },
    "dai+usdc+usdt": {
      "pool": "0xac795D2c97e60DF6a99ff1c814727302fD747a80",
      "lpToken": "0x9fC689CCaDa600B6DF723D9E47D84d76664a1F23",
      "tokens": [
        "0x6b175474e89094c44da98b954eedeac495271d0f",
        "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        "0xdac17f958d2ee523a2206206994597c13d831ec7"
      ]
    },
    "dai_ypaxCrv": {
      "pool": "0xA50cCc70b6a011CffDdf45057E39679379187287",
      "lpToken": "0xD905e2eaeBe188fc92179b6350807D8bd91Db0D8",
      "tokens": ["0x6b175474e89094c44da98b954eedeac495271d0f"]
    },
    "usdc_ypaxCrv": {
      "pool": "0xA50cCc70b6a011CffDdf45057E39679379187287",
      "lpToken": "0xD905e2eaeBe188fc92179b6350807D8bd91Db0D8",
      "tokens": ["0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"]
    },
    "usdt_ypaxCrv": {
      "pool": "0xA50cCc70b6a011CffDdf45057E39679379187287",
      "lpToken": "0xD905e2eaeBe188fc92179b6350807D8bd91Db0D8",
      "tokens": ["0xdac17f958d2ee523a2206206994597c13d831ec7"]
    },
    "dai_dai+usdc+usdt+tusd": {
      "pool": "0xbBC81d23Ea2c3ec7e56D39296F0cbB648873a5d3",
      "lpToken": "0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8",
      "tokens": ["0x6b175474e89094c44da98b954eedeac495271d0f"]
    },
    "usdc_dai+usdc+usdt+tusd": {
      "pool": "0xbBC81d23Ea2c3ec7e56D39296F0cbB648873a5d3",
      "lpToken": "0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8",
      "tokens": ["0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"]
    },
    "usdt_dai+usdc+usdt+tusd": {
      "pool": "0xbBC81d23Ea2c3ec7e56D39296F0cbB648873a5d3",
      "lpToken": "0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8",
      "tokens": ["0xdac17f958d2ee523a2206206994597c13d831ec7"]
    },
    "dai+usdc+usdt+tusd": {
      "pool": "0xbBC81d23Ea2c3ec7e56D39296F0cbB648873a5d3",
      "lpToken": "0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8",
      "tokens": [
        "0x6b175474e89094c44da98b954eedeac495271d0f",
        "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        "0xdac17f958d2ee523a2206206994597c13d831ec7",
        "0x0000000000085d4780B73119b644AE5ecd22b376"
      ]
    },
    "dai_crvPlain3andSUSD": {
      "pool": "0xFCBa3E75865d2d561BE8D220616520c171F12851",
      "lpToken": "0xC25a3A3b969415c80451098fa907EC722572917F",
      "tokens": ["0x6b175474e89094c44da98b954eedeac495271d0f"]
    },
    "usdc_crvPlain3andSUSD": {
      "pool": "0xFCBa3E75865d2d561BE8D220616520c171F12851",
      "lpToken": "0xC25a3A3b969415c80451098fa907EC722572917F",
      "tokens": ["0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"]
    },
    "usdt_crvPlain3andSUSD": {
      "pool": "0xFCBa3E75865d2d561BE8D220616520c171F12851",
      "lpToken": "0xC25a3A3b969415c80451098fa907EC722572917F",
      "tokens": ["0xdac17f958d2ee523a2206206994597c13d831ec7"]
    },
    "susd_crvPlain3andSUSD": {
      "pool": "0xFCBa3E75865d2d561BE8D220616520c171F12851",
      "lpToken": "0xC25a3A3b969415c80451098fa907EC722572917F",
      "tokens": ["0x57ab1ec28d129707052df4df418d58a2d46d5f51"]
    },
    "dai_dai+usdc+usdt+busd": {
      "pool": "0xb6c057591E073249F2D9D88Ba59a46CFC9B59EdB",
      "lpToken": "0x3B3Ac5386837Dc563660FB6a0937DFAa5924333B",
      "tokens": ["0x6b175474e89094c44da98b954eedeac495271d0f"]
    },
    "usdc_dai+usdc+usdt+busd": {
      "pool": "0xb6c057591E073249F2D9D88Ba59a46CFC9B59EdB",
      "lpToken": "0x3B3Ac5386837Dc563660FB6a0937DFAa5924333B",
      "tokens": ["0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"]
    },
    "usdt_dai+usdc+usdt+busd": {
      "pool": "0xb6c057591E073249F2D9D88Ba59a46CFC9B59EdB",
      "lpToken": "0x3B3Ac5386837Dc563660FB6a0937DFAa5924333B",
      "tokens": ["0xdac17f958d2ee523a2206206994597c13d831ec7"]
    },
    "busd_dai+usdc+usdt+busd": {
      "pool": "0xb6c057591E073249F2D9D88Ba59a46CFC9B59EdB",
      "lpToken": "0x3B3Ac5386837Dc563660FB6a0937DFAa5924333B",
      "tokens": ["0x4Fabb145d64652a948d72533023f6E7A623C7C53"]
    },
    "dai+usdc+usdt+busd": {
      "pool": "0xb6c057591E073249F2D9D88Ba59a46CFC9B59EdB",
      "lpToken": "0x3B3Ac5386837Dc563660FB6a0937DFAa5924333B",
      "tokens": [
        "0x6b175474e89094c44da98b954eedeac495271d0f",
        "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        "0xdac17f958d2ee523a2206206994597c13d831ec7",
        "0x4Fabb145d64652a948d72533023f6E7A623C7C53"
      ]
    },
    "gusd_dai+usdc+usdt+gusd": {
      "pool": "0x0aE274c98c0415C0651AF8cF52b010136E4a0082",
      "lpToken": "0xD2967f45c4f384DEEa880F807Be904762a3DeA07",
      "tokens": ["0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd"]
    },
    "dai_dai+usdc+usdt+gusd": {
      "pool": "0x0aE274c98c0415C0651AF8cF52b010136E4a0082",
      "lpToken": "0xD2967f45c4f384DEEa880F807Be904762a3DeA07",
      "tokens": ["0x6B175474E89094C44Da98b954EedeAC495271d0F"]
    },
    "usdc_dai+usdc+usdt+gusd": {
      "pool": "0x0aE274c98c0415C0651AF8cF52b010136E4a0082",
      "lpToken": "0xD2967f45c4f384DEEa880F807Be904762a3DeA07",
      "tokens": ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"]
    },
    "usdt_dai+usdc+usdt+gusd": {
      "pool": "0x0aE274c98c0415C0651AF8cF52b010136E4a0082",
      "lpToken": "0xD2967f45c4f384DEEa880F807Be904762a3DeA07",
      "tokens": ["0xdAC17F958D2ee523a2206206994597C13D831ec7"]
    },
    "dai+usdc+usdt+gusd": {
      "pool": "0x0aE274c98c0415C0651AF8cF52b010136E4a0082",
      "lpToken": "0xD2967f45c4f384DEEa880F807Be904762a3DeA07",
      "tokens": [
        "0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7"
      ]
    },
    "husd_dai+usdc+usdt+husd": {
      "pool": "0x0a53FaDa2d943057C47A301D25a4D9b3B8e01e8E",
      "lpToken": "0x5B5CFE992AdAC0C9D48E05854B2d91C73a003858",
      "tokens": ["0xdF574c24545E5FfEcb9a659c229253D4111d87e1"]
    },
    "dai_dai+usdc+usdt+husd": {
      "pool": "0x0a53FaDa2d943057C47A301D25a4D9b3B8e01e8E",
      "lpToken": "0x5B5CFE992AdAC0C9D48E05854B2d91C73a003858",
      "tokens": ["0x6B175474E89094C44Da98b954EedeAC495271d0F"]
    },
    "usdc_dai+usdc+usdt+husd": {
      "pool": "0x0a53FaDa2d943057C47A301D25a4D9b3B8e01e8E",
      "lpToken": "0x5B5CFE992AdAC0C9D48E05854B2d91C73a003858",
      "tokens": ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"]
    },
    "usdt_dai+usdc+usdt+husd": {
      "pool": "0x0a53FaDa2d943057C47A301D25a4D9b3B8e01e8E",
      "lpToken": "0x5B5CFE992AdAC0C9D48E05854B2d91C73a003858",
      "tokens": ["0xdAC17F958D2ee523a2206206994597C13D831ec7"]
    },
    "dai+usdc+usdt+husd": {
      "pool": "0x0a53FaDa2d943057C47A301D25a4D9b3B8e01e8E",
      "lpToken": "0x5B5CFE992AdAC0C9D48E05854B2d91C73a003858",
      "tokens": [
        "0xdF574c24545E5FfEcb9a659c229253D4111d87e1",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7"
      ]
    },
    "usdk_dai+usdc+usdt+usdk": {
      "pool": "0x6600e98b71dabfD4A8Cac03b302B0189Adb86Afb",
      "lpToken": "0x97E2768e8E73511cA874545DC5Ff8067eB19B787",
      "tokens": ["0x1c48f86ae57291F7686349F12601910BD8D470bb"]
    },
    "dai_dai+usdc+usdt+usdk": {
      "pool": "0x6600e98b71dabfD4A8Cac03b302B0189Adb86Afb",
      "lpToken": "0x97E2768e8E73511cA874545DC5Ff8067eB19B787",
      "tokens": ["0x6B175474E89094C44Da98b954EedeAC495271d0F"]
    },
    "usdc_dai+usdc+usdt+usdk": {
      "pool": "0x6600e98b71dabfD4A8Cac03b302B0189Adb86Afb",
      "lpToken": "0x97E2768e8E73511cA874545DC5Ff8067eB19B787",
      "tokens": ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"]
    },
    "usdt_dai+usdc+usdt+usdk": {
      "pool": "0x6600e98b71dabfD4A8Cac03b302B0189Adb86Afb",
      "lpToken": "0x97E2768e8E73511cA874545DC5Ff8067eB19B787",
      "tokens": ["0xdAC17F958D2ee523a2206206994597C13D831ec7"]
    },
    "dai+usdc+usdt+usdk": {
      "pool": "0x6600e98b71dabfD4A8Cac03b302B0189Adb86Afb",
      "lpToken": "0x97E2768e8E73511cA874545DC5Ff8067eB19B787",
      "tokens": [
        "0x1c48f86ae57291F7686349F12601910BD8D470bb",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7"
      ]
    },
    "usdn_dai+usdc+usdt+usdn": {
      "pool": "0x35796DAc54f144DFBAD1441Ec7C32313A7c29F39",
      "lpToken": "0x4f3E8F405CF5aFC05D68142F3783bDfE13811522",
      "tokens": ["0x674C6Ad92Fd080e4004b2312b45f796a192D27a0"]
    },
    "dai_dai+usdc+usdt+usdn": {
      "pool": "0x35796DAc54f144DFBAD1441Ec7C32313A7c29F39",
      "lpToken": "0x4f3E8F405CF5aFC05D68142F3783bDfE13811522",
      "tokens": ["0x6B175474E89094C44Da98b954EedeAC495271d0F"]
    },
    "usdc_dai+usdc+usdt+usdn": {
      "pool": "0x35796DAc54f144DFBAD1441Ec7C32313A7c29F39",
      "lpToken": "0x4f3E8F405CF5aFC05D68142F3783bDfE13811522",
      "tokens": ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"]
    },
    "usdt_dai+usdc+usdt+usdn": {
      "pool": "0x35796DAc54f144DFBAD1441Ec7C32313A7c29F39",
      "lpToken": "0x4f3E8F405CF5aFC05D68142F3783bDfE13811522",
      "tokens": ["0xdAC17F958D2ee523a2206206994597C13D831ec7"]
    },
    "dai+usdc+usdt+usdn": {
      "pool": "0x35796DAc54f144DFBAD1441Ec7C32313A7c29F39",
      "lpToken": "0x4f3E8F405CF5aFC05D68142F3783bDfE13811522",
      "tokens": [
        "0x674C6Ad92Fd080e4004b2312b45f796a192D27a0",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7"
      ]
    },
    "linkusd_dai+usdc+usdt+linkusd": {
      "pool": "0xF6bDc2619FFDA72c537Cd9605e0A274Dc48cB1C9",
      "lpToken": "0x6D65b498cb23deAba52db31c93Da9BFFb340FB8F",
      "tokens": ["0x0E2EC54fC0B509F445631Bf4b91AB8168230C752"]
    },
    "dai_dai+usdc+usdt+linkusd": {
      "pool": "0xF6bDc2619FFDA72c537Cd9605e0A274Dc48cB1C9",
      "lpToken": "0x6D65b498cb23deAba52db31c93Da9BFFb340FB8F",
      "tokens": ["0x6B175474E89094C44Da98b954EedeAC495271d0F"]
    },
    "usdc_dai+usdc+usdt+linkusd": {
      "pool": "0xF6bDc2619FFDA72c537Cd9605e0A274Dc48cB1C9",
      "lpToken": "0x6D65b498cb23deAba52db31c93Da9BFFb340FB8F",
      "tokens": ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"]
    },
    "usdt_dai+usdc+usdt+linkusd": {
      "pool": "0xF6bDc2619FFDA72c537Cd9605e0A274Dc48cB1C9",
      "lpToken": "0x6D65b498cb23deAba52db31c93Da9BFFb340FB8F",
      "tokens": ["0xdAC17F958D2ee523a2206206994597C13D831ec7"]
    },
    "dai+usdc+usdt+linkusd": {
      "pool": "0xF6bDc2619FFDA72c537Cd9605e0A274Dc48cB1C9",
      "lpToken": "0x6D65b498cb23deAba52db31c93Da9BFFb340FB8F",
      "tokens": [
        "0x0E2EC54fC0B509F445631Bf4b91AB8168230C752",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7"
      ]
    },
    "musd_dai+usdc+usdt+musd": {
      "pool": "0x78CF256256C8089d68Cde634Cf7cDEFb39286470",
      "lpToken": "0x1AEf73d49Dedc4b1778d0706583995958Dc862e6",
      "tokens": ["0xe2f2a5C287993345a840Db3B0845fbC70f5935a5"]
    },
    "dai_dai+usdc+usdt+musd": {
      "pool": "0x78CF256256C8089d68Cde634Cf7cDEFb39286470",
      "lpToken": "0x1AEf73d49Dedc4b1778d0706583995958Dc862e6",
      "tokens": ["0x6B175474E89094C44Da98b954EedeAC495271d0F"]
    },
    "usdc_dai+usdc+usdt+musd": {
      "pool": "0x78CF256256C8089d68Cde634Cf7cDEFb39286470",
      "lpToken": "0x1AEf73d49Dedc4b1778d0706583995958Dc862e6",
      "tokens": ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"]
    },
    "usdt_dai+usdc+usdt+musd": {
      "pool": "0x78CF256256C8089d68Cde634Cf7cDEFb39286470",
      "lpToken": "0x1AEf73d49Dedc4b1778d0706583995958Dc862e6",
      "tokens": ["0xdAC17F958D2ee523a2206206994597C13D831ec7"]
    },
    "dai+usdc+usdt+musd": {
      "pool": "0x78CF256256C8089d68Cde634Cf7cDEFb39286470",
      "lpToken": "0x1AEf73d49Dedc4b1778d0706583995958Dc862e6",
      "tokens": [
        "0xe2f2a5C287993345a840Db3B0845fbC70f5935a5",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7"
      ]
    },
    "rsv_dai+usdc+usdt+rsv": {
      "pool": "0x459eAA680b47D27c8561708C96c949e0018dF5d9",
      "lpToken": "0xC2Ee6b0334C261ED60C72f6054450b61B8f18E35",
      "tokens": ["0x196f4727526eA7FB1e17b2071B3d8eAA38486988"]
    },
    "dai_dai+usdc+usdt+rsv": {
      "pool": "0x459eAA680b47D27c8561708C96c949e0018dF5d9",
      "lpToken": "0xC2Ee6b0334C261ED60C72f6054450b61B8f18E35",
      "tokens": ["0x6B175474E89094C44Da98b954EedeAC495271d0F"]
    },
    "usdc_dai+usdc+usdt+rsv": {
      "pool": "0x459eAA680b47D27c8561708C96c949e0018dF5d9",
      "lpToken": "0xC2Ee6b0334C261ED60C72f6054450b61B8f18E35",
      "tokens": ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"]
    },
    "usdt_dai+usdc+usdt+rsv": {
      "pool": "0x459eAA680b47D27c8561708C96c949e0018dF5d9",
      "lpToken": "0xC2Ee6b0334C261ED60C72f6054450b61B8f18E35",
      "tokens": ["0xdAC17F958D2ee523a2206206994597C13D831ec7"]
    },
    "dai+usdc+usdt+rsv": {
      "pool": "0x459eAA680b47D27c8561708C96c949e0018dF5d9",
      "lpToken": "0xC2Ee6b0334C261ED60C72f6054450b61B8f18E35",
      "tokens": [
        "0x196f4727526eA7FB1e17b2071B3d8eAA38486988",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7"
      ]
    },
    "dusd_dai+usdc+usdt+dusd": {
      "pool": "0x61E10659fe3aa93d036d099405224E4Ac24996d0",
      "lpToken": "0x3a664Ab939FD8482048609f652f9a0B0677337B9",
      "tokens": ["0x5BC25f649fc4e26069dDF4cF4010F9f706c23831"]
    },
    "dai_dai+usdc+usdt+dusd": {
      "pool": "0x61E10659fe3aa93d036d099405224E4Ac24996d0",
      "lpToken": "0x3a664Ab939FD8482048609f652f9a0B0677337B9",
      "tokens": ["0x6B175474E89094C44Da98b954EedeAC495271d0F"]
    },
    "usdc_dai+usdc+usdt+dusd": {
      "pool": "0x61E10659fe3aa93d036d099405224E4Ac24996d0",
      "lpToken": "0x3a664Ab939FD8482048609f652f9a0B0677337B9",
      "tokens": ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"]
    },
    "usdt_dai+usdc+usdt+dusd": {
      "pool": "0x61E10659fe3aa93d036d099405224E4Ac24996d0",
      "lpToken": "0x3a664Ab939FD8482048609f652f9a0B0677337B9",
      "tokens": ["0xdAC17F958D2ee523a2206206994597C13D831ec7"]
    },
    "dai+usdc+usdt+dusd": {
      "pool": "0x61E10659fe3aa93d036d099405224E4Ac24996d0",
      "lpToken": "0x3a664Ab939FD8482048609f652f9a0B0677337B9",
      "tokens": [
        "0x5BC25f649fc4e26069dDF4cF4010F9f706c23831",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7"
      ]
    },
    "tbtc_renbtc+wbtc+sbtc+tbtc": {
      "pool": "0xaa82ca713D94bBA7A89CEAB55314F9EfFEdDc78c",
      "lpToken": "0x64eda51d3Ad40D56b9dFc5554E06F94e1Dd786Fd",
      "tokens": ["0x8dAEBADE922dF735c38C80C7eBD708Af50815fAa"]
    },
    "renbtc_renbtc+wbtc+sbtc+tbtc": {
      "pool": "0xaa82ca713D94bBA7A89CEAB55314F9EfFEdDc78c",
      "lpToken": "0x64eda51d3Ad40D56b9dFc5554E06F94e1Dd786Fd",
      "tokens": ["0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D"]
    },
    "wbtc_renbtc+wbtc+sbtc+tbtc": {
      "pool": "0xaa82ca713D94bBA7A89CEAB55314F9EfFEdDc78c",
      "lpToken": "0x64eda51d3Ad40D56b9dFc5554E06F94e1Dd786Fd",
      "tokens": ["0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599"]
    },
    "sbtc_renbtc+wbtc+sbtc+tbtc": {
      "pool": "0xaa82ca713D94bBA7A89CEAB55314F9EfFEdDc78c",
      "lpToken": "0x64eda51d3Ad40D56b9dFc5554E06F94e1Dd786Fd",
      "tokens": ["0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6"]
    },
    "renbtc+wbtc+sbtc+tbtc": {
      "pool": "0xaa82ca713D94bBA7A89CEAB55314F9EfFEdDc78c",
      "lpToken": "0x64eda51d3Ad40D56b9dFc5554E06F94e1Dd786Fd",
      "tokens": [
        "0x8dAEBADE922dF735c38C80C7eBD708Af50815fAa",
        "0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D",
        "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
        "0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6"
      ]
    },
    "pbtc+renbtc+wbtc+sbtc": {
      "pool": "0x11F419AdAbbFF8d595E7d5b223eee3863Bb3902C",
      "lpToken": "0xDE5331AC4B3630f94853Ff322B66407e0D6331E8",
      "tokens": [
        "0x5228a22e72ccC52d415EcFd199F99D0665E7733b",
        "0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D",
        "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
        "0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6"
      ]
    },
    "pbtc_pbtc+renbtc+wbtc+sbtc": {
      "pool": "0x11F419AdAbbFF8d595E7d5b223eee3863Bb3902C",
      "lpToken": "0xDE5331AC4B3630f94853Ff322B66407e0D6331E8",
      "tokens": ["0x5228a22e72ccC52d415EcFd199F99D0665E7733b"]
    },
    "renbtc_pbtc+renbtc+wbtc+sbtc": {
      "pool": "0x11F419AdAbbFF8d595E7d5b223eee3863Bb3902C",
      "lpToken": "0xDE5331AC4B3630f94853Ff322B66407e0D6331E8",
      "tokens": ["0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D"]
    },
    "wbtc_pbtc+renbtc+wbtc+sbtc": {
      "pool": "0x11F419AdAbbFF8d595E7d5b223eee3863Bb3902C",
      "lpToken": "0xDE5331AC4B3630f94853Ff322B66407e0D6331E8",
      "tokens": ["0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599"]
    },
    "sbtc_pbtc+renbtc+wbtc+sbtc": {
      "pool": "0x11F419AdAbbFF8d595E7d5b223eee3863Bb3902C",
      "lpToken": "0xDE5331AC4B3630f94853Ff322B66407e0D6331E8",
      "tokens": ["0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6"]
    },
    "bbtc+renbtc+wbtc+sbtc": {
      "pool": "0xC45b2EEe6e09cA176Ca3bB5f7eEe7C47bF93c756",
      "lpToken": "0x410e3E86ef427e30B9235497143881f717d93c2A",
      "tokens": [
        "0x9BE89D2a4cd102D8Fecc6BF9dA793be995C22541",
        "0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D",
        "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
        "0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6"
      ]
    },
    "bbtc_bbtc+renbtc+wbtc+sbtc": {
      "pool": "0xC45b2EEe6e09cA176Ca3bB5f7eEe7C47bF93c756",
      "lpToken": "0x410e3E86ef427e30B9235497143881f717d93c2A",
      "tokens": ["0x9BE89D2a4cd102D8Fecc6BF9dA793be995C22541"]
    },
    "renbtc_bbtc+renbtc+wbtc+sbtc": {
      "pool": "0xC45b2EEe6e09cA176Ca3bB5f7eEe7C47bF93c756",
      "lpToken": "0x410e3E86ef427e30B9235497143881f717d93c2A",
      "tokens": ["0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D"]
    },
    "wbtc_bbtc+renbtc+wbtc+sbtc": {
      "pool": "0xC45b2EEe6e09cA176Ca3bB5f7eEe7C47bF93c756",
      "lpToken": "0x410e3E86ef427e30B9235497143881f717d93c2A",
      "tokens": ["0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599"]
    },
    "sbtc_bbtc+renbtc+wbtc+sbtc": {
      "pool": "0xC45b2EEe6e09cA176Ca3bB5f7eEe7C47bF93c756",
      "lpToken": "0x410e3E86ef427e30B9235497143881f717d93c2A",
      "tokens": ["0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6"]
    },
    "obtc_obtc+renbtc+wbtc+sbtc": {
      "pool": "0xd5BCf53e2C81e1991570f33Fa881c49EEa570C8D",
      "lpToken": "0x2fE94ea3d5d4a175184081439753DE15AeF9d614",
      "tokens": ["0x8064d9Ae6cDf087b1bcd5BDf3531bD5d8C537a68"]
    },
    "renbtc_obtc+renbtc+wbtc+sbtc": {
      "pool": "0xd5BCf53e2C81e1991570f33Fa881c49EEa570C8D",
      "lpToken": "0x2fE94ea3d5d4a175184081439753DE15AeF9d614",
      "tokens": ["0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D"]
    },
    "wbtc_obtc+renbtc+wbtc+sbtc": {
      "pool": "0xd5BCf53e2C81e1991570f33Fa881c49EEa570C8D",
      "lpToken": "0x2fE94ea3d5d4a175184081439753DE15AeF9d614",
      "tokens": ["0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599"]
    },
    "sbtc_obtc+renbtc+wbtc+sbtc": {
      "pool": "0xd5BCf53e2C81e1991570f33Fa881c49EEa570C8D",
      "lpToken": "0x2fE94ea3d5d4a175184081439753DE15AeF9d614",
      "tokens": ["0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6"]
    },
    "obtc+renbtc+wbtc+sbtc": {
      "pool": "0xd5BCf53e2C81e1991570f33Fa881c49EEa570C8D",
      "lpToken": "0x2fE94ea3d5d4a175184081439753DE15AeF9d614",
      "tokens": [
        "0x8064d9Ae6cDf087b1bcd5BDf3531bD5d8C537a68",
        "0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D",
        "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
        "0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6"
      ]
    },
    "ust+dai+usdc+usdt": {
      "pool": "0xB0a0716841F2Fc03fbA72A891B8Bb13584F52F2d",
      "lpToken": "0x2fE94ea3d5d4a175184081439753DE15AeF9d614",
      "tokens": [
        "0xa47c8bf37f92aBed4A126BDA807A7b7498661acD",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7"
      ]
    },
    "ust_ust+dai+usdc+usdt": {
      "pool": "0xB0a0716841F2Fc03fbA72A891B8Bb13584F52F2d",
      "lpToken": "0x2fE94ea3d5d4a175184081439753DE15AeF9d614",
      "tokens": ["0xa47c8bf37f92aBed4A126BDA807A7b7498661acD"]
    },
    "dai_ust+dai+usdc+usdt": {
      "pool": "0xB0a0716841F2Fc03fbA72A891B8Bb13584F52F2d",
      "lpToken": "0x2fE94ea3d5d4a175184081439753DE15AeF9d614",
      "tokens": ["0x6B175474E89094C44Da98b954EedeAC495271d0F"]
    },
    "usdc_ust+dai+usdc+usdt": {
      "pool": "0xB0a0716841F2Fc03fbA72A891B8Bb13584F52F2d",
      "lpToken": "0x2fE94ea3d5d4a175184081439753DE15AeF9d614",
      "tokens": ["0xdAC17F958D2ee523a2206206994597C13D831ec7"]
    },
    "usdt_ust+dai+usdc+usdt": {
      "pool": "0xB0a0716841F2Fc03fbA72A891B8Bb13584F52F2d",
      "lpToken": "0x2fE94ea3d5d4a175184081439753DE15AeF9d614",
      "tokens": ["0xdAC17F958D2ee523a2206206994597C13D831ec7"]
    },
    "usdp_usdp+dai+usdc+usdt": {
      "pool": "0x3c8cAee4E09296800f8D29A68Fa3837e2dae4940",
      "lpToken": "0x7Eb40E450b9655f4B3cC4259BCC731c63ff55ae6",
      "tokens": ["0x1456688345527be1f37e9e627da0837d6f08c925"]
    },
    "dai_usdp+dai+usdc+usdt": {
      "pool": "0x3c8cAee4E09296800f8D29A68Fa3837e2dae4940",
      "lpToken": "0x7Eb40E450b9655f4B3cC4259BCC731c63ff55ae6",
      "tokens": ["0x6b175474e89094c44da98b954eedeac495271d0f"]
    },
    "usdc_usdp+dai+usdc+usdt": {
      "pool": "0x3c8cAee4E09296800f8D29A68Fa3837e2dae4940",
      "lpToken": "0x7Eb40E450b9655f4B3cC4259BCC731c63ff55ae6",
      "tokens": ["0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"]
    },
    "usdt_usdp+dai+usdc+usdt": {
      "pool": "0x3c8cAee4E09296800f8D29A68Fa3837e2dae4940",
      "lpToken": "0x7Eb40E450b9655f4B3cC4259BCC731c63ff55ae6",
      "tokens": ["0xdac17f958d2ee523a2206206994597c13d831ec7"]
    },
    "usdp+dai+usdc+usdt": {
      "pool": "0x3c8cAee4E09296800f8D29A68Fa3837e2dae4940",
      "lpToken": "0x7Eb40E450b9655f4B3cC4259BCC731c63ff55ae6",
      "tokens": [
        "0x1456688345527be1f37e9e627da0837d6f08c925",
        "0x6b175474e89094c44da98b954eedeac495271d0f",
        "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        "0xdac17f958d2ee523a2206206994597c13d831ec7"
      ]
    },
    "dai_dai+usdc+usdt_aave": {
      "pool": "0xDeBF20617708857ebe4F679508E7b7863a8A8EeE",
      "lpToken": "0xFd2a8fA60Abd58Efe3EeE34dd494cD491dC14900",
      "tokens": ["0x6b175474e89094c44da98b954eedeac495271d0f"]
    },
    "usdc_dai+usdc+usdt_aave": {
      "pool": "0xDeBF20617708857ebe4F679508E7b7863a8A8EeE",
      "lpToken": "0xFd2a8fA60Abd58Efe3EeE34dd494cD491dC14900",
      "tokens": ["0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"]
    },
    "usdt_dai+usdc+usdt_aave": {
      "pool": "0xDeBF20617708857ebe4F679508E7b7863a8A8EeE",
      "lpToken": "0xFd2a8fA60Abd58Efe3EeE34dd494cD491dC14900",
      "tokens": ["0xdac17f958d2ee523a2206206994597c13d831ec7"]
    },
    "dai+usdc+usdt_aave": {
      "pool": "0xDeBF20617708857ebe4F679508E7b7863a8A8EeE",
      "lpToken": "0xFd2a8fA60Abd58Efe3EeE34dd494cD491dC14900",
      "tokens": [
        "0x6b175474e89094c44da98b954eedeac495271d0f",
        "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        "0xdac17f958d2ee523a2206206994597c13d831ec7"
      ]
    },
    "dai_dai+susd_aave": {
      "pool": "0xEB16Ae0052ed37f479f7fe63849198Df1765a733",
      "lpToken": "0x02d341CcB60fAaf662bC0554d13778015d1b285C",
      "tokens": ["0x6B175474E89094C44Da98b954EedeAC495271d0F"]
    },
    "susd_dai+susd_aave": {
      "pool": "0xEB16Ae0052ed37f479f7fe63849198Df1765a733",
      "lpToken": "0x02d341CcB60fAaf662bC0554d13778015d1b285C",
      "tokens": ["0x57Ab1ec28D129707052df4dF418D58a2D46d5f51"]
    },
    "dai+susd_aave": {
      "pool": "0xEB16Ae0052ed37f479f7fe63849198Df1765a733",
      "lpToken": "0x02d341CcB60fAaf662bC0554d13778015d1b285C",
      "tokens": ["0x6B175474E89094C44Da98b954EedeAC495271d0F", "0x57Ab1ec28D129707052df4dF418D58a2D46d5f51"]
    },
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
    }
  },
  "CurveSwapPool": {
    "dai_3crv": {
      "pool": "0xbEbc44782C7dB0a1A60Cb6fe97d0b483032FF1C7",
      "lpToken": "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490",
      "tokens": ["0x6b175474e89094c44da98b954eedeac495271d0f"]
    },
    "usdc_3crv": {
      "pool": "0xbEbc44782C7dB0a1A60Cb6fe97d0b483032FF1C7",
      "lpToken": "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490",
      "tokens": ["0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"]
    },
    "usdt_3crv": {
      "pool": "0xbEbc44782C7dB0a1A60Cb6fe97d0b483032FF1C7",
      "lpToken": "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490",
      "tokens": ["0xdac17f958d2ee523a2206206994597c13d831ec7"]
    },
    "dai+usdc+usdt_3crv": {
      "pool": "0xbEbc44782C7dB0a1A60Cb6fe97d0b483032FF1C7",
      "lpToken": "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490",
      "tokens": [
        "0x6b175474e89094c44da98b954eedeac495271d0f",
        "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        "0xdac17f958d2ee523a2206206994597c13d831ec7"
      ]
    },
    "wbtc_crvRenWBTC": {
      "pool": "0x93054188d876f558f4a66B2EF1d97d16eDf0895B",
      "lpToken": "0x49849C98ae39Fff122806C06791Fa73784FB3675",
      "tokens": ["0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599"]
    },
    "renbtc_crvRenWBTC": {
      "pool": "0x93054188d876f558f4a66B2EF1d97d16eDf0895B",
      "lpToken": "0x49849C98ae39Fff122806C06791Fa73784FB3675",
      "tokens": ["0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D"]
    },
    "wbtc+renbtc_crvRenWBTC": {
      "pool": "0x93054188d876f558f4a66B2EF1d97d16eDf0895B",
      "lpToken": "0x49849C98ae39Fff122806C06791Fa73784FB3675",
      "tokens": ["0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599", "0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D"]
    },
    "wbtc_crvRenWSBTC": {
      "pool": "0x7fC77b5c7614E1533320Ea6DDc2Eb61fa00A9714",
      "lpToken": "0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3",
      "tokens": ["0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599"]
    },
    "renbtc_crvRenWSBTC": {
      "pool": "0x7fC77b5c7614E1533320Ea6DDc2Eb61fa00A9714",
      "lpToken": "0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3",
      "tokens": ["0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D"]
    },
    "wbtc+renbtc_crvRenWSBTC": {
      "pool": "0x7fC77b5c7614E1533320Ea6DDc2Eb61fa00A9714",
      "lpToken": "0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3",
      "tokens": ["0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599", "0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D"]
    },
    "wbtc_hCRV": {
      "pool": "0x4CA9b3063Ec5866A4B82E437059D2C43d1be596F",
      "lpToken": "0xb19059ebb43466C323583928285a49f558E572Fd",
      "tokens": ["0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599"]
    },
    "hbtc_hCRV": {
      "pool": "0x4CA9b3063Ec5866A4B82E437059D2C43d1be596F",
      "lpToken": "0xb19059ebb43466C323583928285a49f558E572Fd",
      "tokens": ["0x0316EB71485b0Ab14103307bf65a021042c6d380"]
    },
    "wbtc+hbtc_hCRV": {
      "pool": "0x4CA9b3063Ec5866A4B82E437059D2C43d1be596F",
      "lpToken": "0xb19059ebb43466C323583928285a49f558E572Fd",
      "tokens": ["0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599", "0x0316EB71485b0Ab14103307bf65a021042c6d380"]
    },
    "gusd_gusd3CRV": {
      "pool": "0x4f062658EaAF2C1ccf8C8e36D6824CDf41167956",
      "lpToken": "0xD2967f45c4f384DEEa880F807Be904762a3DeA07",
      "tokens": ["0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd"]
    },
    "3crv_gusd3CRV": {
      "pool": "0x4f062658EaAF2C1ccf8C8e36D6824CDf41167956",
      "lpToken": "0xD2967f45c4f384DEEa880F807Be904762a3DeA07",
      "tokens": ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"]
    },
    "gusd+3Crv_gusd3CRV": {
      "pool": "0x4f062658EaAF2C1ccf8C8e36D6824CDf41167956",
      "lpToken": "0xD2967f45c4f384DEEa880F807Be904762a3DeA07",
      "tokens": ["0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"]
    },
    "husd_husd3CRV": {
      "pool": "0x3eF6A01A0f81D6046290f3e2A8c5b843e738E604",
      "lpToken": "0x5B5CFE992AdAC0C9D48E05854B2d91C73a003858",
      "tokens": ["0xdF574c24545E5FfEcb9a659c229253D4111d87e1"]
    },
    "3crv_husd3CRV": {
      "pool": "0x3eF6A01A0f81D6046290f3e2A8c5b843e738E604",
      "lpToken": "0x5B5CFE992AdAC0C9D48E05854B2d91C73a003858",
      "tokens": ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"]
    },
    "husd+3crv_husd3CRV": {
      "pool": "0x3eF6A01A0f81D6046290f3e2A8c5b843e738E604",
      "lpToken": "0x5B5CFE992AdAC0C9D48E05854B2d91C73a003858",
      "tokens": ["0xdF574c24545E5FfEcb9a659c229253D4111d87e1", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"]
    },
    "usdk_usdk3CRV": {
      "pool": "0x3E01dD8a5E1fb3481F0F589056b428Fc308AF0Fb",
      "lpToken": "0x97E2768e8E73511cA874545DC5Ff8067eB19B787",
      "tokens": ["0x1c48f86ae57291F7686349F12601910BD8D470bb"]
    },
    "3crv_usdk3CRV": {
      "pool": "0x3E01dD8a5E1fb3481F0F589056b428Fc308AF0Fb",
      "lpToken": "0x97E2768e8E73511cA874545DC5Ff8067eB19B787",
      "tokens": ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"]
    },
    "usdk+3crv_usdk3CRV": {
      "pool": "0x3E01dD8a5E1fb3481F0F589056b428Fc308AF0Fb",
      "lpToken": "0x97E2768e8E73511cA874545DC5Ff8067eB19B787",
      "tokens": ["0x1c48f86ae57291F7686349F12601910BD8D470bb", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"]
    },
    "usdn_usdn3CRV": {
      "pool": "0x0f9cb53Ebe405d49A0bbdBD291A65Ff571bC83e1",
      "lpToken": "0x4f3E8F405CF5aFC05D68142F3783bDfE13811522",
      "tokens": ["0x674C6Ad92Fd080e4004b2312b45f796a192D27a0"]
    },
    "3crv_usdn3CRV": {
      "pool": "0x0f9cb53Ebe405d49A0bbdBD291A65Ff571bC83e1",
      "lpToken": "0x4f3E8F405CF5aFC05D68142F3783bDfE13811522",
      "tokens": ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"]
    },
    "usdn+3crv_usdn3CRV": {
      "pool": "0x0f9cb53Ebe405d49A0bbdBD291A65Ff571bC83e1",
      "lpToken": "0x4f3E8F405CF5aFC05D68142F3783bDfE13811522",
      "tokens": ["0x674C6Ad92Fd080e4004b2312b45f796a192D27a0", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"]
    },
    "linkusd_LinkUSD3CRV": {
      "pool": "0xE7a24EF0C5e95Ffb0f6684b813A78F2a3AD7D171",
      "lpToken": "0x6D65b498cb23deAba52db31c93Da9BFFb340FB8F",
      "tokens": ["0x0E2EC54fC0B509F445631Bf4b91AB8168230C752"]
    },
    "3crv_LinkUSD3CRV": {
      "pool": "0xE7a24EF0C5e95Ffb0f6684b813A78F2a3AD7D171",
      "lpToken": "0x6D65b498cb23deAba52db31c93Da9BFFb340FB8F",
      "tokens": ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"]
    },
    "linkusd+3crv_LinkUSD3CRV": {
      "pool": "0xE7a24EF0C5e95Ffb0f6684b813A78F2a3AD7D171",
      "lpToken": "0x6D65b498cb23deAba52db31c93Da9BFFb340FB8F",
      "tokens": ["0x0E2EC54fC0B509F445631Bf4b91AB8168230C752", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"]
    },
    "musd_musd3CRV": {
      "pool": "0x8474DdbE98F5aA3179B3B3F5942D724aFcdec9f6",
      "lpToken": "0x1AEf73d49Dedc4b1778d0706583995958Dc862e6",
      "tokens": ["0xe2f2a5C287993345a840Db3B0845fbC70f5935a5"]
    },
    "3crv_musd3CRV": {
      "pool": "0x8474DdbE98F5aA3179B3B3F5942D724aFcdec9f6",
      "lpToken": "0x1AEf73d49Dedc4b1778d0706583995958Dc862e6",
      "tokens": ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"]
    },
    "musd+3crv_musd3CRV": {
      "pool": "0x8474DdbE98F5aA3179B3B3F5942D724aFcdec9f6",
      "lpToken": "0x1AEf73d49Dedc4b1778d0706583995958Dc862e6",
      "tokens": ["0xe2f2a5C287993345a840Db3B0845fbC70f5935a5", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"]
    },
    "rsv_rsv3CRV": {
      "pool": "0xC18cC39da8b11dA8c3541C598eE022258F9744da",
      "lpToken": "0xC2Ee6b0334C261ED60C72f6054450b61B8f18E35",
      "tokens": ["0x196f4727526eA7FB1e17b2071B3d8eAA38486988"]
    },
    "3crv_rsv3CRV": {
      "pool": "0xC18cC39da8b11dA8c3541C598eE022258F9744da",
      "lpToken": "0xC2Ee6b0334C261ED60C72f6054450b61B8f18E35",
      "tokens": ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"]
    },
    "rsv+3crv_rsv3CRV": {
      "pool": "0xC18cC39da8b11dA8c3541C598eE022258F9744da",
      "lpToken": "0xC2Ee6b0334C261ED60C72f6054450b61B8f18E35",
      "tokens": ["0x196f4727526eA7FB1e17b2071B3d8eAA38486988", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"]
    },
    "dusd_dusd3CRV": {
      "pool": "0x8038C01A0390a8c547446a0b2c18fc9aEFEcc10c",
      "lpToken": "0x3a664Ab939FD8482048609f652f9a0B0677337B9",
      "tokens": ["0x5BC25f649fc4e26069dDF4cF4010F9f706c23831"]
    },
    "3crv_dusd3CRV": {
      "pool": "0x8038C01A0390a8c547446a0b2c18fc9aEFEcc10c",
      "lpToken": "0x3a664Ab939FD8482048609f652f9a0B0677337B9",
      "tokens": ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"]
    },
    "dusd+3crv_dusd3CRV": {
      "pool": "0x8038C01A0390a8c547446a0b2c18fc9aEFEcc10c",
      "lpToken": "0x3a664Ab939FD8482048609f652f9a0B0677337B9",
      "tokens": ["0x5BC25f649fc4e26069dDF4cF4010F9f706c23831", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"]
    },
    "pbtc_pbtc+sbtcCrv": {
      "pool": "0x7F55DDe206dbAD629C080068923b36fe9D6bDBeF",
      "lpToken": "0xDE5331AC4B3630f94853Ff322B66407e0D6331E8",
      "tokens": ["0x5228a22e72ccC52d415EcFd199F99D0665E7733b"]
    },
    "sbtcCrv_pbtc+sbtcCrv": {
      "pool": "0x7F55DDe206dbAD629C080068923b36fe9D6bDBeF",
      "lpToken": "0xDE5331AC4B3630f94853Ff322B66407e0D6331E8",
      "tokens": ["0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3"]
    },
    "pbtc+sbtcCrv": {
      "pool": "0x7F55DDe206dbAD629C080068923b36fe9D6bDBeF",
      "lpToken": "0xDE5331AC4B3630f94853Ff322B66407e0D6331E8",
      "tokens": ["0x5228a22e72ccC52d415EcFd199F99D0665E7733b", "0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3"]
    },
    "bbtc_bbtc+sbtcCrv": {
      "pool": "0x071c661B4DeefB59E2a3DdB20Db036821eeE8F4b",
      "lpToken": "0x410e3E86ef427e30B9235497143881f717d93c2A",
      "tokens": ["0x9BE89D2a4cd102D8Fecc6BF9dA793be995C22541"]
    },
    "sbtcCrv_bbtc+sbtcCrv": {
      "pool": "0x071c661B4DeefB59E2a3DdB20Db036821eeE8F4b",
      "lpToken": "0x410e3E86ef427e30B9235497143881f717d93c2A",
      "tokens": ["0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3"]
    },
    "bbtc+sbtcCrv": {
      "pool": "0x071c661B4DeefB59E2a3DdB20Db036821eeE8F4b",
      "lpToken": "0x410e3E86ef427e30B9235497143881f717d93c2A",
      "tokens": ["0x9BE89D2a4cd102D8Fecc6BF9dA793be995C22541", "0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3"]
    },
    "obtc_obtc+sbtcCrv": {
      "pool": "0xd81dA8D904b52208541Bade1bD6595D8a251F8dd",
      "lpToken": "0x2fE94ea3d5d4a175184081439753DE15AeF9d614",
      "tokens": ["0x8064d9Ae6cDf087b1bcd5BDf3531bD5d8C537a68"]
    },
    "sbtcCrv_obtc+sbtcCrv": {
      "pool": "0xd81dA8D904b52208541Bade1bD6595D8a251F8dd",
      "lpToken": "0x2fE94ea3d5d4a175184081439753DE15AeF9d614",
      "tokens": ["0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3"]
    },
    "obtc+sbtcCrv": {
      "pool": "0xd81dA8D904b52208541Bade1bD6595D8a251F8dd",
      "lpToken": "0x2fE94ea3d5d4a175184081439753DE15AeF9d614",
      "tokens": ["0x8064d9Ae6cDf087b1bcd5BDf3531bD5d8C537a68", "0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3"]
    },
    "ust_ust+3CRV": {
      "pool": "0x890f4e345B1dAED0367A877a1612f86A1f86985f",
      "lpToken": "0x94e131324b6054c0D789b190b2dAC504e4361b53",
      "tokens": ["0xa47c8bf37f92aBed4A126BDA807A7b7498661acD"]
    },
    "3crv_ust+3CRV": {
      "pool": "0x890f4e345B1dAED0367A877a1612f86A1f86985f",
      "lpToken": "0x94e131324b6054c0D789b190b2dAC504e4361b53",
      "tokens": ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"]
    },
    "ust+3CRV": {
      "pool": "0x890f4e345B1dAED0367A877a1612f86A1f86985f",
      "lpToken": "0x94e131324b6054c0D789b190b2dAC504e4361b53",
      "tokens": ["0xa47c8bf37f92aBed4A126BDA807A7b7498661acD", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"]
    },
    "eurs_eurs+seur": {
      "pool": "0x0Ce6a5fF5217e38315f87032CF90686C96627CAA",
      "lpToken": "0x194eBd173F6cDacE046C53eACcE9B953F28411d1",
      "tokens": ["0xdB25f211AB05b1c97D595516F45794528a807ad8"]
    },
    "seur_eurs+seur": {
      "pool": "0x0Ce6a5fF5217e38315f87032CF90686C96627CAA",
      "lpToken": "0x194eBd173F6cDacE046C53eACcE9B953F28411d1",
      "tokens": ["0xD71eCFF9342A5Ced620049e616c5035F1dB98620"]
    },
    "eurs+seur": {
      "pool": "0x0Ce6a5fF5217e38315f87032CF90686C96627CAA",
      "lpToken": "0x194eBd173F6cDacE046C53eACcE9B953F28411d1",
      "tokens": ["0xdB25f211AB05b1c97D595516F45794528a807ad8", "0xD71eCFF9342A5Ced620049e616c5035F1dB98620"]
    },
    "aethc_eth+aethc": {
      "pool": "0xA96A65c051bF88B4095Ee1f2451C2A9d43F53Ae2",
      "lpToken": "0xaA17A236F2bAdc98DDc0Cf999AbB47D47Fc0A6Cf",
      "tokens": ["0xE95A203B1a91a908F9B9CE46459d101078c2c3cb"]
    },
    "eth+aethc": {
      "pool": "0xA96A65c051bF88B4095Ee1f2451C2A9d43F53Ae2",
      "lpToken": "0xaA17A236F2bAdc98DDc0Cf999AbB47D47Fc0A6Cf",
      "tokens": ["0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", "0xE95A203B1a91a908F9B9CE46459d101078c2c3cb"]
    },
    "usdp_usdp+3crv": {
      "pool": "0x42d7025938bEc20B69cBae5A77421082407f053A",
      "lpToken": "0x7Eb40E450b9655f4B3cC4259BCC731c63ff55ae6",
      "tokens": ["0x1456688345527bE1f37E9e627DA0837D6f08C925"]
    },
    "3crv_usdp+3crv": {
      "pool": "0x42d7025938bEc20B69cBae5A77421082407f053A",
      "lpToken": "0x7Eb40E450b9655f4B3cC4259BCC731c63ff55ae6",
      "tokens": ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"]
    },
    "usdp+3crv": {
      "pool": "0x42d7025938bEc20B69cBae5A77421082407f053A",
      "lpToken": "0x7Eb40E450b9655f4B3cC4259BCC731c63ff55ae6",
      "tokens": ["0x1456688345527bE1f37E9e627DA0837D6f08C925", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"]
    },
    "link_link+slink": {
      "pool": "0xF178C0b5Bb7e7aBF4e12A4838C7b7c5bA2C623c0",
      "lpToken": "0xcee60cFa923170e4f8204AE08B4fA6A3F5656F3a",
      "tokens": ["0x514910771AF9Ca656af840dff83E8264EcF986CA"]
    },
    "eth_eth+seth": {
      "pool": "0xc5424B857f758E906013F3555Dad202e4bdB4567",
      "lpToken": "0xA3D87FffcE63B53E0d54fAa1cc983B7eB0b74A9c",
      "tokens": ["0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"]
    },
    "eth+seth": {
      "pool": "0xc5424B857f758E906013F3555Dad202e4bdB4567",
      "lpToken": "0xA3D87FffcE63B53E0d54fAa1cc983B7eB0b74A9c",
      "tokens": ["0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", "0x5e74C9036fb86BD7eCdcb084a0673EFc32eA31cb"]
    },

    "seth_eth+seth": {
      "pool": "0xc5424B857f758E906013F3555Dad202e4bdB4567",
      "lpToken": "0xA3D87FffcE63B53E0d54fAa1cc983B7eB0b74A9c",
      "tokens": ["0x5e74C9036fb86BD7eCdcb084a0673EFc32eA31cb"]
    },
    "eth_eth+steth": {
      "pool": "0xDC24316b9AE028F1497c275EB9192a3Ea0f67022",
      "lpToken": "0x06325440D014e39736583c165C2963BA99fAf14E",
      "tokens": ["0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"]
    },
    "steth_eth+steth": {
      "pool": "0xDC24316b9AE028F1497c275EB9192a3Ea0f67022",
      "lpToken": "0x06325440D014e39736583c165C2963BA99fAf14E",
      "tokens": ["0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84"]
    },
    "eth+steth": {
      "pool": "0xDC24316b9AE028F1497c275EB9192a3Ea0f67022",
      "lpToken": "0x06325440D014e39736583c165C2963BA99fAf14E",
      "tokens": ["0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84"]
    },
    "eth_eth+aethc": {
      "pool": "0xA96A65c051bF88B4095Ee1f2451C2A9d43F53Ae2",
      "lpToken": "0xaA17A236F2bAdc98DDc0Cf999AbB47D47Fc0A6Cf",
      "tokens": ["0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"]
    },
    "slink_link+slink": {
      "pool": "0xF178C0b5Bb7e7aBF4e12A4838C7b7c5bA2C623c0",
      "lpToken": "0xcee60cFa923170e4f8204AE08B4fA6A3F5656F3a",
      "tokens": ["0xbBC455cb4F1B9e4bFC4B73970d360c8f032EfEE6"]
    },
    "link+slink": {
      "pool": "0xF178C0b5Bb7e7aBF4e12A4838C7b7c5bA2C623c0",
      "lpToken": "0xcee60cFa923170e4f8204AE08B4fA6A3F5656F3a",
      "tokens": ["0x514910771AF9Ca656af840dff83E8264EcF986CA", "0xbBC455cb4F1B9e4bFC4B73970d360c8f032EfEE6"]
    },
    "eth_eth+reth": {
      "pool": "0xF9440930043eb3997fc70e1339dBb11F341de7A8",
      "lpToken": "0x53a901d48795C58f485cBB38df08FA96a24669D5",
      "tokens": ["0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"]
    },
    "reth_eth+reth": {
      "pool": "0xF9440930043eb3997fc70e1339dBb11F341de7A8",
      "lpToken": "0x53a901d48795C58f485cBB38df08FA96a24669D5",
      "tokens": ["0x9559Aaa82d9649C7A7b220E7c461d2E74c9a3593"]
    },
    "eth+reth": {
      "pool": "0xF9440930043eb3997fc70e1339dBb11F341de7A8",
      "lpToken": "0x53a901d48795C58f485cBB38df08FA96a24669D5",
      "tokens": ["0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", "0x9559Aaa82d9649C7A7b220E7c461d2E74c9a3593"]
    },
    "cydai+cyusdc+cyusdt": {
      "pool": "0x2dded6Da1BF5DBdF597C45fcFaa3194e53EcfeAF",
      "lpToken": "0x5282a4eF67D9C33135340fB3289cc1711c13638C",
      "tokens": [
        "0x8e595470Ed749b85C6F7669de83EAe304C2ec68F",
        "0x76Eb2FE28b36B3ee97F3Adae0C69606eeDB2A37c",
        "0x48759F220ED983dB51fA7A8C0D2AAb8f3ce4166a"
      ]
    },
    "cydai_cydai+cyusdc+cyusdt": {
      "pool": "0x2dded6Da1BF5DBdF597C45fcFaa3194e53EcfeAF",
      "lpToken": "0x5282a4eF67D9C33135340fB3289cc1711c13638C",
      "tokens": ["0x8e595470Ed749b85C6F7669de83EAe304C2ec68F"]
    },
    "cyusdc_cydai+cyusdc+cyusdt": {
      "pool": "0x2dded6Da1BF5DBdF597C45fcFaa3194e53EcfeAF",
      "lpToken": "0x5282a4eF67D9C33135340fB3289cc1711c13638C",
      "tokens": ["0x76Eb2FE28b36B3ee97F3Adae0C69606eeDB2A37c"]
    },
    "cyusdt_cydai+cyusdc+cyusdt": {
      "pool": "0x2dded6Da1BF5DBdF597C45fcFaa3194e53EcfeAF",
      "lpToken": "0x5282a4eF67D9C33135340fB3289cc1711c13638C",
      "tokens": ["0x48759F220ED983dB51fA7A8C0D2AAb8f3ce4166a"]
    },
    "adai_adai+asusd": {
      "pool": "0xEB16Ae0052ed37f479f7fe63849198Df1765a733",
      "lpToken": "0x02d341CcB60fAaf662bC0554d13778015d1b285C",
      "tokens": ["0x028171bCA77440897B824Ca71D1c56caC55b68A3"]
    },
    "asusd_adai+asusd": {
      "pool": "0xEB16Ae0052ed37f479f7fe63849198Df1765a733",
      "lpToken": "0x02d341CcB60fAaf662bC0554d13778015d1b285C",
      "tokens": ["0x6C5024Cd4F8A59110119C56f8933403A539555EB"]
    },
    "adai+asusd": {
      "pool": "0xEB16Ae0052ed37f479f7fe63849198Df1765a733",
      "lpToken": "0x02d341CcB60fAaf662bC0554d13778015d1b285C",
      "tokens": ["0x028171bCA77440897B824Ca71D1c56caC55b68A3", "0x6C5024Cd4F8A59110119C56f8933403A539555EB"]
    },
    "adai_adai+ausdc+ausdt": {
      "pool": "0xDeBF20617708857ebe4F679508E7b7863a8A8EeE",
      "lpToken": "0xFd2a8fA60Abd58Efe3EeE34dd494cD491dC14900",
      "tokens": ["0x028171bCA77440897B824Ca71D1c56caC55b68A3"]
    },
    "ausdc_adai+ausdc+ausdt": {
      "pool": "0xDeBF20617708857ebe4F679508E7b7863a8A8EeE",
      "lpToken": "0xFd2a8fA60Abd58Efe3EeE34dd494cD491dC14900",
      "tokens": ["0xBcca60bB61934080951369a648Fb03DF4F96263C"]
    },
    "adai+ausdc+ausdt": {
      "pool": "0xDeBF20617708857ebe4F679508E7b7863a8A8EeE",
      "lpToken": "0xFd2a8fA60Abd58Efe3EeE34dd494cD491dC14900",
      "tokens": [
        "0x028171bCA77440897B824Ca71D1c56caC55b68A3",
        "0xBcca60bB61934080951369a648Fb03DF4F96263C",
        "0x3Ed3B47Dd13EC9a98b44e6204A523E766B225811"
      ]
    },
    "ausdt_adai+ausdc+ausdt": {
      "pool": "0xDeBF20617708857ebe4F679508E7b7863a8A8EeE",
      "lpToken": "0xFd2a8fA60Abd58Efe3EeE34dd494cD491dC14900",
      "tokens": ["0x3Ed3B47Dd13EC9a98b44e6204A523E766B225811"]
    }
  },
  "CurveTokens": {
    "hcrv": {
      "address": "0xb19059ebb43466C323583928285a49f558E572Fd",
      "pool": "0x4CA9b3063Ec5866A4B82E437059D2C43d1be596F",
      "swap": true,
      "old": false
    },
    "obtc+sbtcCrv": {
      "address": "0x2fE94ea3d5d4a175184081439753DE15AeF9d614",
      "pool": "0xd5BCf53e2C81e1991570f33Fa881c49EEa570C8D",
      "old": false
    },
    "tbtc+sbtcCrv": {
      "address": "0x64eda51d3Ad40D56b9dFc5554E06F94e1Dd786Fd",
      "pool": "0xaa82ca713D94bBA7A89CEAB55314F9EfFEdDc78c",
      "old": false
    },
    "crvrenwbtc": {
      "address": "0x49849C98ae39Fff122806C06791Fa73784FB3675",
      "pool": "0x93054188d876f558f4a66B2EF1d97d16eDf0895B",
      "swap": true,
      "old": true
    },
    "stecrv": {
      "address": "0x06325440D014e39736583c165C2963BA99fAf14E",
      "pool": "0xDC24316b9AE028F1497c275EB9192a3Ea0f67022",
      "swap": true,
      "old": false
    },
    "husd3crv": {
      "address": "0x5B5CFE992AdAC0C9D48E05854B2d91C73a003858",
      "pool": "0x0a53FaDa2d943057C47A301D25a4D9b3B8e01e8E",
      "old": false
    },
    "ycrv": {
      "address": "0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8",
      "pool": "0xbBC81d23Ea2c3ec7e56D39296F0cbB648873a5d3",
      "old": true
    },
    "3crv": {
      "address": "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490",
      "pool": "0xbEbc44782C7dB0a1A60Cb6fe97d0b483032FF1C7",
      "swap": true,
      "old": false
    },
    "crv_compound": {
      "address": "0x845838DF265Dcd2c412A1Dc9e959c7d08537f8a2",
      "pool": "0xeB21209ae4C2c9FF2a86ACA31E123764A3B6Bc06",
      "old": true
    },
    "crv_busd": {
      "address": "0x3B3Ac5386837Dc563660FB6a0937DFAa5924333B",
      "pool": "0xb6c057591E073249F2D9D88Ba59a46CFC9B59EdB",
      "old": true
    },
    "usdn3crv": {
      "address": "0x4f3E8F405CF5aFC05D68142F3783bDfE13811522",
      "pool": "0x35796DAc54f144DFBAD1441Ec7C32313A7c29F39",
      "old": false
    },
    "crv_eurs": {
      "address": "0x194eBd173F6cDacE046C53eACcE9B953F28411d1",
      "pool": "0x0Ce6a5fF5217e38315f87032CF90686C96627CAA",
      "swap": true,
      "old": false
    },
    "gusd3crv": {
      "address": "0xD2967f45c4f384DEEa880F807Be904762a3DeA07",
      "pool": "0x64448B78561690B70E17CBE8029a3e5c1bB7136e",
      "old": false
    },
    "ust3crv": {
      "address": "0x94e131324b6054c0D789b190b2dAC504e4361b53",
      "pool": "0xB0a0716841F2Fc03fbA72A891B8Bb13584F52F2d",
      "old": false
    }
  }
};

export default contracts;
