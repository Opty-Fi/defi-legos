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
    "wbtc_hCRV": {
      "pool": "0x4CA9b3063Ec5866A4B82E437059D2C43d1be596F",
      "lpToken": "0xb19059ebb43466C323583928285a49f558E572Fd",
      "tokens": ["0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599"]
    },
    "hbtc": {
      "pool": "0x4CA9b3063Ec5866A4B82E437059D2C43d1be596F",
      "lpToken": "0xb19059ebb43466C323583928285a49f558E572Fd",
      "tokens": ["0x0316EB71485b0Ab14103307bf65a021042c6d380"]
    },
    "3crv_gusd3CRV": {
      "pool": "0x4f062658EaAF2C1ccf8C8e36D6824CDf41167956",
      "lpToken": "0xD2967f45c4f384DEEa880F807Be904762a3DeA07",
      "tokens": ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"]
    },
    "3crv_husd3CRV": {
      "pool": "0x3eF6A01A0f81D6046290f3e2A8c5b843e738E604",
      "lpToken": "0x5B5CFE992AdAC0C9D48E05854B2d91C73a003858",
      "tokens": ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"]
    },
    "3crv_usdk3CRV": {
      "pool": "0x3E01dD8a5E1fb3481F0F589056b428Fc308AF0Fb",
      "lpToken": "0x97E2768e8E73511cA874545DC5Ff8067eB19B787",
      "tokens": ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"]
    },
    "3crv_usdn3CRV": {
      "pool": "0x0f9cb53Ebe405d49A0bbdBD291A65Ff571bC83e1",
      "lpToken": "0x4f3E8F405CF5aFC05D68142F3783bDfE13811522",
      "tokens": ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"]
    },
    "3crv_LinkUSD3CRV": {
      "pool": "0xE7a24EF0C5e95Ffb0f6684b813A78F2a3AD7D171",
      "lpToken": "0x6D65b498cb23deAba52db31c93Da9BFFb340FB8F",
      "tokens": ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"]
    },
    "3crv_musd3CRV": {
      "pool": "0x8474DdbE98F5aA3179B3B3F5942D724aFcdec9f6",
      "lpToken": "0x1AEf73d49Dedc4b1778d0706583995958Dc862e6",
      "tokens": ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"]
    },
    "3crv_rsv3CRV": {
      "pool": "0xC18cC39da8b11dA8c3541C598eE022258F9744da",
      "lpToken": "0xC2Ee6b0334C261ED60C72f6054450b61B8f18E35",
      "tokens": ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"]
    },
    "3crv_dusd3CRV": {
      "pool": "0x8038C01A0390a8c547446a0b2c18fc9aEFEcc10c",
      "lpToken": "0x3a664Ab939FD8482048609f652f9a0B0677337B9",
      "tokens": ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"]
    }
  }
};

export default contracts;
