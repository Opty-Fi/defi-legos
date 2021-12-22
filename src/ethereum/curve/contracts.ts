import swapAbi from "./abi/CurveSwap.json";
import metaSwapAbi from "./abi/CurveMetaSwap.json";
import poolTokenV1Abi from "./abi/CurvePoolTokenV1.json";
import poolTokenV2Abi from "./abi/CurvePoolTokenV2.json";
import poolTokenV3Abi from "./abi/CurvePoolTokenV3.json";
import zapAbi from "./abi/CurveZap.json";
import metaZapAbi from "./abi/CurveMetaZap.json";
import metapoolDepositAbi from "./abi/CurveMetapoolDeposit.json";
import metapoolSwapAbi from "./abi/CurveMetapoolSwap.json";
import liquidityGaugeAbi from "./abi/CurveLiquidityGauge.json";
import liquidityGaugeV2Abi from "./abi/CurveLiquidityGaugeV2.json";
import liquidityGaugeV3Abi from "./abi/CurveLiquidityGaugeV3.json";
import CurveAddressProviderAbi from "./abi/interfacesV0/CurveAddressProvider.json";
import CurveDAOAbi from "./abi/interfacesV0/CurveDAO.json";
import CurveDepositAbi from "./abi/interfacesV0/CurveDeposit.json";
import CurveETHSwapAbi from "./abi/interfacesV0/CurveETHSwap.json";
import CurveGaugeAbi from "./abi/interfacesV0/CurveGauge.json";
import CurveRegistryAbi from "./abi/interfacesV0/CurveRegistry.json";
import CurveSwapAbi from "./abi/interfacesV0/CurveSwap.json";
import TokenMinterAbi from "./abi/interfacesV0/TokenMinter.json";

// Reference: https://curve.readthedocs.io/ref-addresses.html#deployment-addresses

const contracts = {
  poolTokenV1Abi,
  poolTokenV2Abi,
  poolTokenV3Abi,
  swapAbi,
  metaSwapAbi,
  zapAbi,
  metaZapAbi,
  metapoolDepositAbi,
  metapoolSwapAbi,
  liquidityGaugeAbi,
  liquidityGaugeV2Abi,
  liquidityGaugeV3Abi,
  CurveAddressProvider: { abi: CurveAddressProviderAbi },
  CurveDAO: { abi: CurveDAOAbi },
  CurveDeposit: { abi: CurveDepositAbi },
  CurveETHSwap: { abi: CurveETHSwapAbi },
  CurveGauge: { abi: CurveGaugeAbi },
  CurveRegistry: { abi: CurveRegistryAbi },
  CurveSwap: { abi: CurveSwapAbi },
  TokenMinter: { abi: TokenMinterAbi },
  CurveDepositPool: {
    "tusd_dai+usdc+usdt+tusd": {
      pool: "0xbBC81d23Ea2c3ec7e56D39296F0cbB648873a5d3",
      lpToken: "0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8",
      tokens: ["0x0000000000085d4780B73119b644AE5ecd22b376"],
    },
    "dai_dai+usdc": {
      pool: "0xeB21209ae4C2c9FF2a86ACA31E123764A3B6Bc06",
      lpToken: "0x845838DF265Dcd2c412A1Dc9e959c7d08537f8a2",
      tokens: ["0x6b175474e89094c44da98b954eedeac495271d0f"],
    },
    "usdc_dai+usdc": {
      pool: "0xeB21209ae4C2c9FF2a86ACA31E123764A3B6Bc06",
      lpToken: "0x845838DF265Dcd2c412A1Dc9e959c7d08537f8a2",
      tokens: ["0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"],
    },
    "dai+usdc": {
      pool: "0xeB21209ae4C2c9FF2a86ACA31E123764A3B6Bc06",
      lpToken: "0x845838DF265Dcd2c412A1Dc9e959c7d08537f8a2",
      tokens: ["0x6b175474e89094c44da98b954eedeac495271d0f", "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"],
    },
    "dai_dai+usdc+usdt": {
      pool: "0xac795D2c97e60DF6a99ff1c814727302fD747a80",
      lpToken: "0x9fC689CCaDa600B6DF723D9E47D84d76664a1F23",
      tokens: ["0x6b175474e89094c44da98b954eedeac495271d0f"],
    },
    "usdc_dai+usdc+usdt": {
      pool: "0xac795D2c97e60DF6a99ff1c814727302fD747a80",
      lpToken: "0x9fC689CCaDa600B6DF723D9E47D84d76664a1F23",
      tokens: ["0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"],
    },
    "usdt_dai+usdc+usdt": {
      pool: "0xac795D2c97e60DF6a99ff1c814727302fD747a80",
      lpToken: "0x9fC689CCaDa600B6DF723D9E47D84d76664a1F23",
      tokens: ["0xdac17f958d2ee523a2206206994597c13d831ec7"],
    },
    "dai+usdc+usdt": {
      pool: "0xac795D2c97e60DF6a99ff1c814727302fD747a80",
      lpToken: "0x9fC689CCaDa600B6DF723D9E47D84d76664a1F23",
      tokens: [
        "0x6b175474e89094c44da98b954eedeac495271d0f",
        "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        "0xdac17f958d2ee523a2206206994597c13d831ec7",
      ],
    },
    dai_ypaxCrv: {
      pool: "0xA50cCc70b6a011CffDdf45057E39679379187287",
      lpToken: "0xD905e2eaeBe188fc92179b6350807D8bd91Db0D8",
      tokens: ["0x6b175474e89094c44da98b954eedeac495271d0f"],
    },
    usdc_ypaxCrv: {
      pool: "0xA50cCc70b6a011CffDdf45057E39679379187287",
      lpToken: "0xD905e2eaeBe188fc92179b6350807D8bd91Db0D8",
      tokens: ["0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"],
    },
    usdt_ypaxCrv: {
      pool: "0xA50cCc70b6a011CffDdf45057E39679379187287",
      lpToken: "0xD905e2eaeBe188fc92179b6350807D8bd91Db0D8",
      tokens: ["0xdac17f958d2ee523a2206206994597c13d831ec7"],
    },
    "dai_dai+usdc+usdt+tusd": {
      pool: "0xbBC81d23Ea2c3ec7e56D39296F0cbB648873a5d3",
      lpToken: "0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8",
      tokens: ["0x6b175474e89094c44da98b954eedeac495271d0f"],
    },
    "usdc_dai+usdc+usdt+tusd": {
      pool: "0xbBC81d23Ea2c3ec7e56D39296F0cbB648873a5d3",
      lpToken: "0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8",
      tokens: ["0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"],
    },
    "usdt_dai+usdc+usdt+tusd": {
      pool: "0xbBC81d23Ea2c3ec7e56D39296F0cbB648873a5d3",
      lpToken: "0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8",
      tokens: ["0xdac17f958d2ee523a2206206994597c13d831ec7"],
    },
    "dai+usdc+usdt+tusd": {
      pool: "0xbBC81d23Ea2c3ec7e56D39296F0cbB648873a5d3",
      lpToken: "0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8",
      tokens: [
        "0x6b175474e89094c44da98b954eedeac495271d0f",
        "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        "0xdac17f958d2ee523a2206206994597c13d831ec7",
        "0x0000000000085d4780B73119b644AE5ecd22b376",
      ],
    },
    dai_crvPlain3andSUSD: {
      pool: "0xFCBa3E75865d2d561BE8D220616520c171F12851",
      lpToken: "0xC25a3A3b969415c80451098fa907EC722572917F",
      tokens: ["0x6b175474e89094c44da98b954eedeac495271d0f"],
    },
    usdc_crvPlain3andSUSD: {
      pool: "0xFCBa3E75865d2d561BE8D220616520c171F12851",
      lpToken: "0xC25a3A3b969415c80451098fa907EC722572917F",
      tokens: ["0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"],
    },
    usdt_crvPlain3andSUSD: {
      pool: "0xFCBa3E75865d2d561BE8D220616520c171F12851",
      lpToken: "0xC25a3A3b969415c80451098fa907EC722572917F",
      tokens: ["0xdac17f958d2ee523a2206206994597c13d831ec7"],
    },
    susd_crvPlain3andSUSD: {
      pool: "0xFCBa3E75865d2d561BE8D220616520c171F12851",
      lpToken: "0xC25a3A3b969415c80451098fa907EC722572917F",
      tokens: ["0x57ab1ec28d129707052df4df418d58a2d46d5f51"],
    },
    "dai_dai+usdc+usdt+busd": {
      pool: "0xb6c057591E073249F2D9D88Ba59a46CFC9B59EdB",
      lpToken: "0x3B3Ac5386837Dc563660FB6a0937DFAa5924333B",
      tokens: ["0x6b175474e89094c44da98b954eedeac495271d0f"],
    },
    "usdc_dai+usdc+usdt+busd": {
      pool: "0xb6c057591E073249F2D9D88Ba59a46CFC9B59EdB",
      lpToken: "0x3B3Ac5386837Dc563660FB6a0937DFAa5924333B",
      tokens: ["0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"],
    },
    "usdt_dai+usdc+usdt+busd": {
      pool: "0xb6c057591E073249F2D9D88Ba59a46CFC9B59EdB",
      lpToken: "0x3B3Ac5386837Dc563660FB6a0937DFAa5924333B",
      tokens: ["0xdac17f958d2ee523a2206206994597c13d831ec7"],
    },
    "busd_dai+usdc+usdt+busd": {
      pool: "0xb6c057591E073249F2D9D88Ba59a46CFC9B59EdB",
      lpToken: "0x3B3Ac5386837Dc563660FB6a0937DFAa5924333B",
      tokens: ["0x4Fabb145d64652a948d72533023f6E7A623C7C53"],
    },
    "dai+usdc+usdt+busd": {
      pool: "0xb6c057591E073249F2D9D88Ba59a46CFC9B59EdB",
      lpToken: "0x3B3Ac5386837Dc563660FB6a0937DFAa5924333B",
      tokens: [
        "0x6b175474e89094c44da98b954eedeac495271d0f",
        "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        "0xdac17f958d2ee523a2206206994597c13d831ec7",
        "0x4Fabb145d64652a948d72533023f6E7A623C7C53",
      ],
    },
    "gusd_dai+usdc+usdt+gusd": {
      pool: "0x0aE274c98c0415C0651AF8cF52b010136E4a0082",
      lpToken: "0xD2967f45c4f384DEEa880F807Be904762a3DeA07",
      tokens: ["0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd"],
    },
    "dai_dai+usdc+usdt+gusd": {
      pool: "0x0aE274c98c0415C0651AF8cF52b010136E4a0082",
      lpToken: "0xD2967f45c4f384DEEa880F807Be904762a3DeA07",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_dai+usdc+usdt+gusd": {
      pool: "0x0aE274c98c0415C0651AF8cF52b010136E4a0082",
      lpToken: "0xD2967f45c4f384DEEa880F807Be904762a3DeA07",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_dai+usdc+usdt+gusd": {
      pool: "0x0aE274c98c0415C0651AF8cF52b010136E4a0082",
      lpToken: "0xD2967f45c4f384DEEa880F807Be904762a3DeA07",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "dai+usdc+usdt+gusd": {
      pool: "0x0aE274c98c0415C0651AF8cF52b010136E4a0082",
      lpToken: "0xD2967f45c4f384DEEa880F807Be904762a3DeA07",
      tokens: [
        "0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "husd_dai+usdc+usdt+husd": {
      pool: "0x0a53FaDa2d943057C47A301D25a4D9b3B8e01e8E",
      lpToken: "0x5B5CFE992AdAC0C9D48E05854B2d91C73a003858",
      tokens: ["0xdF574c24545E5FfEcb9a659c229253D4111d87e1"],
    },
    "dai_dai+usdc+usdt+husd": {
      pool: "0x0a53FaDa2d943057C47A301D25a4D9b3B8e01e8E",
      lpToken: "0x5B5CFE992AdAC0C9D48E05854B2d91C73a003858",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_dai+usdc+usdt+husd": {
      pool: "0x0a53FaDa2d943057C47A301D25a4D9b3B8e01e8E",
      lpToken: "0x5B5CFE992AdAC0C9D48E05854B2d91C73a003858",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_dai+usdc+usdt+husd": {
      pool: "0x0a53FaDa2d943057C47A301D25a4D9b3B8e01e8E",
      lpToken: "0x5B5CFE992AdAC0C9D48E05854B2d91C73a003858",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "dai+usdc+usdt+husd": {
      pool: "0x0a53FaDa2d943057C47A301D25a4D9b3B8e01e8E",
      lpToken: "0x5B5CFE992AdAC0C9D48E05854B2d91C73a003858",
      tokens: [
        "0xdF574c24545E5FfEcb9a659c229253D4111d87e1",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "usdk_dai+usdc+usdt+usdk": {
      pool: "0x6600e98b71dabfD4A8Cac03b302B0189Adb86Afb",
      lpToken: "0x97E2768e8E73511cA874545DC5Ff8067eB19B787",
      tokens: ["0x1c48f86ae57291F7686349F12601910BD8D470bb"],
    },
    "dai_dai+usdc+usdt+usdk": {
      pool: "0x6600e98b71dabfD4A8Cac03b302B0189Adb86Afb",
      lpToken: "0x97E2768e8E73511cA874545DC5Ff8067eB19B787",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_dai+usdc+usdt+usdk": {
      pool: "0x6600e98b71dabfD4A8Cac03b302B0189Adb86Afb",
      lpToken: "0x97E2768e8E73511cA874545DC5Ff8067eB19B787",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_dai+usdc+usdt+usdk": {
      pool: "0x6600e98b71dabfD4A8Cac03b302B0189Adb86Afb",
      lpToken: "0x97E2768e8E73511cA874545DC5Ff8067eB19B787",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "dai+usdc+usdt+usdk": {
      pool: "0x6600e98b71dabfD4A8Cac03b302B0189Adb86Afb",
      lpToken: "0x97E2768e8E73511cA874545DC5Ff8067eB19B787",
      tokens: [
        "0x1c48f86ae57291F7686349F12601910BD8D470bb",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "usdn_dai+usdc+usdt+usdn": {
      pool: "0x35796DAc54f144DFBAD1441Ec7C32313A7c29F39",
      lpToken: "0x4f3E8F405CF5aFC05D68142F3783bDfE13811522",
      tokens: ["0x674C6Ad92Fd080e4004b2312b45f796a192D27a0"],
    },
    "dai_dai+usdc+usdt+usdn": {
      pool: "0x35796DAc54f144DFBAD1441Ec7C32313A7c29F39",
      lpToken: "0x4f3E8F405CF5aFC05D68142F3783bDfE13811522",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_dai+usdc+usdt+usdn": {
      pool: "0x35796DAc54f144DFBAD1441Ec7C32313A7c29F39",
      lpToken: "0x4f3E8F405CF5aFC05D68142F3783bDfE13811522",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_dai+usdc+usdt+usdn": {
      pool: "0x35796DAc54f144DFBAD1441Ec7C32313A7c29F39",
      lpToken: "0x4f3E8F405CF5aFC05D68142F3783bDfE13811522",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "dai+usdc+usdt+usdn": {
      pool: "0x35796DAc54f144DFBAD1441Ec7C32313A7c29F39",
      lpToken: "0x4f3E8F405CF5aFC05D68142F3783bDfE13811522",
      tokens: [
        "0x674C6Ad92Fd080e4004b2312b45f796a192D27a0",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "linkusd_dai+usdc+usdt+linkusd": {
      pool: "0xF6bDc2619FFDA72c537Cd9605e0A274Dc48cB1C9",
      lpToken: "0x6D65b498cb23deAba52db31c93Da9BFFb340FB8F",
      tokens: ["0x0E2EC54fC0B509F445631Bf4b91AB8168230C752"],
    },
    "dai_dai+usdc+usdt+linkusd": {
      pool: "0xF6bDc2619FFDA72c537Cd9605e0A274Dc48cB1C9",
      lpToken: "0x6D65b498cb23deAba52db31c93Da9BFFb340FB8F",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_dai+usdc+usdt+linkusd": {
      pool: "0xF6bDc2619FFDA72c537Cd9605e0A274Dc48cB1C9",
      lpToken: "0x6D65b498cb23deAba52db31c93Da9BFFb340FB8F",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_dai+usdc+usdt+linkusd": {
      pool: "0xF6bDc2619FFDA72c537Cd9605e0A274Dc48cB1C9",
      lpToken: "0x6D65b498cb23deAba52db31c93Da9BFFb340FB8F",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "dai+usdc+usdt+linkusd": {
      pool: "0xF6bDc2619FFDA72c537Cd9605e0A274Dc48cB1C9",
      lpToken: "0x6D65b498cb23deAba52db31c93Da9BFFb340FB8F",
      tokens: [
        "0x0E2EC54fC0B509F445631Bf4b91AB8168230C752",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "musd_dai+usdc+usdt+musd": {
      pool: "0x78CF256256C8089d68Cde634Cf7cDEFb39286470",
      lpToken: "0x1AEf73d49Dedc4b1778d0706583995958Dc862e6",
      tokens: ["0xe2f2a5C287993345a840Db3B0845fbC70f5935a5"],
    },
    "dai_dai+usdc+usdt+musd": {
      pool: "0x78CF256256C8089d68Cde634Cf7cDEFb39286470",
      lpToken: "0x1AEf73d49Dedc4b1778d0706583995958Dc862e6",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_dai+usdc+usdt+musd": {
      pool: "0x78CF256256C8089d68Cde634Cf7cDEFb39286470",
      lpToken: "0x1AEf73d49Dedc4b1778d0706583995958Dc862e6",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_dai+usdc+usdt+musd": {
      pool: "0x78CF256256C8089d68Cde634Cf7cDEFb39286470",
      lpToken: "0x1AEf73d49Dedc4b1778d0706583995958Dc862e6",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "dai+usdc+usdt+musd": {
      pool: "0x78CF256256C8089d68Cde634Cf7cDEFb39286470",
      lpToken: "0x1AEf73d49Dedc4b1778d0706583995958Dc862e6",
      tokens: [
        "0xe2f2a5C287993345a840Db3B0845fbC70f5935a5",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rsv_dai+usdc+usdt+rsv": {
      pool: "0x459eAA680b47D27c8561708C96c949e0018dF5d9",
      lpToken: "0xC2Ee6b0334C261ED60C72f6054450b61B8f18E35",
      tokens: ["0x196f4727526eA7FB1e17b2071B3d8eAA38486988"],
    },
    "dai_dai+usdc+usdt+rsv": {
      pool: "0x459eAA680b47D27c8561708C96c949e0018dF5d9",
      lpToken: "0xC2Ee6b0334C261ED60C72f6054450b61B8f18E35",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_dai+usdc+usdt+rsv": {
      pool: "0x459eAA680b47D27c8561708C96c949e0018dF5d9",
      lpToken: "0xC2Ee6b0334C261ED60C72f6054450b61B8f18E35",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_dai+usdc+usdt+rsv": {
      pool: "0x459eAA680b47D27c8561708C96c949e0018dF5d9",
      lpToken: "0xC2Ee6b0334C261ED60C72f6054450b61B8f18E35",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "dai+usdc+usdt+rsv": {
      pool: "0x459eAA680b47D27c8561708C96c949e0018dF5d9",
      lpToken: "0xC2Ee6b0334C261ED60C72f6054450b61B8f18E35",
      tokens: [
        "0x196f4727526eA7FB1e17b2071B3d8eAA38486988",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "dusd_dai+usdc+usdt+dusd": {
      pool: "0x61E10659fe3aa93d036d099405224E4Ac24996d0",
      lpToken: "0x3a664Ab939FD8482048609f652f9a0B0677337B9",
      tokens: ["0x5BC25f649fc4e26069dDF4cF4010F9f706c23831"],
    },
    "dai_dai+usdc+usdt+dusd": {
      pool: "0x61E10659fe3aa93d036d099405224E4Ac24996d0",
      lpToken: "0x3a664Ab939FD8482048609f652f9a0B0677337B9",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_dai+usdc+usdt+dusd": {
      pool: "0x61E10659fe3aa93d036d099405224E4Ac24996d0",
      lpToken: "0x3a664Ab939FD8482048609f652f9a0B0677337B9",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_dai+usdc+usdt+dusd": {
      pool: "0x61E10659fe3aa93d036d099405224E4Ac24996d0",
      lpToken: "0x3a664Ab939FD8482048609f652f9a0B0677337B9",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "dai+usdc+usdt+dusd": {
      pool: "0x61E10659fe3aa93d036d099405224E4Ac24996d0",
      lpToken: "0x3a664Ab939FD8482048609f652f9a0B0677337B9",
      tokens: [
        "0x5BC25f649fc4e26069dDF4cF4010F9f706c23831",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "tbtc_renbtc+wbtc+sbtc+tbtc": {
      pool: "0xaa82ca713D94bBA7A89CEAB55314F9EfFEdDc78c",
      lpToken: "0x64eda51d3Ad40D56b9dFc5554E06F94e1Dd786Fd",
      tokens: ["0x8dAEBADE922dF735c38C80C7eBD708Af50815fAa"],
    },
    "renbtc_renbtc+wbtc+sbtc+tbtc": {
      pool: "0xaa82ca713D94bBA7A89CEAB55314F9EfFEdDc78c",
      lpToken: "0x64eda51d3Ad40D56b9dFc5554E06F94e1Dd786Fd",
      tokens: ["0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D"],
    },
    "wbtc_renbtc+wbtc+sbtc+tbtc": {
      pool: "0xaa82ca713D94bBA7A89CEAB55314F9EfFEdDc78c",
      lpToken: "0x64eda51d3Ad40D56b9dFc5554E06F94e1Dd786Fd",
      tokens: ["0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599"],
    },
    "sbtc_renbtc+wbtc+sbtc+tbtc": {
      pool: "0xaa82ca713D94bBA7A89CEAB55314F9EfFEdDc78c",
      lpToken: "0x64eda51d3Ad40D56b9dFc5554E06F94e1Dd786Fd",
      tokens: ["0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6"],
    },
    "renbtc+wbtc+sbtc+tbtc": {
      pool: "0xaa82ca713D94bBA7A89CEAB55314F9EfFEdDc78c",
      lpToken: "0x64eda51d3Ad40D56b9dFc5554E06F94e1Dd786Fd",
      tokens: [
        "0x8dAEBADE922dF735c38C80C7eBD708Af50815fAa",
        "0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D",
        "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
        "0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6",
      ],
    },
    "pbtc+renbtc+wbtc+sbtc": {
      pool: "0x11F419AdAbbFF8d595E7d5b223eee3863Bb3902C",
      lpToken: "0xDE5331AC4B3630f94853Ff322B66407e0D6331E8",
      tokens: [
        "0x5228a22e72ccC52d415EcFd199F99D0665E7733b",
        "0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D",
        "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
        "0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6",
      ],
    },
    "pbtc_pbtc+renbtc+wbtc+sbtc": {
      pool: "0x11F419AdAbbFF8d595E7d5b223eee3863Bb3902C",
      lpToken: "0xDE5331AC4B3630f94853Ff322B66407e0D6331E8",
      tokens: ["0x5228a22e72ccC52d415EcFd199F99D0665E7733b"],
    },
    "renbtc_pbtc+renbtc+wbtc+sbtc": {
      pool: "0x11F419AdAbbFF8d595E7d5b223eee3863Bb3902C",
      lpToken: "0xDE5331AC4B3630f94853Ff322B66407e0D6331E8",
      tokens: ["0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D"],
    },
    "wbtc_pbtc+renbtc+wbtc+sbtc": {
      pool: "0x11F419AdAbbFF8d595E7d5b223eee3863Bb3902C",
      lpToken: "0xDE5331AC4B3630f94853Ff322B66407e0D6331E8",
      tokens: ["0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599"],
    },
    "sbtc_pbtc+renbtc+wbtc+sbtc": {
      pool: "0x11F419AdAbbFF8d595E7d5b223eee3863Bb3902C",
      lpToken: "0xDE5331AC4B3630f94853Ff322B66407e0D6331E8",
      tokens: ["0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6"],
    },
    "bbtc+renbtc+wbtc+sbtc": {
      pool: "0xC45b2EEe6e09cA176Ca3bB5f7eEe7C47bF93c756",
      lpToken: "0x410e3E86ef427e30B9235497143881f717d93c2A",
      tokens: [
        "0x9BE89D2a4cd102D8Fecc6BF9dA793be995C22541",
        "0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D",
        "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
        "0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6",
      ],
    },
    "bbtc_bbtc+renbtc+wbtc+sbtc": {
      pool: "0xC45b2EEe6e09cA176Ca3bB5f7eEe7C47bF93c756",
      lpToken: "0x410e3E86ef427e30B9235497143881f717d93c2A",
      tokens: ["0x9BE89D2a4cd102D8Fecc6BF9dA793be995C22541"],
    },
    "renbtc_bbtc+renbtc+wbtc+sbtc": {
      pool: "0xC45b2EEe6e09cA176Ca3bB5f7eEe7C47bF93c756",
      lpToken: "0x410e3E86ef427e30B9235497143881f717d93c2A",
      tokens: ["0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D"],
    },
    "wbtc_bbtc+renbtc+wbtc+sbtc": {
      pool: "0xC45b2EEe6e09cA176Ca3bB5f7eEe7C47bF93c756",
      lpToken: "0x410e3E86ef427e30B9235497143881f717d93c2A",
      tokens: ["0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599"],
    },
    "sbtc_bbtc+renbtc+wbtc+sbtc": {
      pool: "0xC45b2EEe6e09cA176Ca3bB5f7eEe7C47bF93c756",
      lpToken: "0x410e3E86ef427e30B9235497143881f717d93c2A",
      tokens: ["0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6"],
    },
    "obtc_obtc+renbtc+wbtc+sbtc": {
      pool: "0xd5BCf53e2C81e1991570f33Fa881c49EEa570C8D",
      lpToken: "0x2fE94ea3d5d4a175184081439753DE15AeF9d614",
      tokens: ["0x8064d9Ae6cDf087b1bcd5BDf3531bD5d8C537a68"],
    },
    "renbtc_obtc+renbtc+wbtc+sbtc": {
      pool: "0xd5BCf53e2C81e1991570f33Fa881c49EEa570C8D",
      lpToken: "0x2fE94ea3d5d4a175184081439753DE15AeF9d614",
      tokens: ["0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D"],
    },
    "wbtc_obtc+renbtc+wbtc+sbtc": {
      pool: "0xd5BCf53e2C81e1991570f33Fa881c49EEa570C8D",
      lpToken: "0x2fE94ea3d5d4a175184081439753DE15AeF9d614",
      tokens: ["0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599"],
    },
    "sbtc_obtc+renbtc+wbtc+sbtc": {
      pool: "0xd5BCf53e2C81e1991570f33Fa881c49EEa570C8D",
      lpToken: "0x2fE94ea3d5d4a175184081439753DE15AeF9d614",
      tokens: ["0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6"],
    },
    "obtc+renbtc+wbtc+sbtc": {
      pool: "0xd5BCf53e2C81e1991570f33Fa881c49EEa570C8D",
      lpToken: "0x2fE94ea3d5d4a175184081439753DE15AeF9d614",
      tokens: [
        "0x8064d9Ae6cDf087b1bcd5BDf3531bD5d8C537a68",
        "0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D",
        "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
        "0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6",
      ],
    },
    "ust+dai+usdc+usdt": {
      pool: "0xB0a0716841F2Fc03fbA72A891B8Bb13584F52F2d",
      lpToken: "0x2fE94ea3d5d4a175184081439753DE15AeF9d614",
      tokens: [
        "0xa47c8bf37f92aBed4A126BDA807A7b7498661acD",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "ust_ust+dai+usdc+usdt": {
      pool: "0xB0a0716841F2Fc03fbA72A891B8Bb13584F52F2d",
      lpToken: "0x2fE94ea3d5d4a175184081439753DE15AeF9d614",
      tokens: ["0xa47c8bf37f92aBed4A126BDA807A7b7498661acD"],
    },
    "dai_ust+dai+usdc+usdt": {
      pool: "0xB0a0716841F2Fc03fbA72A891B8Bb13584F52F2d",
      lpToken: "0x2fE94ea3d5d4a175184081439753DE15AeF9d614",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_ust+dai+usdc+usdt": {
      pool: "0xB0a0716841F2Fc03fbA72A891B8Bb13584F52F2d",
      lpToken: "0x2fE94ea3d5d4a175184081439753DE15AeF9d614",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "usdt_ust+dai+usdc+usdt": {
      pool: "0xB0a0716841F2Fc03fbA72A891B8Bb13584F52F2d",
      lpToken: "0x2fE94ea3d5d4a175184081439753DE15AeF9d614",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "usdp_usdp+dai+usdc+usdt": {
      pool: "0x3c8cAee4E09296800f8D29A68Fa3837e2dae4940",
      lpToken: "0x7Eb40E450b9655f4B3cC4259BCC731c63ff55ae6",
      tokens: ["0x1456688345527be1f37e9e627da0837d6f08c925"],
    },
    "dai_usdp+dai+usdc+usdt": {
      pool: "0x3c8cAee4E09296800f8D29A68Fa3837e2dae4940",
      lpToken: "0x7Eb40E450b9655f4B3cC4259BCC731c63ff55ae6",
      tokens: ["0x6b175474e89094c44da98b954eedeac495271d0f"],
    },
    "usdc_usdp+dai+usdc+usdt": {
      pool: "0x3c8cAee4E09296800f8D29A68Fa3837e2dae4940",
      lpToken: "0x7Eb40E450b9655f4B3cC4259BCC731c63ff55ae6",
      tokens: ["0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"],
    },
    "usdt_usdp+dai+usdc+usdt": {
      pool: "0x3c8cAee4E09296800f8D29A68Fa3837e2dae4940",
      lpToken: "0x7Eb40E450b9655f4B3cC4259BCC731c63ff55ae6",
      tokens: ["0xdac17f958d2ee523a2206206994597c13d831ec7"],
    },
    "usdp+dai+usdc+usdt": {
      pool: "0x3c8cAee4E09296800f8D29A68Fa3837e2dae4940",
      lpToken: "0x7Eb40E450b9655f4B3cC4259BCC731c63ff55ae6",
      tokens: [
        "0x1456688345527be1f37e9e627da0837d6f08c925",
        "0x6b175474e89094c44da98b954eedeac495271d0f",
        "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        "0xdac17f958d2ee523a2206206994597c13d831ec7",
      ],
    },
    "dai_dai+usdc+usdt_aave": {
      pool: "0xDeBF20617708857ebe4F679508E7b7863a8A8EeE",
      lpToken: "0xFd2a8fA60Abd58Efe3EeE34dd494cD491dC14900",
      tokens: ["0x6b175474e89094c44da98b954eedeac495271d0f"],
    },
    "usdc_dai+usdc+usdt_aave": {
      pool: "0xDeBF20617708857ebe4F679508E7b7863a8A8EeE",
      lpToken: "0xFd2a8fA60Abd58Efe3EeE34dd494cD491dC14900",
      tokens: ["0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"],
    },
    "usdt_dai+usdc+usdt_aave": {
      pool: "0xDeBF20617708857ebe4F679508E7b7863a8A8EeE",
      lpToken: "0xFd2a8fA60Abd58Efe3EeE34dd494cD491dC14900",
      tokens: ["0xdac17f958d2ee523a2206206994597c13d831ec7"],
    },
    "dai+usdc+usdt_aave": {
      pool: "0xDeBF20617708857ebe4F679508E7b7863a8A8EeE",
      lpToken: "0xFd2a8fA60Abd58Efe3EeE34dd494cD491dC14900",
      tokens: [
        "0x6b175474e89094c44da98b954eedeac495271d0f",
        "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        "0xdac17f958d2ee523a2206206994597c13d831ec7",
      ],
    },
    "dai_dai+susd_aave": {
      pool: "0xEB16Ae0052ed37f479f7fe63849198Df1765a733",
      lpToken: "0x02d341CcB60fAaf662bC0554d13778015d1b285C",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "susd_dai+susd_aave": {
      pool: "0xEB16Ae0052ed37f479f7fe63849198Df1765a733",
      lpToken: "0x02d341CcB60fAaf662bC0554d13778015d1b285C",
      tokens: ["0x57Ab1ec28D129707052df4dF418D58a2D46d5f51"],
    },
    "dai+susd_aave": {
      pool: "0xEB16Ae0052ed37f479f7fe63849198Df1765a733",
      lpToken: "0x02d341CcB60fAaf662bC0554d13778015d1b285C",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F", "0x57Ab1ec28D129707052df4dF418D58a2D46d5f51"],
    },
    "dai_dai+usdc+usdt_yearn": {
      pool: "0x2dded6Da1BF5DBdF597C45fcFaa3194e53EcfeAF",
      lpToken: "0x5282a4eF67D9C33135340fB3289cc1711c13638C",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_dai+usdc+usdt_yearn": {
      pool: "0x2dded6Da1BF5DBdF597C45fcFaa3194e53EcfeAF",
      lpToken: "0x5282a4eF67D9C33135340fB3289cc1711c13638C",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_dai+usdc+usdt_yearn": {
      pool: "0x2dded6Da1BF5DBdF597C45fcFaa3194e53EcfeAF",
      lpToken: "0x5282a4eF67D9C33135340fB3289cc1711c13638C",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "dai+usdc+usdt_yearn": {
      pool: "0x2dded6Da1BF5DBdF597C45fcFaa3194e53EcfeAF",
      lpToken: "0x5282a4eF67D9C33135340fB3289cc1711c13638C",
      tokens: [
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
  },
  CurveSwapPool: {
    dai_3crv: {
      pool: "0xbEbc44782C7dB0a1A60Cb6fe97d0b483032FF1C7",
      lpToken: "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490",
      tokens: ["0x6b175474e89094c44da98b954eedeac495271d0f"],
    },
    usdc_3crv: {
      pool: "0xbEbc44782C7dB0a1A60Cb6fe97d0b483032FF1C7",
      lpToken: "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490",
      tokens: ["0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"],
    },
    usdt_3crv: {
      pool: "0xbEbc44782C7dB0a1A60Cb6fe97d0b483032FF1C7",
      lpToken: "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490",
      tokens: ["0xdac17f958d2ee523a2206206994597c13d831ec7"],
    },
    "dai+usdc+usdt_3crv": {
      pool: "0xbEbc44782C7dB0a1A60Cb6fe97d0b483032FF1C7",
      lpToken: "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490",
      tokens: [
        "0x6b175474e89094c44da98b954eedeac495271d0f",
        "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        "0xdac17f958d2ee523a2206206994597c13d831ec7",
      ],
    },
    wbtc_crvRenWBTC: {
      pool: "0x93054188d876f558f4a66B2EF1d97d16eDf0895B",
      lpToken: "0x49849C98ae39Fff122806C06791Fa73784FB3675",
      tokens: ["0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599"],
    },
    renbtc_crvRenWBTC: {
      pool: "0x93054188d876f558f4a66B2EF1d97d16eDf0895B",
      lpToken: "0x49849C98ae39Fff122806C06791Fa73784FB3675",
      tokens: ["0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D"],
    },
    "wbtc+renbtc_crvRenWBTC": {
      pool: "0x93054188d876f558f4a66B2EF1d97d16eDf0895B",
      lpToken: "0x49849C98ae39Fff122806C06791Fa73784FB3675",
      tokens: ["0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599", "0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D"],
    },
    wbtc_crvRenWSBTC: {
      pool: "0x7fC77b5c7614E1533320Ea6DDc2Eb61fa00A9714",
      lpToken: "0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3",
      tokens: ["0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599"],
    },
    renbtc_crvRenWSBTC: {
      pool: "0x7fC77b5c7614E1533320Ea6DDc2Eb61fa00A9714",
      lpToken: "0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3",
      tokens: ["0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D"],
    },
    "wbtc+renbtc_crvRenWSBTC": {
      pool: "0x7fC77b5c7614E1533320Ea6DDc2Eb61fa00A9714",
      lpToken: "0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3",
      tokens: ["0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599", "0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D"],
    },
    wbtc_hCRV: {
      pool: "0x4CA9b3063Ec5866A4B82E437059D2C43d1be596F",
      lpToken: "0xb19059ebb43466C323583928285a49f558E572Fd",
      tokens: ["0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599"],
    },
    hbtc_hCRV: {
      pool: "0x4CA9b3063Ec5866A4B82E437059D2C43d1be596F",
      lpToken: "0xb19059ebb43466C323583928285a49f558E572Fd",
      tokens: ["0x0316EB71485b0Ab14103307bf65a021042c6d380"],
    },
    "wbtc+hbtc_hCRV": {
      pool: "0x4CA9b3063Ec5866A4B82E437059D2C43d1be596F",
      lpToken: "0xb19059ebb43466C323583928285a49f558E572Fd",
      tokens: ["0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599", "0x0316EB71485b0Ab14103307bf65a021042c6d380"],
    },
    gusd_gusd3CRV: {
      pool: "0x4f062658EaAF2C1ccf8C8e36D6824CDf41167956",
      lpToken: "0xD2967f45c4f384DEEa880F807Be904762a3DeA07",
      tokens: ["0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd"],
    },
    "3crv_gusd3CRV": {
      pool: "0x4f062658EaAF2C1ccf8C8e36D6824CDf41167956",
      lpToken: "0xD2967f45c4f384DEEa880F807Be904762a3DeA07",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "gusd+3Crv_gusd3CRV": {
      pool: "0x4f062658EaAF2C1ccf8C8e36D6824CDf41167956",
      lpToken: "0xD2967f45c4f384DEEa880F807Be904762a3DeA07",
      tokens: ["0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    husd_husd3CRV: {
      pool: "0x3eF6A01A0f81D6046290f3e2A8c5b843e738E604",
      lpToken: "0x5B5CFE992AdAC0C9D48E05854B2d91C73a003858",
      tokens: ["0xdF574c24545E5FfEcb9a659c229253D4111d87e1"],
    },
    "3crv_husd3CRV": {
      pool: "0x3eF6A01A0f81D6046290f3e2A8c5b843e738E604",
      lpToken: "0x5B5CFE992AdAC0C9D48E05854B2d91C73a003858",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "husd+3crv_husd3CRV": {
      pool: "0x3eF6A01A0f81D6046290f3e2A8c5b843e738E604",
      lpToken: "0x5B5CFE992AdAC0C9D48E05854B2d91C73a003858",
      tokens: ["0xdF574c24545E5FfEcb9a659c229253D4111d87e1", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    usdk_usdk3CRV: {
      pool: "0x3E01dD8a5E1fb3481F0F589056b428Fc308AF0Fb",
      lpToken: "0x97E2768e8E73511cA874545DC5Ff8067eB19B787",
      tokens: ["0x1c48f86ae57291F7686349F12601910BD8D470bb"],
    },
    "3crv_usdk3CRV": {
      pool: "0x3E01dD8a5E1fb3481F0F589056b428Fc308AF0Fb",
      lpToken: "0x97E2768e8E73511cA874545DC5Ff8067eB19B787",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "usdk+3crv_usdk3CRV": {
      pool: "0x3E01dD8a5E1fb3481F0F589056b428Fc308AF0Fb",
      lpToken: "0x97E2768e8E73511cA874545DC5Ff8067eB19B787",
      tokens: ["0x1c48f86ae57291F7686349F12601910BD8D470bb", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    usdn_usdn3CRV: {
      pool: "0x0f9cb53Ebe405d49A0bbdBD291A65Ff571bC83e1",
      lpToken: "0x4f3E8F405CF5aFC05D68142F3783bDfE13811522",
      tokens: ["0x674C6Ad92Fd080e4004b2312b45f796a192D27a0"],
    },
    "3crv_usdn3CRV": {
      pool: "0x0f9cb53Ebe405d49A0bbdBD291A65Ff571bC83e1",
      lpToken: "0x4f3E8F405CF5aFC05D68142F3783bDfE13811522",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "usdn+3crv_usdn3CRV": {
      pool: "0x0f9cb53Ebe405d49A0bbdBD291A65Ff571bC83e1",
      lpToken: "0x4f3E8F405CF5aFC05D68142F3783bDfE13811522",
      tokens: ["0x674C6Ad92Fd080e4004b2312b45f796a192D27a0", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    linkusd_LinkUSD3CRV: {
      pool: "0xE7a24EF0C5e95Ffb0f6684b813A78F2a3AD7D171",
      lpToken: "0x6D65b498cb23deAba52db31c93Da9BFFb340FB8F",
      tokens: ["0x0E2EC54fC0B509F445631Bf4b91AB8168230C752"],
    },
    "3crv_LinkUSD3CRV": {
      pool: "0xE7a24EF0C5e95Ffb0f6684b813A78F2a3AD7D171",
      lpToken: "0x6D65b498cb23deAba52db31c93Da9BFFb340FB8F",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "linkusd+3crv_LinkUSD3CRV": {
      pool: "0xE7a24EF0C5e95Ffb0f6684b813A78F2a3AD7D171",
      lpToken: "0x6D65b498cb23deAba52db31c93Da9BFFb340FB8F",
      tokens: ["0x0E2EC54fC0B509F445631Bf4b91AB8168230C752", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    musd_musd3CRV: {
      pool: "0x8474DdbE98F5aA3179B3B3F5942D724aFcdec9f6",
      lpToken: "0x1AEf73d49Dedc4b1778d0706583995958Dc862e6",
      tokens: ["0xe2f2a5C287993345a840Db3B0845fbC70f5935a5"],
    },
    "3crv_musd3CRV": {
      pool: "0x8474DdbE98F5aA3179B3B3F5942D724aFcdec9f6",
      lpToken: "0x1AEf73d49Dedc4b1778d0706583995958Dc862e6",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "musd+3crv_musd3CRV": {
      pool: "0x8474DdbE98F5aA3179B3B3F5942D724aFcdec9f6",
      lpToken: "0x1AEf73d49Dedc4b1778d0706583995958Dc862e6",
      tokens: ["0xe2f2a5C287993345a840Db3B0845fbC70f5935a5", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    rsv_rsv3CRV: {
      pool: "0xC18cC39da8b11dA8c3541C598eE022258F9744da",
      lpToken: "0xC2Ee6b0334C261ED60C72f6054450b61B8f18E35",
      tokens: ["0x196f4727526eA7FB1e17b2071B3d8eAA38486988"],
    },
    "3crv_rsv3CRV": {
      pool: "0xC18cC39da8b11dA8c3541C598eE022258F9744da",
      lpToken: "0xC2Ee6b0334C261ED60C72f6054450b61B8f18E35",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rsv+3crv_rsv3CRV": {
      pool: "0xC18cC39da8b11dA8c3541C598eE022258F9744da",
      lpToken: "0xC2Ee6b0334C261ED60C72f6054450b61B8f18E35",
      tokens: ["0x196f4727526eA7FB1e17b2071B3d8eAA38486988", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    dusd_dusd3CRV: {
      pool: "0x8038C01A0390a8c547446a0b2c18fc9aEFEcc10c",
      lpToken: "0x3a664Ab939FD8482048609f652f9a0B0677337B9",
      tokens: ["0x5BC25f649fc4e26069dDF4cF4010F9f706c23831"],
    },
    "3crv_dusd3CRV": {
      pool: "0x8038C01A0390a8c547446a0b2c18fc9aEFEcc10c",
      lpToken: "0x3a664Ab939FD8482048609f652f9a0B0677337B9",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "dusd+3crv_dusd3CRV": {
      pool: "0x8038C01A0390a8c547446a0b2c18fc9aEFEcc10c",
      lpToken: "0x3a664Ab939FD8482048609f652f9a0B0677337B9",
      tokens: ["0x5BC25f649fc4e26069dDF4cF4010F9f706c23831", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "pbtc_pbtc+sbtcCrv": {
      pool: "0x7F55DDe206dbAD629C080068923b36fe9D6bDBeF",
      lpToken: "0xDE5331AC4B3630f94853Ff322B66407e0D6331E8",
      tokens: ["0x5228a22e72ccC52d415EcFd199F99D0665E7733b"],
    },
    "sbtcCrv_pbtc+sbtcCrv": {
      pool: "0x7F55DDe206dbAD629C080068923b36fe9D6bDBeF",
      lpToken: "0xDE5331AC4B3630f94853Ff322B66407e0D6331E8",
      tokens: ["0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3"],
    },
    "pbtc+sbtcCrv": {
      pool: "0x7F55DDe206dbAD629C080068923b36fe9D6bDBeF",
      lpToken: "0xDE5331AC4B3630f94853Ff322B66407e0D6331E8",
      tokens: ["0x5228a22e72ccC52d415EcFd199F99D0665E7733b", "0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3"],
    },
    "bbtc_bbtc+sbtcCrv": {
      pool: "0x071c661B4DeefB59E2a3DdB20Db036821eeE8F4b",
      lpToken: "0x410e3E86ef427e30B9235497143881f717d93c2A",
      tokens: ["0x9BE89D2a4cd102D8Fecc6BF9dA793be995C22541"],
    },
    "sbtcCrv_bbtc+sbtcCrv": {
      pool: "0x071c661B4DeefB59E2a3DdB20Db036821eeE8F4b",
      lpToken: "0x410e3E86ef427e30B9235497143881f717d93c2A",
      tokens: ["0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3"],
    },
    "bbtc+sbtcCrv": {
      pool: "0x071c661B4DeefB59E2a3DdB20Db036821eeE8F4b",
      lpToken: "0x410e3E86ef427e30B9235497143881f717d93c2A",
      tokens: ["0x9BE89D2a4cd102D8Fecc6BF9dA793be995C22541", "0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3"],
    },
    "obtc_obtc+sbtcCrv": {
      pool: "0xd81dA8D904b52208541Bade1bD6595D8a251F8dd",
      lpToken: "0x2fE94ea3d5d4a175184081439753DE15AeF9d614",
      tokens: ["0x8064d9Ae6cDf087b1bcd5BDf3531bD5d8C537a68"],
    },
    "sbtcCrv_obtc+sbtcCrv": {
      pool: "0xd81dA8D904b52208541Bade1bD6595D8a251F8dd",
      lpToken: "0x2fE94ea3d5d4a175184081439753DE15AeF9d614",
      tokens: ["0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3"],
    },
    "obtc+sbtcCrv": {
      pool: "0xd81dA8D904b52208541Bade1bD6595D8a251F8dd",
      lpToken: "0x2fE94ea3d5d4a175184081439753DE15AeF9d614",
      tokens: ["0x8064d9Ae6cDf087b1bcd5BDf3531bD5d8C537a68", "0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3"],
    },
    "ust_ust+3CRV": {
      pool: "0x890f4e345B1dAED0367A877a1612f86A1f86985f",
      lpToken: "0x94e131324b6054c0D789b190b2dAC504e4361b53",
      tokens: ["0xa47c8bf37f92aBed4A126BDA807A7b7498661acD"],
    },
    "3crv_ust+3CRV": {
      pool: "0x890f4e345B1dAED0367A877a1612f86A1f86985f",
      lpToken: "0x94e131324b6054c0D789b190b2dAC504e4361b53",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "ust+3CRV": {
      pool: "0x890f4e345B1dAED0367A877a1612f86A1f86985f",
      lpToken: "0x94e131324b6054c0D789b190b2dAC504e4361b53",
      tokens: ["0xa47c8bf37f92aBed4A126BDA807A7b7498661acD", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "eurs_eurs+seur": {
      pool: "0x0Ce6a5fF5217e38315f87032CF90686C96627CAA",
      lpToken: "0x194eBd173F6cDacE046C53eACcE9B953F28411d1",
      tokens: ["0xdB25f211AB05b1c97D595516F45794528a807ad8"],
    },
    "seur_eurs+seur": {
      pool: "0x0Ce6a5fF5217e38315f87032CF90686C96627CAA",
      lpToken: "0x194eBd173F6cDacE046C53eACcE9B953F28411d1",
      tokens: ["0xD71eCFF9342A5Ced620049e616c5035F1dB98620"],
    },
    "eurs+seur": {
      pool: "0x0Ce6a5fF5217e38315f87032CF90686C96627CAA",
      lpToken: "0x194eBd173F6cDacE046C53eACcE9B953F28411d1",
      tokens: ["0xdB25f211AB05b1c97D595516F45794528a807ad8", "0xD71eCFF9342A5Ced620049e616c5035F1dB98620"],
    },
    "aethc_eth+aethc": {
      pool: "0xA96A65c051bF88B4095Ee1f2451C2A9d43F53Ae2",
      lpToken: "0xaA17A236F2bAdc98DDc0Cf999AbB47D47Fc0A6Cf",
      tokens: ["0xE95A203B1a91a908F9B9CE46459d101078c2c3cb"],
    },
    "eth+aethc": {
      pool: "0xA96A65c051bF88B4095Ee1f2451C2A9d43F53Ae2",
      lpToken: "0xaA17A236F2bAdc98DDc0Cf999AbB47D47Fc0A6Cf",
      tokens: ["0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", "0xE95A203B1a91a908F9B9CE46459d101078c2c3cb"],
    },
    "usdp_usdp+3crv": {
      pool: "0x42d7025938bEc20B69cBae5A77421082407f053A",
      lpToken: "0x7Eb40E450b9655f4B3cC4259BCC731c63ff55ae6",
      tokens: ["0x1456688345527bE1f37E9e627DA0837D6f08C925"],
    },
    "3crv_usdp+3crv": {
      pool: "0x42d7025938bEc20B69cBae5A77421082407f053A",
      lpToken: "0x7Eb40E450b9655f4B3cC4259BCC731c63ff55ae6",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "usdp+3crv": {
      pool: "0x42d7025938bEc20B69cBae5A77421082407f053A",
      lpToken: "0x7Eb40E450b9655f4B3cC4259BCC731c63ff55ae6",
      tokens: ["0x1456688345527bE1f37E9e627DA0837D6f08C925", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "link_link+slink": {
      pool: "0xF178C0b5Bb7e7aBF4e12A4838C7b7c5bA2C623c0",
      lpToken: "0xcee60cFa923170e4f8204AE08B4fA6A3F5656F3a",
      tokens: ["0x514910771AF9Ca656af840dff83E8264EcF986CA"],
    },
    "eth_eth+seth": {
      pool: "0xc5424B857f758E906013F3555Dad202e4bdB4567",
      lpToken: "0xA3D87FffcE63B53E0d54fAa1cc983B7eB0b74A9c",
      tokens: ["0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"],
    },
    "eth+seth": {
      pool: "0xc5424B857f758E906013F3555Dad202e4bdB4567",
      lpToken: "0xA3D87FffcE63B53E0d54fAa1cc983B7eB0b74A9c",
      tokens: ["0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", "0x5e74C9036fb86BD7eCdcb084a0673EFc32eA31cb"],
    },

    "seth_eth+seth": {
      pool: "0xc5424B857f758E906013F3555Dad202e4bdB4567",
      lpToken: "0xA3D87FffcE63B53E0d54fAa1cc983B7eB0b74A9c",
      tokens: ["0x5e74C9036fb86BD7eCdcb084a0673EFc32eA31cb"],
    },
    "eth_eth+steth": {
      pool: "0xDC24316b9AE028F1497c275EB9192a3Ea0f67022",
      lpToken: "0x06325440D014e39736583c165C2963BA99fAf14E",
      tokens: ["0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"],
    },
    "steth_eth+steth": {
      pool: "0xDC24316b9AE028F1497c275EB9192a3Ea0f67022",
      lpToken: "0x06325440D014e39736583c165C2963BA99fAf14E",
      tokens: ["0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84"],
    },
    "eth+steth": {
      pool: "0xDC24316b9AE028F1497c275EB9192a3Ea0f67022",
      lpToken: "0x06325440D014e39736583c165C2963BA99fAf14E",
      tokens: ["0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84"],
    },
    "eth_eth+aethc": {
      pool: "0xA96A65c051bF88B4095Ee1f2451C2A9d43F53Ae2",
      lpToken: "0xaA17A236F2bAdc98DDc0Cf999AbB47D47Fc0A6Cf",
      tokens: ["0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"],
    },
    "slink_link+slink": {
      pool: "0xF178C0b5Bb7e7aBF4e12A4838C7b7c5bA2C623c0",
      lpToken: "0xcee60cFa923170e4f8204AE08B4fA6A3F5656F3a",
      tokens: ["0xbBC455cb4F1B9e4bFC4B73970d360c8f032EfEE6"],
    },
    "link+slink": {
      pool: "0xF178C0b5Bb7e7aBF4e12A4838C7b7c5bA2C623c0",
      lpToken: "0xcee60cFa923170e4f8204AE08B4fA6A3F5656F3a",
      tokens: ["0x514910771AF9Ca656af840dff83E8264EcF986CA", "0xbBC455cb4F1B9e4bFC4B73970d360c8f032EfEE6"],
    },
    "eth_eth+reth": {
      pool: "0xF9440930043eb3997fc70e1339dBb11F341de7A8",
      lpToken: "0x53a901d48795C58f485cBB38df08FA96a24669D5",
      tokens: ["0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"],
    },
    "reth_eth+reth": {
      pool: "0xF9440930043eb3997fc70e1339dBb11F341de7A8",
      lpToken: "0x53a901d48795C58f485cBB38df08FA96a24669D5",
      tokens: ["0x9559Aaa82d9649C7A7b220E7c461d2E74c9a3593"],
    },
    "eth+reth": {
      pool: "0xF9440930043eb3997fc70e1339dBb11F341de7A8",
      lpToken: "0x53a901d48795C58f485cBB38df08FA96a24669D5",
      tokens: ["0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", "0x9559Aaa82d9649C7A7b220E7c461d2E74c9a3593"],
    },
    "cydai+cyusdc+cyusdt": {
      pool: "0x2dded6Da1BF5DBdF597C45fcFaa3194e53EcfeAF",
      lpToken: "0x5282a4eF67D9C33135340fB3289cc1711c13638C",
      tokens: [
        "0x8e595470Ed749b85C6F7669de83EAe304C2ec68F",
        "0x76Eb2FE28b36B3ee97F3Adae0C69606eeDB2A37c",
        "0x48759F220ED983dB51fA7A8C0D2AAb8f3ce4166a",
      ],
    },
    "cydai_cydai+cyusdc+cyusdt": {
      pool: "0x2dded6Da1BF5DBdF597C45fcFaa3194e53EcfeAF",
      lpToken: "0x5282a4eF67D9C33135340fB3289cc1711c13638C",
      tokens: ["0x8e595470Ed749b85C6F7669de83EAe304C2ec68F"],
    },
    "cyusdc_cydai+cyusdc+cyusdt": {
      pool: "0x2dded6Da1BF5DBdF597C45fcFaa3194e53EcfeAF",
      lpToken: "0x5282a4eF67D9C33135340fB3289cc1711c13638C",
      tokens: ["0x76Eb2FE28b36B3ee97F3Adae0C69606eeDB2A37c"],
    },
    "cyusdt_cydai+cyusdc+cyusdt": {
      pool: "0x2dded6Da1BF5DBdF597C45fcFaa3194e53EcfeAF",
      lpToken: "0x5282a4eF67D9C33135340fB3289cc1711c13638C",
      tokens: ["0x48759F220ED983dB51fA7A8C0D2AAb8f3ce4166a"],
    },
    "adai_adai+asusd": {
      pool: "0xEB16Ae0052ed37f479f7fe63849198Df1765a733",
      lpToken: "0x02d341CcB60fAaf662bC0554d13778015d1b285C",
      tokens: ["0x028171bCA77440897B824Ca71D1c56caC55b68A3"],
    },
    "asusd_adai+asusd": {
      pool: "0xEB16Ae0052ed37f479f7fe63849198Df1765a733",
      lpToken: "0x02d341CcB60fAaf662bC0554d13778015d1b285C",
      tokens: ["0x6C5024Cd4F8A59110119C56f8933403A539555EB"],
    },
    "adai+asusd": {
      pool: "0xEB16Ae0052ed37f479f7fe63849198Df1765a733",
      lpToken: "0x02d341CcB60fAaf662bC0554d13778015d1b285C",
      tokens: ["0x028171bCA77440897B824Ca71D1c56caC55b68A3", "0x6C5024Cd4F8A59110119C56f8933403A539555EB"],
    },
    "adai_adai+ausdc+ausdt": {
      pool: "0xDeBF20617708857ebe4F679508E7b7863a8A8EeE",
      lpToken: "0xFd2a8fA60Abd58Efe3EeE34dd494cD491dC14900",
      tokens: ["0x028171bCA77440897B824Ca71D1c56caC55b68A3"],
    },
    "ausdc_adai+ausdc+ausdt": {
      pool: "0xDeBF20617708857ebe4F679508E7b7863a8A8EeE",
      lpToken: "0xFd2a8fA60Abd58Efe3EeE34dd494cD491dC14900",
      tokens: ["0xBcca60bB61934080951369a648Fb03DF4F96263C"],
    },
    "adai+ausdc+ausdt": {
      pool: "0xDeBF20617708857ebe4F679508E7b7863a8A8EeE",
      lpToken: "0xFd2a8fA60Abd58Efe3EeE34dd494cD491dC14900",
      tokens: [
        "0x028171bCA77440897B824Ca71D1c56caC55b68A3",
        "0xBcca60bB61934080951369a648Fb03DF4F96263C",
        "0x3Ed3B47Dd13EC9a98b44e6204A523E766B225811",
      ],
    },
    "ausdt_adai+ausdc+ausdt": {
      pool: "0xDeBF20617708857ebe4F679508E7b7863a8A8EeE",
      lpToken: "0xFd2a8fA60Abd58Efe3EeE34dd494cD491dC14900",
      tokens: ["0x3Ed3B47Dd13EC9a98b44e6204A523E766B225811"],
    },
  },
  CurveMetapoolDepositPool: {
    "dola_dola+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x9547429C0e2c3A8B88C6833B58FCE962734C0E8C",
      tokens: ["0x865377367054516e17014CcdED1e7d814EDC9ce4"],
    },
    "dai_dola+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x9547429C0e2c3A8B88C6833B58FCE962734C0E8C",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_dola+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x9547429C0e2c3A8B88C6833B58FCE962734C0E8C",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_dola+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x9547429C0e2c3A8B88C6833B58FCE962734C0E8C",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "dola+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x9547429C0e2c3A8B88C6833B58FCE962734C0E8C",
      tokens: [
        "0x865377367054516e17014CcdED1e7d814EDC9ce4",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "alusd_alusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c",
      tokens: ["0xBC6DA0FE9aD5f3b0d58160288917AA56653660E9"],
    },
    "dai_alusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_alusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_alusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "alusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c",
      tokens: [
        "0xBC6DA0FE9aD5f3b0d58160288917AA56653660E9",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "frax_frax+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xd632f22692FaC7611d2AA1C0D552930D43CAEd3B",
      tokens: ["0x853d955aCEf822Db058eb8505911ED77F175b99e"],
    },
    "dai_frax+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xd632f22692FaC7611d2AA1C0D552930D43CAEd3B",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_frax+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xd632f22692FaC7611d2AA1C0D552930D43CAEd3B",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_frax+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xd632f22692FaC7611d2AA1C0D552930D43CAEd3B",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "frax+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xd632f22692FaC7611d2AA1C0D552930D43CAEd3B",
      tokens: [
        "0x853d955aCEf822Db058eb8505911ED77F175b99e",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "flexusd_flexusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x11E0Ab0561Ee271967F70Ea0DA54Fd538ba7a6B0",
      tokens: ["0xa774FFB4AF6B0A91331C084E1aebAE6Ad535e6F3"],
    },
    "dai_flexusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x11E0Ab0561Ee271967F70Ea0DA54Fd538ba7a6B0",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_flexusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x11E0Ab0561Ee271967F70Ea0DA54Fd538ba7a6B0",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_flexusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x11E0Ab0561Ee271967F70Ea0DA54Fd538ba7a6B0",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "flexusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x11E0Ab0561Ee271967F70Ea0DA54Fd538ba7a6B0",
      tokens: [
        "0xa774FFB4AF6B0A91331C084E1aebAE6Ad535e6F3",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "grapefruitusd_grapefruitusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xf5A95ccDe486B5fE98852bB02d8eC80a4b9422BD",
      tokens: ["0x71dF9Dd3e658f0136c40E2E8eC3988a5226E9A67"],
    },
    "dai_grapefruitusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xf5A95ccDe486B5fE98852bB02d8eC80a4b9422BD",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_grapefruitusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xf5A95ccDe486B5fE98852bB02d8eC80a4b9422BD",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_grapefruitusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xf5A95ccDe486B5fE98852bB02d8eC80a4b9422BD",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "grapefruitusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xf5A95ccDe486B5fE98852bB02d8eC80a4b9422BD",
      tokens: [
        "0x71dF9Dd3e658f0136c40E2E8eC3988a5226E9A67",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "mountainvusd_mountainvusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xE0b99F540B3cD69f88b4666c8f39877c79072851",
      tokens: ["0x4206Fc377c22eB4778B5DAc3C28d0fa92db43AE4"],
    },
    "dai_mountainvusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xE0b99F540B3cD69f88b4666c8f39877c79072851",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_mountainvusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xE0b99F540B3cD69f88b4666c8f39877c79072851",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_mountainvusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xE0b99F540B3cD69f88b4666c8f39877c79072851",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "mountainvusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xE0b99F540B3cD69f88b4666c8f39877c79072851",
      tokens: [
        "0x4206Fc377c22eB4778B5DAc3C28d0fa92db43AE4",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "efrontierusd_efrontierusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x592ae00d0DEE274d74faeDc6760302F54A5dB67e",
      tokens: ["0x575990152169e1C1a4867E81C6AE662caEf068fd"],
    },
    "dai_efrontierusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x592ae00d0DEE274d74faeDc6760302F54A5dB67e",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_efrontierusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x592ae00d0DEE274d74faeDc6760302F54A5dB67e",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_efrontierusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x592ae00d0DEE274d74faeDc6760302F54A5dB67e",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "efrontierusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x592ae00d0DEE274d74faeDc6760302F54A5dB67e",
      tokens: [
        "0x575990152169e1C1a4867E81C6AE662caEf068fd",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "nibbiousd_nibbiousd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x6f682319F4eE0320a53cc72341aC28408C4BeD19",
      tokens: ["0x25de492f43661Af568f46C0a3F39850Aa1D066A0"],
    },
    "dai_nibbiousd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x6f682319F4eE0320a53cc72341aC28408C4BeD19",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_nibbiousd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x6f682319F4eE0320a53cc72341aC28408C4BeD19",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_nibbiousd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x6f682319F4eE0320a53cc72341aC28408C4BeD19",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "nibbiousd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x6f682319F4eE0320a53cc72341aC28408C4BeD19",
      tokens: [
        "0x25de492f43661Af568f46C0a3F39850Aa1D066A0",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "folkvangusd_folkvangusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x296B9FA08cf80138dfa6c3fcce497152662BC314",
      tokens: ["0xe14026c2f4EdD463791DA1991c74Cf16975942f6"],
    },
    "dai_folkvangusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x296B9FA08cf80138dfa6c3fcce497152662BC314",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_folkvangusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x296B9FA08cf80138dfa6c3fcce497152662BC314",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_folkvangusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x296B9FA08cf80138dfa6c3fcce497152662BC314",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "folkvangusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x296B9FA08cf80138dfa6c3fcce497152662BC314",
      tokens: [
        "0xe14026c2f4EdD463791DA1991c74Cf16975942f6",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "1-noteusd_noteusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xe9Ab166bC03099d251170d0578FDFFb94bCDDe6F",
      tokens: ["0x25aE7B9808F6Cc3B5E9b8699b62b0395C3F01BE0"],
    },
    "1-dai_noteusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xe9Ab166bC03099d251170d0578FDFFb94bCDDe6F",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "1-usdc_noteusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xe9Ab166bC03099d251170d0578FDFFb94bCDDe6F",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "1-usdt_noteusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xe9Ab166bC03099d251170d0578FDFFb94bCDDe6F",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "1-noteusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xe9Ab166bC03099d251170d0578FDFFb94bCDDe6F",
      tokens: [
        "0x25aE7B9808F6Cc3B5E9b8699b62b0395C3F01BE0",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "mbtc_mbtc+renbtc+wbtc+sbtc": {
      pool: "0x7AbDBAf29929e7F8621B757D2a7c04d78d633834",
      lpToken: "0x064841157BadDcB2704cA38901D7d754a59b80E8",
      tokens: ["0xcfc013B416bE0Bd4b3bEdE35659423B796f8Dcf0"],
    },
    "renbtc_mbtc+renbtc+wbtc+sbtc": {
      pool: "0x7AbDBAf29929e7F8621B757D2a7c04d78d633834",
      lpToken: "0x064841157BadDcB2704cA38901D7d754a59b80E8",
      tokens: ["0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D"],
    },
    "wbtc_mbtc+renbtc+wbtc+sbtc": {
      pool: "0x7AbDBAf29929e7F8621B757D2a7c04d78d633834",
      lpToken: "0x064841157BadDcB2704cA38901D7d754a59b80E8",
      tokens: ["0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599"],
    },
    "sbtc_mbtc+renbtc+wbtc+sbtc": {
      pool: "0x7AbDBAf29929e7F8621B757D2a7c04d78d633834",
      lpToken: "0x064841157BadDcB2704cA38901D7d754a59b80E8",
      tokens: ["0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6"],
    },
    "mbtc+renbtc+wbtc+sbtc": {
      pool: "0x7AbDBAf29929e7F8621B757D2a7c04d78d633834",
      lpToken: "0x064841157BadDcB2704cA38901D7d754a59b80E8",
      tokens: [
        "0xcfc013B416bE0Bd4b3bEdE35659423B796f8Dcf0",
        "0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D",
        "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
        "0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6",
      ],
    },
    "stablex_stablex+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x3252eFd4EA2d6c78091a1f43982ee2C3659cC3D1",
      tokens: ["0xcD91538B91B4ba7797D39a2f66E63810b50A33d0"],
    },
    "dai_stablex+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x3252eFd4EA2d6c78091a1f43982ee2C3659cC3D1",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_stablex+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x3252eFd4EA2d6c78091a1f43982ee2C3659cC3D1",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_stablex+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x3252eFd4EA2d6c78091a1f43982ee2C3659cC3D1",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "stablex+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x3252eFd4EA2d6c78091a1f43982ee2C3659cC3D1",
      tokens: [
        "0xcD91538B91B4ba7797D39a2f66E63810b50A33d0",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "tusd_tusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xEcd5e75AFb02eFa118AF914515D6521aaBd189F1",
      tokens: ["0x0000000000085d4780B73119b644AE5ecd22b376"],
    },
    "dai_tusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xEcd5e75AFb02eFa118AF914515D6521aaBd189F1",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_tusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xEcd5e75AFb02eFa118AF914515D6521aaBd189F1",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_tusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xEcd5e75AFb02eFa118AF914515D6521aaBd189F1",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "tusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xEcd5e75AFb02eFa118AF914515D6521aaBd189F1",
      tokens: [
        "0x0000000000085d4780B73119b644AE5ecd22b376",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_wbtc_25000_dai_2021_3_31_rc_wbtc_25000_dai_2021_3_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x52EEEa483Ab7A801e2592a904Ad209C90e12E471",
      tokens: ["0x368df85396Be56f1D475E5D10339211a77e13C32"],
    },
    "dai_rc_wbtc_25000_dai_2021_3_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x52EEEa483Ab7A801e2592a904Ad209C90e12E471",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_wbtc_25000_dai_2021_3_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x52EEEa483Ab7A801e2592a904Ad209C90e12E471",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_wbtc_25000_dai_2021_3_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x52EEEa483Ab7A801e2592a904Ad209C90e12E471",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_wbtc_25000_dai_2021_3_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x52EEEa483Ab7A801e2592a904Ad209C90e12E471",
      tokens: [
        "0x368df85396Be56f1D475E5D10339211a77e13C32",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_inv_300_dai_2021_3_31_rc_inv_300_dai_2021_3_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x52890A0c018fbab21794AD18e15f87fdb57fb975",
      tokens: ["0xd0f05F157aB49b537009594d4605f8AC9564B34B"],
    },
    "dai_rc_inv_300_dai_2021_3_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x52890A0c018fbab21794AD18e15f87fdb57fb975",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_inv_300_dai_2021_3_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x52890A0c018fbab21794AD18e15f87fdb57fb975",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_inv_300_dai_2021_3_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x52890A0c018fbab21794AD18e15f87fdb57fb975",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_inv_300_dai_2021_3_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x52890A0c018fbab21794AD18e15f87fdb57fb975",
      tokens: [
        "0xd0f05F157aB49b537009594d4605f8AC9564B34B",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_veth2_850_dai_2021_4_30_rc_veth2_850_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x1Daf17e6d1d9ed6aa9Fe9910AE17Be98C2C4e6BA",
      tokens: ["0xFa8490d1C7A270B5f339eA97D05CC7c657774772"],
    },
    "dai_rc_veth2_850_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x1Daf17e6d1d9ed6aa9Fe9910AE17Be98C2C4e6BA",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_veth2_850_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x1Daf17e6d1d9ed6aa9Fe9910AE17Be98C2C4e6BA",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_veth2_850_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x1Daf17e6d1d9ed6aa9Fe9910AE17Be98C2C4e6BA",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_veth2_850_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x1Daf17e6d1d9ed6aa9Fe9910AE17Be98C2C4e6BA",
      tokens: [
        "0xFa8490d1C7A270B5f339eA97D05CC7c657774772",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "mic2_mic2+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x2B26239f52420d11420bC0982571BFE091417A7d",
      tokens: ["0xEEd0c8d2DA6d243329a6F4A8C2aC61A59ecBFa02"],
    },
    "dai_mic2+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x2B26239f52420d11420bC0982571BFE091417A7d",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_mic2+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x2B26239f52420d11420bC0982571BFE091417A7d",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_mic2+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x2B26239f52420d11420bC0982571BFE091417A7d",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "mic2+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x2B26239f52420d11420bC0982571BFE091417A7d",
      tokens: [
        "0xEEd0c8d2DA6d243329a6F4A8C2aC61A59ecBFa02",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "2-noteusd_noteusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xBd184cD60AF678633b3072FD0B47b5D4b7a072f3",
      tokens: ["0x25aE7B9808F6Cc3B5E9b8699b62b0395C3F01BE0"],
    },
    "2-dai_noteusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xBd184cD60AF678633b3072FD0B47b5D4b7a072f3",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "2-usdc_noteusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xBd184cD60AF678633b3072FD0B47b5D4b7a072f3",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "2-usdt_noteusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xBd184cD60AF678633b3072FD0B47b5D4b7a072f3",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "2-noteusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xBd184cD60AF678633b3072FD0B47b5D4b7a072f3",
      tokens: [
        "0x25aE7B9808F6Cc3B5E9b8699b62b0395C3F01BE0",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "wausd_wausd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x9f6664205988C3bf4B12B851c075102714869535",
      tokens: ["0xc2db4c131ADaF01c15a1DB654c040c8578929D55"],
    },
    "dai_wausd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x9f6664205988C3bf4B12B851c075102714869535",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_wausd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x9f6664205988C3bf4B12B851c075102714869535",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_wausd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x9f6664205988C3bf4B12B851c075102714869535",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "wausd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x9f6664205988C3bf4B12B851c075102714869535",
      tokens: [
        "0xc2db4c131ADaF01c15a1DB654c040c8578929D55",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "nkap_nkap+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xF9bE07E6E1f28890c1647612187Df8c6e4CC035b",
      tokens: ["0xd29F64577603F2854ab5270E0C68d44cee41e435"],
    },
    "dai_nkap+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xF9bE07E6E1f28890c1647612187Df8c6e4CC035b",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_nkap+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xF9bE07E6E1f28890c1647612187Df8c6e4CC035b",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_nkap+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xF9bE07E6E1f28890c1647612187Df8c6e4CC035b",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "nkap+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xF9bE07E6E1f28890c1647612187Df8c6e4CC035b",
      tokens: [
        "0xd29F64577603F2854ab5270E0C68d44cee41e435",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_pickle_4_dai_2021_4_30_rc_pickle_4_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x910A00594DC16dD699D579A8F7811d465Dfa2752",
      tokens: ["0xdA8b51EbD2ef9ADDb8F9223116Ba1960D9F1388f"],
    },
    "dai_rc_pickle_4_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x910A00594DC16dD699D579A8F7811d465Dfa2752",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_pickle_4_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x910A00594DC16dD699D579A8F7811d465Dfa2752",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_pickle_4_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x910A00594DC16dD699D579A8F7811d465Dfa2752",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_pickle_4_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x910A00594DC16dD699D579A8F7811d465Dfa2752",
      tokens: [
        "0xdA8b51EbD2ef9ADDb8F9223116Ba1960D9F1388f",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_wbtc_29000_dai_2021_4_30_rc_wbtc_29000_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x6Df2B0855060439251fee7eD34952b87b68EeEd9",
      tokens: ["0xF91C09A2f407753540718209e893E5C96dDB46cc"],
    },
    "dai_rc_wbtc_29000_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x6Df2B0855060439251fee7eD34952b87b68EeEd9",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_wbtc_29000_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x6Df2B0855060439251fee7eD34952b87b68EeEd9",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_wbtc_29000_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x6Df2B0855060439251fee7eD34952b87b68EeEd9",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_wbtc_29000_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x6Df2B0855060439251fee7eD34952b87b68EeEd9",
      tokens: [
        "0xF91C09A2f407753540718209e893E5C96dDB46cc",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_weth_900_dai_2021_4_30_rc_weth_900_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xf085c77B66cD32182f3573cA2B10762DF3Caaa50",
      tokens: ["0x8781407e5acBB728FF1f9289107118f8163880D9"],
    },
    "dai_rc_weth_900_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xf085c77B66cD32182f3573cA2B10762DF3Caaa50",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_weth_900_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xf085c77B66cD32182f3573cA2B10762DF3Caaa50",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_weth_900_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xf085c77B66cD32182f3573cA2B10762DF3Caaa50",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_weth_900_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xf085c77B66cD32182f3573cA2B10762DF3Caaa50",
      tokens: [
        "0x8781407e5acBB728FF1f9289107118f8163880D9",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_inv_300_dai_2021_4_30_rc_inv_300_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xaC63c167955007D5166Fec43255AD5675EfC3102",
      tokens: ["0x573Fff325f4a20db909fBbE7D037E17c486D8697"],
    },
    "dai_rc_inv_300_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xaC63c167955007D5166Fec43255AD5675EfC3102",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_inv_300_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xaC63c167955007D5166Fec43255AD5675EfC3102",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_inv_300_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xaC63c167955007D5166Fec43255AD5675EfC3102",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_inv_300_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xaC63c167955007D5166Fec43255AD5675EfC3102",
      tokens: [
        "0x573Fff325f4a20db909fBbE7D037E17c486D8697",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_xcover_150_dai_2021_4_30_rc_xcover_150_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x421CB018b91b4048FaAC1760Cee3B66026B940f2",
      tokens: ["0xC92Caa33F8ce55123437B88ACe245f915D6A0953"],
    },
    "dai_rc_xcover_150_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x421CB018b91b4048FaAC1760Cee3B66026B940f2",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_xcover_150_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x421CB018b91b4048FaAC1760Cee3B66026B940f2",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_xcover_150_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x421CB018b91b4048FaAC1760Cee3B66026B940f2",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_xcover_150_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x421CB018b91b4048FaAC1760Cee3B66026B940f2",
      tokens: [
        "0xC92Caa33F8ce55123437B88ACe245f915D6A0953",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_xsushi_8_dai_2021_4_30_rc_xsushi_8_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x4AcE85cF348F316384A96b4739A1ab58f5123E7a",
      tokens: ["0xb239556beb879Dbe313e2334AA924Ed734e4e1Bc"],
    },
    "dai_rc_xsushi_8_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x4AcE85cF348F316384A96b4739A1ab58f5123E7a",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_xsushi_8_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x4AcE85cF348F316384A96b4739A1ab58f5123E7a",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_xsushi_8_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x4AcE85cF348F316384A96b4739A1ab58f5123E7a",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_xsushi_8_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x4AcE85cF348F316384A96b4739A1ab58f5123E7a",
      tokens: [
        "0xb239556beb879Dbe313e2334AA924Ed734e4e1Bc",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_bbadger_15_dai_2021_4_30_rc_bbadger_15_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x23078d5BC3AAD79aEFa8773079EE703168F15cF5",
      tokens: ["0xDdd2fb8DbA3E1f8c6dDD1BCb1d8460F33adB897d"],
    },
    "dai_rc_bbadger_15_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x23078d5BC3AAD79aEFa8773079EE703168F15cF5",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_bbadger_15_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x23078d5BC3AAD79aEFa8773079EE703168F15cF5",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_bbadger_15_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x23078d5BC3AAD79aEFa8773079EE703168F15cF5",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_bbadger_15_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x23078d5BC3AAD79aEFa8773079EE703168F15cF5",
      tokens: [
        "0xDdd2fb8DbA3E1f8c6dDD1BCb1d8460F33adB897d",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_xruler_125_dai_2021_4_30_rc_xruler_125_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xaFcc5DADcDcFc4D353Ab2d36fbd57b80513a34e6",
      tokens: ["0xf3D907f9C7cb0B45dE0FDdfe9311B52F09A1c614"],
    },
    "dai_rc_xruler_125_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xaFcc5DADcDcFc4D353Ab2d36fbd57b80513a34e6",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_xruler_125_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xaFcc5DADcDcFc4D353Ab2d36fbd57b80513a34e6",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_xruler_125_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xaFcc5DADcDcFc4D353Ab2d36fbd57b80513a34e6",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_xruler_125_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xaFcc5DADcDcFc4D353Ab2d36fbd57b80513a34e6",
      tokens: [
        "0xf3D907f9C7cb0B45dE0FDdfe9311B52F09A1c614",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_bor_300_dai_2021_4_30_rc_bor_300_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xE764Fb1f870D621a197951F1A27aaC6d4F930329",
      tokens: ["0x2A924F39780c1EC568c2c2a169a13584A2E81E7D"],
    },
    "dai_rc_bor_300_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xE764Fb1f870D621a197951F1A27aaC6d4F930329",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_bor_300_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xE764Fb1f870D621a197951F1A27aaC6d4F930329",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_bor_300_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xE764Fb1f870D621a197951F1A27aaC6d4F930329",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_bor_300_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xE764Fb1f870D621a197951F1A27aaC6d4F930329",
      tokens: [
        "0x2A924F39780c1EC568c2c2a169a13584A2E81E7D",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_rgt_4_dai_2021_4_30_rc_rgt_4_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xaF47f0877A9b26FfF12ec8253E07f92F89c6805D",
      tokens: ["0xAE9949C8BdD8e6976CE775153c760d5ef75c4A4d"],
    },
    "dai_rc_rgt_4_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xaF47f0877A9b26FfF12ec8253E07f92F89c6805D",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_rgt_4_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xaF47f0877A9b26FfF12ec8253E07f92F89c6805D",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_rgt_4_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xaF47f0877A9b26FfF12ec8253E07f92F89c6805D",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_rgt_4_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xaF47f0877A9b26FfF12ec8253E07f92F89c6805D",
      tokens: [
        "0xAE9949C8BdD8e6976CE775153c760d5ef75c4A4d",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_mask_700_dai_2021_4_30_rc_mask_700_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x273AfbF6E257aae160749a61D4b83E06A841c3eB",
      tokens: ["0x513d29D2b296a51b40A35C4d63884E0AC0a8D075"],
    },
    "dai_rc_mask_700_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x273AfbF6E257aae160749a61D4b83E06A841c3eB",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_mask_700_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x273AfbF6E257aae160749a61D4b83E06A841c3eB",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_mask_700_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x273AfbF6E257aae160749a61D4b83E06A841c3eB",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_mask_700_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x273AfbF6E257aae160749a61D4b83E06A841c3eB",
      tokens: [
        "0x513d29D2b296a51b40A35C4d63884E0AC0a8D075",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_punk-basic_10000_dai_2021_4_30_rc_punk-basic_10000_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xfB51e37CebC5D6f1569004206629BB7e47b6843f",
      tokens: ["0x4616638bB5688673452FDfDAF3F7711D0722d96D"],
    },
    "dai_rc_punk-basic_10000_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xfB51e37CebC5D6f1569004206629BB7e47b6843f",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_punk-basic_10000_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xfB51e37CebC5D6f1569004206629BB7e47b6843f",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_punk-basic_10000_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xfB51e37CebC5D6f1569004206629BB7e47b6843f",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_punk-basic_10000_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xfB51e37CebC5D6f1569004206629BB7e47b6843f",
      tokens: [
        "0x4616638bB5688673452FDfDAF3F7711D0722d96D",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "fei_fei+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x152d13e62952a7c74c536bb3C8b7BD91853F076A",
      tokens: ["0x956F47F50A910163D8BF957Cf5846D573E7f87CA"],
    },
    "dai_fei+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x152d13e62952a7c74c536bb3C8b7BD91853F076A",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_fei+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x152d13e62952a7c74c536bb3C8b7BD91853F076A",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_fei+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x152d13e62952a7c74c536bb3C8b7BD91853F076A",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "fei+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x152d13e62952a7c74c536bb3C8b7BD91853F076A",
      tokens: [
        "0x956F47F50A910163D8BF957Cf5846D573E7f87CA",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "tribe_tribe+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xf01E56475ea4081e6640914b2310E1Aa8F09d2E1",
      tokens: ["0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B"],
    },
    "dai_tribe+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xf01E56475ea4081e6640914b2310E1Aa8F09d2E1",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_tribe+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xf01E56475ea4081e6640914b2310E1Aa8F09d2E1",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_tribe+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xf01E56475ea4081e6640914b2310E1Aa8F09d2E1",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "tribe+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xf01E56475ea4081e6640914b2310E1Aa8F09d2E1",
      tokens: [
        "0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_defi5_60_dai_2021_4_30_rc_defi5_60_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xbe735E6dd6c47d86BF8510D3c36Cba1a359B8dDc",
      tokens: ["0x6A426a279380CaCc4428Db42b8F5C53A7Fd06662"],
    },
    "dai_rc_defi5_60_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xbe735E6dd6c47d86BF8510D3c36Cba1a359B8dDc",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_defi5_60_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xbe735E6dd6c47d86BF8510D3c36Cba1a359B8dDc",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_defi5_60_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xbe735E6dd6c47d86BF8510D3c36Cba1a359B8dDc",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_defi5_60_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xbe735E6dd6c47d86BF8510D3c36Cba1a359B8dDc",
      tokens: [
        "0x6A426a279380CaCc4428Db42b8F5C53A7Fd06662",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "1-rc_weth_1650_dai_2021_4_30_rc_weth_1650_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xd97f71Bc0Ecb40B105dBACF5225d847d9c2334F8",
      tokens: ["0x810c4b2A31665ef77b75D2410ACeb29F0F099096"],
    },
    "1-dai_rc_weth_1650_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xd97f71Bc0Ecb40B105dBACF5225d847d9c2334F8",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "1-usdc_rc_weth_1650_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xd97f71Bc0Ecb40B105dBACF5225d847d9c2334F8",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "1-usdt_rc_weth_1650_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xd97f71Bc0Ecb40B105dBACF5225d847d9c2334F8",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "1-rc_weth_1650_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xd97f71Bc0Ecb40B105dBACF5225d847d9c2334F8",
      tokens: [
        "0x810c4b2A31665ef77b75D2410ACeb29F0F099096",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "2-rc_weth_1650_dai_2021_4_30_rc_weth_1650_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x2009f19A8B46642E92Ea19adCdFB23ab05fC20A6",
      tokens: ["0x810c4b2A31665ef77b75D2410ACeb29F0F099096"],
    },
    "2-dai_rc_weth_1650_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x2009f19A8B46642E92Ea19adCdFB23ab05fC20A6",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "2-usdc_rc_weth_1650_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x2009f19A8B46642E92Ea19adCdFB23ab05fC20A6",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "2-usdt_rc_weth_1650_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x2009f19A8B46642E92Ea19adCdFB23ab05fC20A6",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "2-rc_weth_1650_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x2009f19A8B46642E92Ea19adCdFB23ab05fC20A6",
      tokens: [
        "0x810c4b2A31665ef77b75D2410ACeb29F0F099096",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "lusd_lusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA",
      tokens: ["0x5f98805A4E8be255a32880FDeC7F6728C6568bA0"],
    },
    "dai_lusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_lusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_lusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "lusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA",
      tokens: [
        "0x5f98805A4E8be255a32880FDeC7F6728C6568bA0",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_fei_0.4_dai_2021_4_30_rc_fei_0.4_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xA46649Ffe1860d79DBE777930aF8e802B8b48AC4",
      tokens: ["0x18880A0cb468Fc76eD63E023A0a510E9fB9FBd2f"],
    },
    "dai_rc_fei_0.4_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xA46649Ffe1860d79DBE777930aF8e802B8b48AC4",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_fei_0.4_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xA46649Ffe1860d79DBE777930aF8e802B8b48AC4",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_fei_0.4_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xA46649Ffe1860d79DBE777930aF8e802B8b48AC4",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_fei_0.4_dai_2021_4_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xA46649Ffe1860d79DBE777930aF8e802B8b48AC4",
      tokens: [
        "0x18880A0cb468Fc76eD63E023A0a510E9fB9FBd2f",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "busd_busd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x4807862AA8b2bF68830e4C8dc86D0e9A998e085a",
      tokens: ["0x4Fabb145d64652a948d72533023f6E7A623C7C53"],
    },
    "dai_busd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x4807862AA8b2bF68830e4C8dc86D0e9A998e085a",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_busd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x4807862AA8b2bF68830e4C8dc86D0e9A998e085a",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_busd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x4807862AA8b2bF68830e4C8dc86D0e9A998e085a",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "busd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x4807862AA8b2bF68830e4C8dc86D0e9A998e085a",
      tokens: [
        "0x4Fabb145d64652a948d72533023f6E7A623C7C53",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "1-vbtc_vbtc+renbtc+wbtc+sbtc": {
      pool: "0x7AbDBAf29929e7F8621B757D2a7c04d78d633834",
      lpToken: "0x87ca9AC842905628A83df72a23aa480091BB682e",
      tokens: ["0xe1406825186D63980fd6e2eC61888f7B91C4bAe4"],
    },
    "1-renbtc_vbtc+renbtc+wbtc+sbtc": {
      pool: "0x7AbDBAf29929e7F8621B757D2a7c04d78d633834",
      lpToken: "0x87ca9AC842905628A83df72a23aa480091BB682e",
      tokens: ["0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D"],
    },
    "1-wbtc_vbtc+renbtc+wbtc+sbtc": {
      pool: "0x7AbDBAf29929e7F8621B757D2a7c04d78d633834",
      lpToken: "0x87ca9AC842905628A83df72a23aa480091BB682e",
      tokens: ["0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599"],
    },
    "1-sbtc_vbtc+renbtc+wbtc+sbtc": {
      pool: "0x7AbDBAf29929e7F8621B757D2a7c04d78d633834",
      lpToken: "0x87ca9AC842905628A83df72a23aa480091BB682e",
      tokens: ["0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6"],
    },
    "1-vbtc+renbtc+wbtc+sbtc": {
      pool: "0x7AbDBAf29929e7F8621B757D2a7c04d78d633834",
      lpToken: "0x87ca9AC842905628A83df72a23aa480091BB682e",
      tokens: [
        "0xe1406825186D63980fd6e2eC61888f7B91C4bAe4",
        "0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D",
        "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
        "0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6",
      ],
    },
    "rc_xruler_250_dai_2021_5_31_rc_xruler_250_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x51714B15aB2C2172914A005f4f2889f16Af7003c",
      tokens: ["0x751aF265374df8eB065e1dBD8132E7eB7E97A7D0"],
    },
    "dai_rc_xruler_250_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x51714B15aB2C2172914A005f4f2889f16Af7003c",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_xruler_250_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x51714B15aB2C2172914A005f4f2889f16Af7003c",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_xruler_250_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x51714B15aB2C2172914A005f4f2889f16Af7003c",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_xruler_250_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x51714B15aB2C2172914A005f4f2889f16Af7003c",
      tokens: [
        "0x751aF265374df8eB065e1dBD8132E7eB7E97A7D0",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_aave_300_dai_2021_5_31_rc_aave_300_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x92719D8b48795CBccD7eC68114ea7a2Db8065140",
      tokens: ["0x6CD591Ff4148C6eDefCAb97925113c040728aFAb"],
    },
    "dai_rc_aave_300_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x92719D8b48795CBccD7eC68114ea7a2Db8065140",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_aave_300_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x92719D8b48795CBccD7eC68114ea7a2Db8065140",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_aave_300_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x92719D8b48795CBccD7eC68114ea7a2Db8065140",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_aave_300_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x92719D8b48795CBccD7eC68114ea7a2Db8065140",
      tokens: [
        "0x6CD591Ff4148C6eDefCAb97925113c040728aFAb",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_comp_350_dai_2021_5_31_rc_comp_350_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xf5C511E559342087d30a793705228bFEB881c325",
      tokens: ["0xF35A04a8D018c49153f6163C03F8153dA8b6e23d"],
    },
    "dai_rc_comp_350_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xf5C511E559342087d30a793705228bFEB881c325",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_comp_350_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xf5C511E559342087d30a793705228bFEB881c325",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_comp_350_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xf5C511E559342087d30a793705228bFEB881c325",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_comp_350_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xf5C511E559342087d30a793705228bFEB881c325",
      tokens: [
        "0xF35A04a8D018c49153f6163C03F8153dA8b6e23d",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_xpremia_0.4_dai_2021_5_31_rc_xpremia_0.4_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xB0c6CE798da73F455c2ac4d669C9F4106c251193",
      tokens: ["0xD6f22f71399104CEd96054E7Cab0A76926c413a6"],
    },
    "dai_rc_xpremia_0.4_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xB0c6CE798da73F455c2ac4d669C9F4106c251193",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_xpremia_0.4_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xB0c6CE798da73F455c2ac4d669C9F4106c251193",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_xpremia_0.4_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xB0c6CE798da73F455c2ac4d669C9F4106c251193",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_xpremia_0.4_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xB0c6CE798da73F455c2ac4d669C9F4106c251193",
      tokens: [
        "0xD6f22f71399104CEd96054E7Cab0A76926c413a6",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "2-vbtc_vbtc+renbtc+wbtc+sbtc": {
      pool: "0x7AbDBAf29929e7F8621B757D2a7c04d78d633834",
      lpToken: "0xdCB5BE55674ceC407D8A6D28aE2098FEdDf2c296",
      tokens: ["0xe1406825186D63980fd6e2eC61888f7B91C4bAe4"],
    },
    "2-renbtc_vbtc+renbtc+wbtc+sbtc": {
      pool: "0x7AbDBAf29929e7F8621B757D2a7c04d78d633834",
      lpToken: "0xdCB5BE55674ceC407D8A6D28aE2098FEdDf2c296",
      tokens: ["0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D"],
    },
    "2-wbtc_vbtc+renbtc+wbtc+sbtc": {
      pool: "0x7AbDBAf29929e7F8621B757D2a7c04d78d633834",
      lpToken: "0xdCB5BE55674ceC407D8A6D28aE2098FEdDf2c296",
      tokens: ["0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599"],
    },
    "2-sbtc_vbtc+renbtc+wbtc+sbtc": {
      pool: "0x7AbDBAf29929e7F8621B757D2a7c04d78d633834",
      lpToken: "0xdCB5BE55674ceC407D8A6D28aE2098FEdDf2c296",
      tokens: ["0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6"],
    },
    "2-vbtc+renbtc+wbtc+sbtc": {
      pool: "0x7AbDBAf29929e7F8621B757D2a7c04d78d633834",
      lpToken: "0xdCB5BE55674ceC407D8A6D28aE2098FEdDf2c296",
      tokens: [
        "0xe1406825186D63980fd6e2eC61888f7B91C4bAe4",
        "0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D",
        "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
        "0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6",
      ],
    },
    "rc_alcx_700_dai_2021_5_31_rc_alcx_700_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xcf2be480d37777E6eE846e935E57Aaae1fd466F4",
      tokens: ["0x02355248C6bfE873D6e3d82cdc6E1fE54a63627a"],
    },
    "dai_rc_alcx_700_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xcf2be480d37777E6eE846e935E57Aaae1fd466F4",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_alcx_700_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xcf2be480d37777E6eE846e935E57Aaae1fd466F4",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_alcx_700_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xcf2be480d37777E6eE846e935E57Aaae1fd466F4",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_alcx_700_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xcf2be480d37777E6eE846e935E57Aaae1fd466F4",
      tokens: [
        "0x02355248C6bfE873D6e3d82cdc6E1fE54a63627a",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_oltc_140_dai_2021_5_31_rc_oltc_140_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xf5E2e90952d3Bdf8e9ACA1Fb38Fa195F0A108a9D",
      tokens: ["0x96f2ed52824863F9b85A5231b81dAfCB066695c9"],
    },
    "dai_rc_oltc_140_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xf5E2e90952d3Bdf8e9ACA1Fb38Fa195F0A108a9D",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_oltc_140_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xf5E2e90952d3Bdf8e9ACA1Fb38Fa195F0A108a9D",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_oltc_140_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xf5E2e90952d3Bdf8e9ACA1Fb38Fa195F0A108a9D",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_oltc_140_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xf5E2e90952d3Bdf8e9ACA1Fb38Fa195F0A108a9D",
      tokens: [
        "0x96f2ed52824863F9b85A5231b81dAfCB066695c9",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_wbtc_32000_dai_2021_5_31_rc_wbtc_32000_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xda3B4449E055C76a740dC5796aFC7bE2A535a70F",
      tokens: ["0xf74aF96Eb48A3146e16b33c32837900A1bE7fA40"],
    },
    "dai_rc_wbtc_32000_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xda3B4449E055C76a740dC5796aFC7bE2A535a70F",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_wbtc_32000_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xda3B4449E055C76a740dC5796aFC7bE2A535a70F",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_wbtc_32000_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xda3B4449E055C76a740dC5796aFC7bE2A535a70F",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_wbtc_32000_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xda3B4449E055C76a740dC5796aFC7bE2A535a70F",
      tokens: [
        "0xf74aF96Eb48A3146e16b33c32837900A1bE7fA40",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_weth_1600_dai_2021_5_31_rc_weth_1600_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x1E20205cd346CD8e5FcA92fCEa34Ead4057e4AE5",
      tokens: ["0xAe6d35c25bFc72ab3366AF415cA8EFF93e487f24"],
    },
    "dai_rc_weth_1600_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x1E20205cd346CD8e5FcA92fCEa34Ead4057e4AE5",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_weth_1600_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x1E20205cd346CD8e5FcA92fCEa34Ead4057e4AE5",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_weth_1600_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x1E20205cd346CD8e5FcA92fCEa34Ead4057e4AE5",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_weth_1600_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x1E20205cd346CD8e5FcA92fCEa34Ead4057e4AE5",
      tokens: [
        "0xAe6d35c25bFc72ab3366AF415cA8EFF93e487f24",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_xcover_260_dai_2021_5_31_rc_xcover_260_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x11fbFe3a6c183Dcd6Fd9BaA42Fe39206174a6C00",
      tokens: ["0xFC96d415D59614B5200652427bb8b24Eb52341c3"],
    },
    "dai_rc_xcover_260_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x11fbFe3a6c183Dcd6Fd9BaA42Fe39206174a6C00",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_xcover_260_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x11fbFe3a6c183Dcd6Fd9BaA42Fe39206174a6C00",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_xcover_260_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x11fbFe3a6c183Dcd6Fd9BaA42Fe39206174a6C00",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_xcover_260_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x11fbFe3a6c183Dcd6Fd9BaA42Fe39206174a6C00",
      tokens: [
        "0xFC96d415D59614B5200652427bb8b24Eb52341c3",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_xruler_150_dai_2021_5_31_rc_xruler_150_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xF9ef8A8dE38ceA3196a4E009aD7A7aF6F5A3d776",
      tokens: ["0xA6f69cD607e4AFe5117bFf03ea8C7d677944dfdB"],
    },
    "dai_rc_xruler_150_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xF9ef8A8dE38ceA3196a4E009aD7A7aF6F5A3d776",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_xruler_150_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xF9ef8A8dE38ceA3196a4E009aD7A7aF6F5A3d776",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_xruler_150_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xF9ef8A8dE38ceA3196a4E009aD7A7aF6F5A3d776",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_xruler_150_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xF9ef8A8dE38ceA3196a4E009aD7A7aF6F5A3d776",
      tokens: [
        "0xA6f69cD607e4AFe5117bFf03ea8C7d677944dfdB",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_bbadger_17_dai_2021_5_31_rc_bbadger_17_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x9d7ee35a38952bd5Ad36dB0BF435a298363ac1Aa",
      tokens: ["0x38D0665172F1167FD6C3240a01c6158f1FBE0D41"],
    },
    "dai_rc_bbadger_17_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x9d7ee35a38952bd5Ad36dB0BF435a298363ac1Aa",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_bbadger_17_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x9d7ee35a38952bd5Ad36dB0BF435a298363ac1Aa",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_bbadger_17_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x9d7ee35a38952bd5Ad36dB0BF435a298363ac1Aa",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_bbadger_17_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x9d7ee35a38952bd5Ad36dB0BF435a298363ac1Aa",
      tokens: [
        "0x38D0665172F1167FD6C3240a01c6158f1FBE0D41",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_xsushi_7_dai_2021_5_31_rc_xsushi_7_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x4EB0Bb03A246b955D36316a96BE314885c23a1B0",
      tokens: ["0x2c448ACd9E04d34fe74059e3748287390e9BDDa9"],
    },
    "dai_rc_xsushi_7_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x4EB0Bb03A246b955D36316a96BE314885c23a1B0",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_xsushi_7_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x4EB0Bb03A246b955D36316a96BE314885c23a1B0",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_xsushi_7_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x4EB0Bb03A246b955D36316a96BE314885c23a1B0",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_xsushi_7_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x4EB0Bb03A246b955D36316a96BE314885c23a1B0",
      tokens: [
        "0x2c448ACd9E04d34fe74059e3748287390e9BDDa9",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_weth_1900_dai_2021_5_31_rc_weth_1900_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xDa3028f415374dE92cD5A7C64F865a6B1AAbf804",
      tokens: ["0xE44c86C6d52773175D5f6f1Fa97219d21F09E0d5"],
    },
    "dai_rc_weth_1900_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xDa3028f415374dE92cD5A7C64F865a6B1AAbf804",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_weth_1900_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xDa3028f415374dE92cD5A7C64F865a6B1AAbf804",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_weth_1900_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xDa3028f415374dE92cD5A7C64F865a6B1AAbf804",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_weth_1900_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xDa3028f415374dE92cD5A7C64F865a6B1AAbf804",
      tokens: [
        "0xE44c86C6d52773175D5f6f1Fa97219d21F09E0d5",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_defi5_60_dai_2021_5_31_rc_defi5_60_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x0750da0ED0a4448eD516c326d702e7Fee88F4aD9",
      tokens: ["0x753724342046c366A05675a9bcF7083F1DE21c5c"],
    },
    "dai_rc_defi5_60_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x0750da0ED0a4448eD516c326d702e7Fee88F4aD9",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_defi5_60_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x0750da0ED0a4448eD516c326d702e7Fee88F4aD9",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_defi5_60_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x0750da0ED0a4448eD516c326d702e7Fee88F4aD9",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_defi5_60_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x0750da0ED0a4448eD516c326d702e7Fee88F4aD9",
      tokens: [
        "0x753724342046c366A05675a9bcF7083F1DE21c5c",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_bor_330_dai_2021_5_31_rc_bor_330_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xe69fC18b2252f5c3Cf8b8C35CE06AF0Bb461d476",
      tokens: ["0xd59108fF65cD7C1AEf309fc92E8706746E80c09A"],
    },
    "dai_rc_bor_330_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xe69fC18b2252f5c3Cf8b8C35CE06AF0Bb461d476",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_bor_330_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xe69fC18b2252f5c3Cf8b8C35CE06AF0Bb461d476",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_bor_330_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xe69fC18b2252f5c3Cf8b8C35CE06AF0Bb461d476",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_bor_330_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xe69fC18b2252f5c3Cf8b8C35CE06AF0Bb461d476",
      tokens: [
        "0xd59108fF65cD7C1AEf309fc92E8706746E80c09A",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_veth2_1200_dai_2021_5_31_rc_veth2_1200_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x3c7Ac391Ad242c7C2Cfbf004ed72C0bDf9d620cc",
      tokens: ["0x8cC2eAD1457Af98dfb2c811bF6D01C2560ef40cc"],
    },
    "dai_rc_veth2_1200_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x3c7Ac391Ad242c7C2Cfbf004ed72C0bDf9d620cc",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_veth2_1200_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x3c7Ac391Ad242c7C2Cfbf004ed72C0bDf9d620cc",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_veth2_1200_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x3c7Ac391Ad242c7C2Cfbf004ed72C0bDf9d620cc",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_veth2_1200_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x3c7Ac391Ad242c7C2Cfbf004ed72C0bDf9d620cc",
      tokens: [
        "0x8cC2eAD1457Af98dfb2c811bF6D01C2560ef40cc",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_inv_350_dai_2021_5_31_rc_inv_350_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x883F7d4B6B24F8BF1dB980951Ad08930D9AEC6Bc",
      tokens: ["0x3fa372155439e9150a99D86A1de93a92F26b00C8"],
    },
    "dai_rc_inv_350_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x883F7d4B6B24F8BF1dB980951Ad08930D9AEC6Bc",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_inv_350_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x883F7d4B6B24F8BF1dB980951Ad08930D9AEC6Bc",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_inv_350_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x883F7d4B6B24F8BF1dB980951Ad08930D9AEC6Bc",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_inv_350_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x883F7d4B6B24F8BF1dB980951Ad08930D9AEC6Bc",
      tokens: [
        "0x3fa372155439e9150a99D86A1de93a92F26b00C8",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_vvsp_25_dai_2021_5_31_rc_vvsp_25_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xD5c91b8161924F389A33E97FC8624431a53858F5",
      tokens: ["0x1f2930909396b40EF7B64afF8f148430B344e428"],
    },
    "dai_rc_vvsp_25_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xD5c91b8161924F389A33E97FC8624431a53858F5",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_vvsp_25_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xD5c91b8161924F389A33E97FC8624431a53858F5",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_vvsp_25_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xD5c91b8161924F389A33E97FC8624431a53858F5",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_vvsp_25_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xD5c91b8161924F389A33E97FC8624431a53858F5",
      tokens: [
        "0x1f2930909396b40EF7B64afF8f148430B344e428",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_ifarm_110_dai_2021_5_31_rc_ifarm_110_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xDD577F3c26e322d6e790947D5e56362c3F99Cc6d",
      tokens: ["0x3A200791aa0642e6Ba1AF118AAc46b34c24c91Bf"],
    },
    "dai_rc_ifarm_110_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xDD577F3c26e322d6e790947D5e56362c3F99Cc6d",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_ifarm_110_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xDD577F3c26e322d6e790947D5e56362c3F99Cc6d",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_ifarm_110_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xDD577F3c26e322d6e790947D5e56362c3F99Cc6d",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_ifarm_110_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xDD577F3c26e322d6e790947D5e56362c3F99Cc6d",
      tokens: [
        "0x3A200791aa0642e6Ba1AF118AAc46b34c24c91Bf",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_yvyfi_25000_dai_2021_5_31_rc_yvyfi_25000_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x9231dfF16BE1020dcE7dd6F48d565FDA123c11C8",
      tokens: ["0x5882ab1ab5DA409eD3ba48dce3684824B642C8CB"],
    },
    "dai_rc_yvyfi_25000_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x9231dfF16BE1020dcE7dd6F48d565FDA123c11C8",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_yvyfi_25000_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x9231dfF16BE1020dcE7dd6F48d565FDA123c11C8",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_yvyfi_25000_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x9231dfF16BE1020dcE7dd6F48d565FDA123c11C8",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_yvyfi_25000_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x9231dfF16BE1020dcE7dd6F48d565FDA123c11C8",
      tokens: [
        "0x5882ab1ab5DA409eD3ba48dce3684824B642C8CB",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_rai_2_dai_2021_5_31_rc_rai_2_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xAf7c2Fb62ea78Bd5bE98F716de55B480C354f17B",
      tokens: ["0xdfb2c2222B305eFCa2E414083CF42318D442aB9F"],
    },
    "dai_rc_rai_2_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xAf7c2Fb62ea78Bd5bE98F716de55B480C354f17B",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_rai_2_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xAf7c2Fb62ea78Bd5bE98F716de55B480C354f17B",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_rai_2_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xAf7c2Fb62ea78Bd5bE98F716de55B480C354f17B",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_rai_2_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xAf7c2Fb62ea78Bd5bE98F716de55B480C354f17B",
      tokens: [
        "0xdfb2c2222B305eFCa2E414083CF42318D442aB9F",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_bdpi_350_dai_2021_5_31_rc_bdpi_350_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x5c277D5CC9b258Ca957FF83Ec41d153c4DF7619A",
      tokens: ["0xa839D74FE0E456c8fCd4d9bb8759861aFcBbD1CE"],
    },
    "dai_rc_bdpi_350_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x5c277D5CC9b258Ca957FF83Ec41d153c4DF7619A",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_bdpi_350_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x5c277D5CC9b258Ca957FF83Ec41d153c4DF7619A",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_bdpi_350_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x5c277D5CC9b258Ca957FF83Ec41d153c4DF7619A",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_bdpi_350_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x5c277D5CC9b258Ca957FF83Ec41d153c4DF7619A",
      tokens: [
        "0xa839D74FE0E456c8fCd4d9bb8759861aFcBbD1CE",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_pickle_7_dai_2021_5_31_rc_pickle_7_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x3EaC18b3e7A4663d38cb6EDB6024cad9d5E76a49",
      tokens: ["0x2EA853fd316A3D6E400bc688ad4a8f61eFAAb322"],
    },
    "dai_rc_pickle_7_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x3EaC18b3e7A4663d38cb6EDB6024cad9d5E76a49",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_pickle_7_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x3EaC18b3e7A4663d38cb6EDB6024cad9d5E76a49",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_pickle_7_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x3EaC18b3e7A4663d38cb6EDB6024cad9d5E76a49",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_pickle_7_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x3EaC18b3e7A4663d38cb6EDB6024cad9d5E76a49",
      tokens: [
        "0x2EA853fd316A3D6E400bc688ad4a8f61eFAAb322",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "opium_lp_af0d_opium_lp_af0d+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x6448113F6c31F738B7c6b24c1b4A1Cf23c6133f2",
      tokens: ["0xb54539D39529cE58fB63877DEbC6d6b70E3ecA01"],
    },
    "dai_opium_lp_af0d+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x6448113F6c31F738B7c6b24c1b4A1Cf23c6133f2",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_opium_lp_af0d+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x6448113F6c31F738B7c6b24c1b4A1Cf23c6133f2",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_opium_lp_af0d+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x6448113F6c31F738B7c6b24c1b4A1Cf23c6133f2",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "opium_lp_af0d+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x6448113F6c31F738B7c6b24c1b4A1Cf23c6133f2",
      tokens: [
        "0xb54539D39529cE58fB63877DEbC6d6b70E3ecA01",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "crylyl_crylyl+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xE75916b70c0E1C58bB605948066151EA449561F4",
      tokens: ["0xeD86b7Ce1924c6AceF801EDd87BDA29E486A16EA"],
    },
    "dai_crylyl+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xE75916b70c0E1C58bB605948066151EA449561F4",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_crylyl+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xE75916b70c0E1C58bB605948066151EA449561F4",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_crylyl+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xE75916b70c0E1C58bB605948066151EA449561F4",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "crylyl+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xE75916b70c0E1C58bB605948066151EA449561F4",
      tokens: [
        "0xeD86b7Ce1924c6AceF801EDd87BDA29E486A16EA",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "opium_lp_1c60_opium_lp_1c60+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x5400234516485A8e474A6f1c34DBed940a1A866E",
      tokens: ["0x0cAb5A7dCAb521aF5404Fa604b85113267d38444"],
    },
    "dai_opium_lp_1c60+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x5400234516485A8e474A6f1c34DBed940a1A866E",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_opium_lp_1c60+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x5400234516485A8e474A6f1c34DBed940a1A866E",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_opium_lp_1c60+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x5400234516485A8e474A6f1c34DBed940a1A866E",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "opium_lp_1c60+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x5400234516485A8e474A6f1c34DBed940a1A866E",
      tokens: [
        "0x0cAb5A7dCAb521aF5404Fa604b85113267d38444",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_armor_0.35_dai_2021_5_31_rc_armor_0.35_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x1E556F647f79e734530F2B354FBf339553fB1f6E",
      tokens: ["0x4491BA118C7C358817B6b453eE329A02E93012Bc"],
    },
    "dai_rc_armor_0.35_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x1E556F647f79e734530F2B354FBf339553fB1f6E",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_armor_0.35_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x1E556F647f79e734530F2B354FBf339553fB1f6E",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_armor_0.35_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x1E556F647f79e734530F2B354FBf339553fB1f6E",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_armor_0.35_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x1E556F647f79e734530F2B354FBf339553fB1f6E",
      tokens: [
        "0x4491BA118C7C358817B6b453eE329A02E93012Bc",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_exrd_0.06_dai_2021_5_31_rc_exrd_0.06_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xC55834C9cDf6e92e0ceB181fd07f6243eAC0f598",
      tokens: ["0x54DE230ff753be1E2313Fa567cb22F7d5FAe80D9"],
    },
    "dai_rc_exrd_0.06_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xC55834C9cDf6e92e0ceB181fd07f6243eAC0f598",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_exrd_0.06_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xC55834C9cDf6e92e0ceB181fd07f6243eAC0f598",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_exrd_0.06_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xC55834C9cDf6e92e0ceB181fd07f6243eAC0f598",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_exrd_0.06_dai_2021_5_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xC55834C9cDf6e92e0ceB181fd07f6243eAC0f598",
      tokens: [
        "0x54DE230ff753be1E2313Fa567cb22F7d5FAe80D9",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "curvebtc+_curvebtc++renbtc+wbtc+sbtc": {
      pool: "0x7AbDBAf29929e7F8621B757D2a7c04d78d633834",
      lpToken: "0xf6b657Cb19A4cB2AF427D50F3054104871100D52",
      tokens: ["0xDe79d36aB6D2489dd36729A657a25f299Cb2Fbca"],
    },
    "renbtc_curvebtc++renbtc+wbtc+sbtc": {
      pool: "0x7AbDBAf29929e7F8621B757D2a7c04d78d633834",
      lpToken: "0xf6b657Cb19A4cB2AF427D50F3054104871100D52",
      tokens: ["0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D"],
    },
    "wbtc_curvebtc++renbtc+wbtc+sbtc": {
      pool: "0x7AbDBAf29929e7F8621B757D2a7c04d78d633834",
      lpToken: "0xf6b657Cb19A4cB2AF427D50F3054104871100D52",
      tokens: ["0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599"],
    },
    "sbtc_curvebtc++renbtc+wbtc+sbtc": {
      pool: "0x7AbDBAf29929e7F8621B757D2a7c04d78d633834",
      lpToken: "0xf6b657Cb19A4cB2AF427D50F3054104871100D52",
      tokens: ["0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6"],
    },
    "curvebtc++renbtc+wbtc+sbtc": {
      pool: "0x7AbDBAf29929e7F8621B757D2a7c04d78d633834",
      lpToken: "0xf6b657Cb19A4cB2AF427D50F3054104871100D52",
      tokens: [
        "0xDe79d36aB6D2489dd36729A657a25f299Cb2Fbca",
        "0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D",
        "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
        "0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6",
      ],
    },
    "rc_weth_2000_dai_2021_6_30_rc_weth_2000_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x56680FDEbDd3e31f79938fa1222bFea4706a0758",
      tokens: ["0xF3d948CEA0FaDd9Bfc63745F8469922184910a5E"],
    },
    "dai_rc_weth_2000_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x56680FDEbDd3e31f79938fa1222bFea4706a0758",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_weth_2000_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x56680FDEbDd3e31f79938fa1222bFea4706a0758",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_weth_2000_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x56680FDEbDd3e31f79938fa1222bFea4706a0758",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_weth_2000_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x56680FDEbDd3e31f79938fa1222bFea4706a0758",
      tokens: [
        "0xF3d948CEA0FaDd9Bfc63745F8469922184910a5E",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_weth_1400_dai_2021_7_31_rc_weth_1400_dai_2021_7_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x0212133321479B183637e52942564162bCc37C1D",
      tokens: ["0xf006f6898A814d498927524e7a9745ec05fEE18a"],
    },
    "dai_rc_weth_1400_dai_2021_7_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x0212133321479B183637e52942564162bCc37C1D",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_weth_1400_dai_2021_7_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x0212133321479B183637e52942564162bCc37C1D",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_weth_1400_dai_2021_7_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x0212133321479B183637e52942564162bCc37C1D",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_weth_1400_dai_2021_7_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x0212133321479B183637e52942564162bCc37C1D",
      tokens: [
        "0xf006f6898A814d498927524e7a9745ec05fEE18a",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_wbtc_22000_dai_2021_7_31_rc_wbtc_22000_dai_2021_7_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x8e49801018361aBb1EDe67D5B12907A5F895C623",
      tokens: ["0x79519Ae4bdA45252E23eA84f48F2447b768f5193"],
    },
    "dai_rc_wbtc_22000_dai_2021_7_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x8e49801018361aBb1EDe67D5B12907A5F895C623",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_wbtc_22000_dai_2021_7_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x8e49801018361aBb1EDe67D5B12907A5F895C623",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_wbtc_22000_dai_2021_7_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x8e49801018361aBb1EDe67D5B12907A5F895C623",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_wbtc_22000_dai_2021_7_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x8e49801018361aBb1EDe67D5B12907A5F895C623",
      tokens: [
        "0x79519Ae4bdA45252E23eA84f48F2447b768f5193",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_xruler_15_dai_2021_6_30_rc_xruler_15_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x46f5ab27914A670CFE260A2DEDb87f84c264835f",
      tokens: ["0xe7D18f2507869280111025F4938376846e8ad11A"],
    },
    "dai_rc_xruler_15_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x46f5ab27914A670CFE260A2DEDb87f84c264835f",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_xruler_15_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x46f5ab27914A670CFE260A2DEDb87f84c264835f",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_xruler_15_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x46f5ab27914A670CFE260A2DEDb87f84c264835f",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_xruler_15_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x46f5ab27914A670CFE260A2DEDb87f84c264835f",
      tokens: [
        "0xe7D18f2507869280111025F4938376846e8ad11A",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_xcover_100_dai_2021_6_30_rc_xcover_100_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x2206cF41E7Db9393a3BcbB6Ad35d344811523b46",
      tokens: ["0xB556Bb40E40f4AF34d9eea04d2fF7DB2674939BB"],
    },
    "dai_rc_xcover_100_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x2206cF41E7Db9393a3BcbB6Ad35d344811523b46",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_xcover_100_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x2206cF41E7Db9393a3BcbB6Ad35d344811523b46",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_xcover_100_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x2206cF41E7Db9393a3BcbB6Ad35d344811523b46",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_xcover_100_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x2206cF41E7Db9393a3BcbB6Ad35d344811523b46",
      tokens: [
        "0xB556Bb40E40f4AF34d9eea04d2fF7DB2674939BB",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_veth2_1300_dai_2021_6_30_rc_veth2_1300_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xC3134cCB0810418Dcc2540c7df6E4995a9966d4e",
      tokens: ["0x3143C25447a589e7Bb0DBec4bA8FcFEB9FC11150"],
    },
    "dai_rc_veth2_1300_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xC3134cCB0810418Dcc2540c7df6E4995a9966d4e",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_veth2_1300_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xC3134cCB0810418Dcc2540c7df6E4995a9966d4e",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_veth2_1300_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xC3134cCB0810418Dcc2540c7df6E4995a9966d4e",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_veth2_1300_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xC3134cCB0810418Dcc2540c7df6E4995a9966d4e",
      tokens: [
        "0x3143C25447a589e7Bb0DBec4bA8FcFEB9FC11150",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "1-rc_bbadger_5_dai_2021_6_30_rc_bbadger_5_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x0043Fcb34e7470130fDe28198571DeE092c70Bd7",
      tokens: ["0xa713Cc74eE148414bcAb46aC2c41c93D84A56B0f"],
    },
    "1-dai_rc_bbadger_5_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x0043Fcb34e7470130fDe28198571DeE092c70Bd7",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "1-usdc_rc_bbadger_5_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x0043Fcb34e7470130fDe28198571DeE092c70Bd7",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "1-usdt_rc_bbadger_5_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x0043Fcb34e7470130fDe28198571DeE092c70Bd7",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "1-rc_bbadger_5_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x0043Fcb34e7470130fDe28198571DeE092c70Bd7",
      tokens: [
        "0xa713Cc74eE148414bcAb46aC2c41c93D84A56B0f",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_alcx_300_dai_2021_6_30_rc_alcx_300_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x439bfaE666826a7cB73663E366c12f03d0A13B49",
      tokens: ["0x09c7A3ac261a45BE1A6B8D8502035F4491F644AE"],
    },
    "dai_rc_alcx_300_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x439bfaE666826a7cB73663E366c12f03d0A13B49",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_alcx_300_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x439bfaE666826a7cB73663E366c12f03d0A13B49",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_alcx_300_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x439bfaE666826a7cB73663E366c12f03d0A13B49",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_alcx_300_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x439bfaE666826a7cB73663E366c12f03d0A13B49",
      tokens: [
        "0x09c7A3ac261a45BE1A6B8D8502035F4491F644AE",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_ifarm_30_dai_2021_6_30_rc_ifarm_30_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xBc984294CedABE05d7317CC55BCdA241a7222615",
      tokens: ["0xa414B17cbaA24195547369d6afFe7fE1F642714A"],
    },
    "dai_rc_ifarm_30_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xBc984294CedABE05d7317CC55BCdA241a7222615",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_ifarm_30_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xBc984294CedABE05d7317CC55BCdA241a7222615",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_ifarm_30_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xBc984294CedABE05d7317CC55BCdA241a7222615",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_ifarm_30_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xBc984294CedABE05d7317CC55BCdA241a7222615",
      tokens: [
        "0xa414B17cbaA24195547369d6afFe7fE1F642714A",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_bdi_150_dai_2021_6_30_rc_bdi_150_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x0457E0ed628143b6A6A39f6e3458153f96abB26a",
      tokens: ["0xC2d0Deb48D30D196Db9867f5c263396D46a3A48E"],
    },
    "dai_rc_bdi_150_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x0457E0ed628143b6A6A39f6e3458153f96abB26a",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_bdi_150_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x0457E0ed628143b6A6A39f6e3458153f96abB26a",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_bdi_150_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x0457E0ed628143b6A6A39f6e3458153f96abB26a",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_bdi_150_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x0457E0ed628143b6A6A39f6e3458153f96abB26a",
      tokens: [
        "0xC2d0Deb48D30D196Db9867f5c263396D46a3A48E",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_armor_0.15_dai_2021_6_30_rc_armor_0.15_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x3c9aEEb08be0c10cA4135e981F2C73dF8a28F8a0",
      tokens: ["0x01880e5A97d827A2e77b3F2ca436a0A42FE2Dc19"],
    },
    "dai_rc_armor_0.15_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x3c9aEEb08be0c10cA4135e981F2C73dF8a28F8a0",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_armor_0.15_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x3c9aEEb08be0c10cA4135e981F2C73dF8a28F8a0",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_armor_0.15_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x3c9aEEb08be0c10cA4135e981F2C73dF8a28F8a0",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_armor_0.15_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x3c9aEEb08be0c10cA4135e981F2C73dF8a28F8a0",
      tokens: [
        "0x01880e5A97d827A2e77b3F2ca436a0A42FE2Dc19",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_exrd_0.04_dai_2021_6_30_rc_exrd_0.04_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xDc0b9c549809BD4BDe021BD35A99f612D472d827",
      tokens: ["0x496b33a6E22D2193360F462E326312260CbDEF08"],
    },
    "dai_rc_exrd_0.04_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xDc0b9c549809BD4BDe021BD35A99f612D472d827",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_exrd_0.04_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xDc0b9c549809BD4BDe021BD35A99f612D472d827",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_exrd_0.04_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xDc0b9c549809BD4BDe021BD35A99f612D472d827",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_exrd_0.04_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xDc0b9c549809BD4BDe021BD35A99f612D472d827",
      tokens: [
        "0x496b33a6E22D2193360F462E326312260CbDEF08",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_ibbtc_20000_dai_2021_6_30_rc_ibbtc_20000_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x8aEe2e72ff7e34fC15dcAD5BbAa6AB2dF1bdEb1c",
      tokens: ["0x2da36A502ed49cf2d550EDac6f6257252764FE04"],
    },
    "dai_rc_ibbtc_20000_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x8aEe2e72ff7e34fC15dcAD5BbAa6AB2dF1bdEb1c",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_ibbtc_20000_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x8aEe2e72ff7e34fC15dcAD5BbAa6AB2dF1bdEb1c",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_ibbtc_20000_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x8aEe2e72ff7e34fC15dcAD5BbAa6AB2dF1bdEb1c",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_ibbtc_20000_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x8aEe2e72ff7e34fC15dcAD5BbAa6AB2dF1bdEb1c",
      tokens: [
        "0x2da36A502ed49cf2d550EDac6f6257252764FE04",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_near_1.1_dai_2021_6_30_rc_near_1.1_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x620E3C54d8c6efCA7476D657c57dA5Eb144d3f81",
      tokens: ["0x738EA1263e70Dbbae98a6093113cB441e65EDA10"],
    },
    "dai_rc_near_1.1_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x620E3C54d8c6efCA7476D657c57dA5Eb144d3f81",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_near_1.1_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x620E3C54d8c6efCA7476D657c57dA5Eb144d3f81",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_near_1.1_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x620E3C54d8c6efCA7476D657c57dA5Eb144d3f81",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_near_1.1_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x620E3C54d8c6efCA7476D657c57dA5Eb144d3f81",
      tokens: [
        "0x738EA1263e70Dbbae98a6093113cB441e65EDA10",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "2-rc_bbadger_5_dai_2021_6_30_rc_bbadger_5_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x8B93c5727fF8c0e4CD16f8ae8dFe4DAc8730C4BE",
      tokens: ["0xa713Cc74eE148414bcAb46aC2c41c93D84A56B0f"],
    },
    "2-dai_rc_bbadger_5_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x8B93c5727fF8c0e4CD16f8ae8dFe4DAc8730C4BE",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "2-usdc_rc_bbadger_5_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x8B93c5727fF8c0e4CD16f8ae8dFe4DAc8730C4BE",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "2-usdt_rc_bbadger_5_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x8B93c5727fF8c0e4CD16f8ae8dFe4DAc8730C4BE",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "2-rc_bbadger_5_dai_2021_6_30+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x8B93c5727fF8c0e4CD16f8ae8dFe4DAc8730C4BE",
      tokens: [
        "0xa713Cc74eE148414bcAb46aC2c41c93D84A56B0f",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_vvsp_7_dai_2021_7_31_rc_vvsp_7_dai_2021_7_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xd752B367B1d5998446daA6E9Eb90d05D12d9f263",
      tokens: ["0xb0b806A39D838d6854DCF9927420830F7eE53259"],
    },
    "dai_rc_vvsp_7_dai_2021_7_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xd752B367B1d5998446daA6E9Eb90d05D12d9f263",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_vvsp_7_dai_2021_7_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xd752B367B1d5998446daA6E9Eb90d05D12d9f263",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_vvsp_7_dai_2021_7_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xd752B367B1d5998446daA6E9Eb90d05D12d9f263",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_vvsp_7_dai_2021_7_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xd752B367B1d5998446daA6E9Eb90d05D12d9f263",
      tokens: [
        "0xb0b806A39D838d6854DCF9927420830F7eE53259",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "mim_mim+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x5a6A4D54456819380173272A5E8E9B9904BdF41B",
      tokens: ["0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3"],
    },
    "dai_mim+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x5a6A4D54456819380173272A5E8E9B9904BdF41B",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_mim+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x5a6A4D54456819380173272A5E8E9B9904BdF41B",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_mim+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x5a6A4D54456819380173272A5E8E9B9904BdF41B",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "mim+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x5a6A4D54456819380173272A5E8E9B9904BdF41B",
      tokens: [
        "0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "uad_uad+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x20955CB69Ae1515962177D164dfC9522feef567E",
      tokens: ["0x0F644658510c95CB46955e55D7BA9DDa9E9fBEc6"],
    },
    "dai_uad+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x20955CB69Ae1515962177D164dfC9522feef567E",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_uad+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x20955CB69Ae1515962177D164dfC9522feef567E",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_uad+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x20955CB69Ae1515962177D164dfC9522feef567E",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "uad+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x20955CB69Ae1515962177D164dfC9522feef567E",
      tokens: [
        "0x0F644658510c95CB46955e55D7BA9DDa9E9fBEc6",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_inv_100_dai_2021_7_31_rc_inv_100_dai_2021_7_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xEAF21e096793d92A1028Bb6F2570846d79165B48",
      tokens: ["0xc8919A086f05A894d54D6BA945fA2ED24375d34f"],
    },
    "dai_rc_inv_100_dai_2021_7_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xEAF21e096793d92A1028Bb6F2570846d79165B48",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_inv_100_dai_2021_7_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xEAF21e096793d92A1028Bb6F2570846d79165B48",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_inv_100_dai_2021_7_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xEAF21e096793d92A1028Bb6F2570846d79165B48",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_inv_100_dai_2021_7_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xEAF21e096793d92A1028Bb6F2570846d79165B48",
      tokens: [
        "0xc8919A086f05A894d54D6BA945fA2ED24375d34f",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "kmxsushi/usdt-link_kmxsushi/usdt-link+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xF420cdabD89a40D98541df39014576CeAB01cdc7",
      tokens: ["0x17Fb5f39C55903DE60E63543067031cE2B2659EE"],
    },
    "dai_kmxsushi/usdt-link+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xF420cdabD89a40D98541df39014576CeAB01cdc7",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_kmxsushi/usdt-link+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xF420cdabD89a40D98541df39014576CeAB01cdc7",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_kmxsushi/usdt-link+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xF420cdabD89a40D98541df39014576CeAB01cdc7",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "kmxsushi/usdt-link+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xF420cdabD89a40D98541df39014576CeAB01cdc7",
      tokens: [
        "0x17Fb5f39C55903DE60E63543067031cE2B2659EE",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rusd_rusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xC3018Fc8B7aC3a01c1fAdb3292B50e6faC417486",
      tokens: ["0x9bB1B080b37b6f3FcD38b86b9dF04feef16E97B3"],
    },
    "dai_rusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xC3018Fc8B7aC3a01c1fAdb3292B50e6faC417486",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xC3018Fc8B7aC3a01c1fAdb3292B50e6faC417486",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xC3018Fc8B7aC3a01c1fAdb3292B50e6faC417486",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xC3018Fc8B7aC3a01c1fAdb3292B50e6faC417486",
      tokens: [
        "0x9bB1B080b37b6f3FcD38b86b9dF04feef16E97B3",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "vusd_vusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x4dF9E1A764Fb8Df1113EC02fc9dc75963395b508",
      tokens: ["0x677ddbd918637E5F2c79e164D402454dE7dA8619"],
    },
    "dai_vusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x4dF9E1A764Fb8Df1113EC02fc9dc75963395b508",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_vusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x4dF9E1A764Fb8Df1113EC02fc9dc75963395b508",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_vusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x4dF9E1A764Fb8Df1113EC02fc9dc75963395b508",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "vusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x4dF9E1A764Fb8Df1113EC02fc9dc75963395b508",
      tokens: [
        "0x677ddbd918637E5F2c79e164D402454dE7dA8619",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "bpf_bpf+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xeb20b6Dda329685863c7193d8C3b13D3DEf9a02F",
      tokens: ["0x5197FBE1a86679FF1360E27862BF88B0c5119BD8"],
    },
    "dai_bpf+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xeb20b6Dda329685863c7193d8C3b13D3DEf9a02F",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_bpf+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xeb20b6Dda329685863c7193d8C3b13D3DEf9a02F",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_bpf+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xeb20b6Dda329685863c7193d8C3b13D3DEf9a02F",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "bpf+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xeb20b6Dda329685863c7193d8C3b13D3DEf9a02F",
      tokens: [
        "0x5197FBE1a86679FF1360E27862BF88B0c5119BD8",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "xruler_xruler+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x3279827b8233Ab455ba6F6bcB9804ee601Bf725B",
      tokens: ["0x01F7Fd324b366380D2145Dfa6C7A76fdb75f17B9"],
    },
    "dai_xruler+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x3279827b8233Ab455ba6F6bcB9804ee601Bf725B",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_xruler+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x3279827b8233Ab455ba6F6bcB9804ee601Bf725B",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_xruler+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x3279827b8233Ab455ba6F6bcB9804ee601Bf725B",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "xruler+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x3279827b8233Ab455ba6F6bcB9804ee601Bf725B",
      tokens: [
        "0x01F7Fd324b366380D2145Dfa6C7A76fdb75f17B9",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "xcover_xcover+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x0c46aC7dC6a06Fa5de5a6e74c0726F96c0319900",
      tokens: ["0xa921392015eB37c5977c4Fd77E14DD568c59D5F8"],
    },
    "dai_xcover+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x0c46aC7dC6a06Fa5de5a6e74c0726F96c0319900",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_xcover+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x0c46aC7dC6a06Fa5de5a6e74c0726F96c0319900",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_xcover+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x0c46aC7dC6a06Fa5de5a6e74c0726F96c0319900",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "xcover+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x0c46aC7dC6a06Fa5de5a6e74c0726F96c0319900",
      tokens: [
        "0xa921392015eB37c5977c4Fd77E14DD568c59D5F8",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_xruler_12_dai_2021_7_31_rc_xruler_12_dai_2021_7_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x80Bb24b127b96f8C6637acF3BAcAE4F5F860F08c",
      tokens: ["0xd0F3063fBD4cE76bbc942f15B80Be8026Ea8FaCf"],
    },
    "dai_rc_xruler_12_dai_2021_7_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x80Bb24b127b96f8C6637acF3BAcAE4F5F860F08c",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_xruler_12_dai_2021_7_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x80Bb24b127b96f8C6637acF3BAcAE4F5F860F08c",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_xruler_12_dai_2021_7_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x80Bb24b127b96f8C6637acF3BAcAE4F5F860F08c",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_xruler_12_dai_2021_7_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x80Bb24b127b96f8C6637acF3BAcAE4F5F860F08c",
      tokens: [
        "0xd0F3063fBD4cE76bbc942f15B80Be8026Ea8FaCf",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_xcover_90_dai_2021_7_31_rc_xcover_90_dai_2021_7_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xfE97D8f55884186E50AeDba306Ad553911a26A24",
      tokens: ["0x4289C84AA79953c103Fe0767C3aFF26Ab28Cd723"],
    },
    "dai_rc_xcover_90_dai_2021_7_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xfE97D8f55884186E50AeDba306Ad553911a26A24",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_xcover_90_dai_2021_7_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xfE97D8f55884186E50AeDba306Ad553911a26A24",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_xcover_90_dai_2021_7_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xfE97D8f55884186E50AeDba306Ad553911a26A24",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_xcover_90_dai_2021_7_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0xfE97D8f55884186E50AeDba306Ad553911a26A24",
      tokens: [
        "0x4289C84AA79953c103Fe0767C3aFF26Ab28Cd723",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_ifarm_25_dai_2021_7_31_rc_ifarm_25_dai_2021_7_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x5e94A7EE56a168B06C79E5fd972AE0C35cB36FEa",
      tokens: ["0x203f6666028af5520d0364a1fcfE576BE2747B5f"],
    },
    "dai_rc_ifarm_25_dai_2021_7_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x5e94A7EE56a168B06C79E5fd972AE0C35cB36FEa",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_ifarm_25_dai_2021_7_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x5e94A7EE56a168B06C79E5fd972AE0C35cB36FEa",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_ifarm_25_dai_2021_7_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x5e94A7EE56a168B06C79E5fd972AE0C35cB36FEa",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_ifarm_25_dai_2021_7_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x5e94A7EE56a168B06C79E5fd972AE0C35cB36FEa",
      tokens: [
        "0x203f6666028af5520d0364a1fcfE576BE2747B5f",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_amp_0.02_dai_2021_7_31_rc_amp_0.02_dai_2021_7_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x2a1E73bf81941630869c125194fBF8f5Ec060Ff0",
      tokens: ["0x07028f0eb368195e5BD7c621f25a08e2E4e63d54"],
    },
    "dai_rc_amp_0.02_dai_2021_7_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x2a1E73bf81941630869c125194fBF8f5Ec060Ff0",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_amp_0.02_dai_2021_7_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x2a1E73bf81941630869c125194fBF8f5Ec060Ff0",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_amp_0.02_dai_2021_7_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x2a1E73bf81941630869c125194fBF8f5Ec060Ff0",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_amp_0.02_dai_2021_7_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x2a1E73bf81941630869c125194fBF8f5Ec060Ff0",
      tokens: [
        "0x07028f0eb368195e5BD7c621f25a08e2E4e63d54",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "1-nusd_nusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x67d9eAe741944D4402eB0D1cB3bC3a168EC1764c",
      tokens: ["0x1BEf2e5DE862034Fb0ed456DF59d29Ecadc9934C"],
    },
    "1-dai_nusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x67d9eAe741944D4402eB0D1cB3bC3a168EC1764c",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "1-usdc_nusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x67d9eAe741944D4402eB0D1cB3bC3a168EC1764c",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "1-usdt_nusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x67d9eAe741944D4402eB0D1cB3bC3a168EC1764c",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "1-nusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x67d9eAe741944D4402eB0D1cB3bC3a168EC1764c",
      tokens: [
        "0x1BEf2e5DE862034Fb0ed456DF59d29Ecadc9934C",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "rc_armor_0.1_dai_2021_7_31_rc_armor_0.1_dai_2021_7_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x8CAdb80062D6EA09b6d480cB3F955cb7F915b2C7",
      tokens: ["0x465B0673BbcECA807504FEB129d67576c698c649"],
    },
    "dai_rc_armor_0.1_dai_2021_7_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x8CAdb80062D6EA09b6d480cB3F955cb7F915b2C7",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_rc_armor_0.1_dai_2021_7_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x8CAdb80062D6EA09b6d480cB3F955cb7F915b2C7",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_rc_armor_0.1_dai_2021_7_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x8CAdb80062D6EA09b6d480cB3F955cb7F915b2C7",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "rc_armor_0.1_dai_2021_7_31+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x8CAdb80062D6EA09b6d480cB3F955cb7F915b2C7",
      tokens: [
        "0x465B0673BbcECA807504FEB129d67576c698c649",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "usdf_usdf+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x6E386F8E746af332d18f5c21F3369835C9c5DB16",
      tokens: ["0x92FC8E6EfdF389e2527d14393b15F543f9a03420"],
    },
    "dai_usdf+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x6E386F8E746af332d18f5c21F3369835C9c5DB16",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_usdf+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x6E386F8E746af332d18f5c21F3369835C9c5DB16",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_usdf+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x6E386F8E746af332d18f5c21F3369835C9c5DB16",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "usdf+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x6E386F8E746af332d18f5c21F3369835C9c5DB16",
      tokens: [
        "0x92FC8E6EfdF389e2527d14393b15F543f9a03420",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "2-nusd_nusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x57EB6fbE61216d9f8c7c09Ad1EE5a3023747244b",
      tokens: ["0x1BEf2e5DE862034Fb0ed456DF59d29Ecadc9934C"],
    },
    "2-dai_nusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x57EB6fbE61216d9f8c7c09Ad1EE5a3023747244b",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "2-usdc_nusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x57EB6fbE61216d9f8c7c09Ad1EE5a3023747244b",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "2-usdt_nusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x57EB6fbE61216d9f8c7c09Ad1EE5a3023747244b",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "2-nusd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x57EB6fbE61216d9f8c7c09Ad1EE5a3023747244b",
      tokens: [
        "0x1BEf2e5DE862034Fb0ed456DF59d29Ecadc9934C",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "ousd_ousd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x87650D7bbfC3A9F10587d7778206671719d9910D",
      tokens: ["0x2A8e1E676Ec238d8A992307B495b45B3fEAa5e86"],
    },
    "dai_ousd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x87650D7bbfC3A9F10587d7778206671719d9910D",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_ousd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x87650D7bbfC3A9F10587d7778206671719d9910D",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_ousd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x87650D7bbfC3A9F10587d7778206671719d9910D",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "ousd+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x87650D7bbfC3A9F10587d7778206671719d9910D",
      tokens: [
        "0x2A8e1E676Ec238d8A992307B495b45B3fEAa5e86",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    "dsu_dsu+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x6eC80df362d7042c50D4469bcfbc174C9dd9109a",
      tokens: ["0x605D26FBd5be761089281d5cec2Ce86eeA667109"],
    },
    "dai_dsu+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x6eC80df362d7042c50D4469bcfbc174C9dd9109a",
      tokens: ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
    },
    "usdc_dsu+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x6eC80df362d7042c50D4469bcfbc174C9dd9109a",
      tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
    },
    "usdt_dsu+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x6eC80df362d7042c50D4469bcfbc174C9dd9109a",
      tokens: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    },
    "dsu+dai+usdc+usdt": {
      pool: "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
      lpToken: "0x6eC80df362d7042c50D4469bcfbc174C9dd9109a",
      tokens: [
        "0x605D26FBd5be761089281d5cec2Ce86eeA667109",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
  },
  CurveMetapoolSwapPool: {
    "dola_dola+3crv": {
      pool: "0x9547429C0e2c3A8B88C6833B58FCE962734C0E8C",
      lpToken: "0x9547429C0e2c3A8B88C6833B58FCE962734C0E8C",
      tokens: ["0x865377367054516e17014CcdED1e7d814EDC9ce4"],
    },
    "3crv_dola+3crv": {
      pool: "0x9547429C0e2c3A8B88C6833B58FCE962734C0E8C",
      lpToken: "0x9547429C0e2c3A8B88C6833B58FCE962734C0E8C",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "dola+3crv": {
      pool: "0x9547429C0e2c3A8B88C6833B58FCE962734C0E8C",
      lpToken: "0x9547429C0e2c3A8B88C6833B58FCE962734C0E8C",
      tokens: ["0x865377367054516e17014CcdED1e7d814EDC9ce4", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "alusd_alusd+3crv": {
      pool: "0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c",
      lpToken: "0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c",
      tokens: ["0xBC6DA0FE9aD5f3b0d58160288917AA56653660E9"],
    },
    "3crv_alusd+3crv": {
      pool: "0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c",
      lpToken: "0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "alusd+3crv": {
      pool: "0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c",
      lpToken: "0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c",
      tokens: ["0xBC6DA0FE9aD5f3b0d58160288917AA56653660E9", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "frax_frax+3crv": {
      pool: "0xd632f22692FaC7611d2AA1C0D552930D43CAEd3B",
      lpToken: "0xd632f22692FaC7611d2AA1C0D552930D43CAEd3B",
      tokens: ["0x853d955aCEf822Db058eb8505911ED77F175b99e"],
    },
    "3crv_frax+3crv": {
      pool: "0xd632f22692FaC7611d2AA1C0D552930D43CAEd3B",
      lpToken: "0xd632f22692FaC7611d2AA1C0D552930D43CAEd3B",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "frax+3crv": {
      pool: "0xd632f22692FaC7611d2AA1C0D552930D43CAEd3B",
      lpToken: "0xd632f22692FaC7611d2AA1C0D552930D43CAEd3B",
      tokens: ["0x853d955aCEf822Db058eb8505911ED77F175b99e", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "flexusd_flexusd+3crv": {
      pool: "0x11E0Ab0561Ee271967F70Ea0DA54Fd538ba7a6B0",
      lpToken: "0x11E0Ab0561Ee271967F70Ea0DA54Fd538ba7a6B0",
      tokens: ["0xa774FFB4AF6B0A91331C084E1aebAE6Ad535e6F3"],
    },
    "3crv_flexusd+3crv": {
      pool: "0x11E0Ab0561Ee271967F70Ea0DA54Fd538ba7a6B0",
      lpToken: "0x11E0Ab0561Ee271967F70Ea0DA54Fd538ba7a6B0",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "flexusd+3crv": {
      pool: "0x11E0Ab0561Ee271967F70Ea0DA54Fd538ba7a6B0",
      lpToken: "0x11E0Ab0561Ee271967F70Ea0DA54Fd538ba7a6B0",
      tokens: ["0xa774FFB4AF6B0A91331C084E1aebAE6Ad535e6F3", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "grapefruitusd_grapefruitusd+3crv": {
      pool: "0xf5A95ccDe486B5fE98852bB02d8eC80a4b9422BD",
      lpToken: "0xf5A95ccDe486B5fE98852bB02d8eC80a4b9422BD",
      tokens: ["0x71dF9Dd3e658f0136c40E2E8eC3988a5226E9A67"],
    },
    "3crv_grapefruitusd+3crv": {
      pool: "0xf5A95ccDe486B5fE98852bB02d8eC80a4b9422BD",
      lpToken: "0xf5A95ccDe486B5fE98852bB02d8eC80a4b9422BD",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "grapefruitusd+3crv": {
      pool: "0xf5A95ccDe486B5fE98852bB02d8eC80a4b9422BD",
      lpToken: "0xf5A95ccDe486B5fE98852bB02d8eC80a4b9422BD",
      tokens: ["0x71dF9Dd3e658f0136c40E2E8eC3988a5226E9A67", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "mountainvusd_mountainvusd+3crv": {
      pool: "0xE0b99F540B3cD69f88b4666c8f39877c79072851",
      lpToken: "0xE0b99F540B3cD69f88b4666c8f39877c79072851",
      tokens: ["0x4206Fc377c22eB4778B5DAc3C28d0fa92db43AE4"],
    },
    "3crv_mountainvusd+3crv": {
      pool: "0xE0b99F540B3cD69f88b4666c8f39877c79072851",
      lpToken: "0xE0b99F540B3cD69f88b4666c8f39877c79072851",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "mountainvusd+3crv": {
      pool: "0xE0b99F540B3cD69f88b4666c8f39877c79072851",
      lpToken: "0xE0b99F540B3cD69f88b4666c8f39877c79072851",
      tokens: ["0x4206Fc377c22eB4778B5DAc3C28d0fa92db43AE4", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "efrontierusd_efrontierusd+3crv": {
      pool: "0x592ae00d0DEE274d74faeDc6760302F54A5dB67e",
      lpToken: "0x592ae00d0DEE274d74faeDc6760302F54A5dB67e",
      tokens: ["0x575990152169e1C1a4867E81C6AE662caEf068fd"],
    },
    "3crv_efrontierusd+3crv": {
      pool: "0x592ae00d0DEE274d74faeDc6760302F54A5dB67e",
      lpToken: "0x592ae00d0DEE274d74faeDc6760302F54A5dB67e",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "efrontierusd+3crv": {
      pool: "0x592ae00d0DEE274d74faeDc6760302F54A5dB67e",
      lpToken: "0x592ae00d0DEE274d74faeDc6760302F54A5dB67e",
      tokens: ["0x575990152169e1C1a4867E81C6AE662caEf068fd", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "nibbiousd_nibbiousd+3crv": {
      pool: "0x6f682319F4eE0320a53cc72341aC28408C4BeD19",
      lpToken: "0x6f682319F4eE0320a53cc72341aC28408C4BeD19",
      tokens: ["0x25de492f43661Af568f46C0a3F39850Aa1D066A0"],
    },
    "3crv_nibbiousd+3crv": {
      pool: "0x6f682319F4eE0320a53cc72341aC28408C4BeD19",
      lpToken: "0x6f682319F4eE0320a53cc72341aC28408C4BeD19",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "nibbiousd+3crv": {
      pool: "0x6f682319F4eE0320a53cc72341aC28408C4BeD19",
      lpToken: "0x6f682319F4eE0320a53cc72341aC28408C4BeD19",
      tokens: ["0x25de492f43661Af568f46C0a3F39850Aa1D066A0", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "folkvangusd_folkvangusd+3crv": {
      pool: "0x296B9FA08cf80138dfa6c3fcce497152662BC314",
      lpToken: "0x296B9FA08cf80138dfa6c3fcce497152662BC314",
      tokens: ["0xe14026c2f4EdD463791DA1991c74Cf16975942f6"],
    },
    "3crv_folkvangusd+3crv": {
      pool: "0x296B9FA08cf80138dfa6c3fcce497152662BC314",
      lpToken: "0x296B9FA08cf80138dfa6c3fcce497152662BC314",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "folkvangusd+3crv": {
      pool: "0x296B9FA08cf80138dfa6c3fcce497152662BC314",
      lpToken: "0x296B9FA08cf80138dfa6c3fcce497152662BC314",
      tokens: ["0xe14026c2f4EdD463791DA1991c74Cf16975942f6", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "1-noteusd_noteusd+3crv": {
      pool: "0xe9Ab166bC03099d251170d0578FDFFb94bCDDe6F",
      lpToken: "0xe9Ab166bC03099d251170d0578FDFFb94bCDDe6F",
      tokens: ["0x25aE7B9808F6Cc3B5E9b8699b62b0395C3F01BE0"],
    },
    "1-3crv_noteusd+3crv": {
      pool: "0xe9Ab166bC03099d251170d0578FDFFb94bCDDe6F",
      lpToken: "0xe9Ab166bC03099d251170d0578FDFFb94bCDDe6F",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "1-noteusd+3crv": {
      pool: "0xe9Ab166bC03099d251170d0578FDFFb94bCDDe6F",
      lpToken: "0xe9Ab166bC03099d251170d0578FDFFb94bCDDe6F",
      tokens: ["0x25aE7B9808F6Cc3B5E9b8699b62b0395C3F01BE0", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "mbtc_mbtc+crvrenwsbtc": {
      pool: "0x064841157BadDcB2704cA38901D7d754a59b80E8",
      lpToken: "0x064841157BadDcB2704cA38901D7d754a59b80E8",
      tokens: ["0xcfc013B416bE0Bd4b3bEdE35659423B796f8Dcf0"],
    },
    "crvrenwsbtc_mbtc+crvrenwsbtc": {
      pool: "0x064841157BadDcB2704cA38901D7d754a59b80E8",
      lpToken: "0x064841157BadDcB2704cA38901D7d754a59b80E8",
      tokens: ["0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3"],
    },
    "mbtc+crvrenwsbtc": {
      pool: "0x064841157BadDcB2704cA38901D7d754a59b80E8",
      lpToken: "0x064841157BadDcB2704cA38901D7d754a59b80E8",
      tokens: ["0xcfc013B416bE0Bd4b3bEdE35659423B796f8Dcf0", "0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3"],
    },
    "stablex_stablex+3crv": {
      pool: "0x3252eFd4EA2d6c78091a1f43982ee2C3659cC3D1",
      lpToken: "0x3252eFd4EA2d6c78091a1f43982ee2C3659cC3D1",
      tokens: ["0xcD91538B91B4ba7797D39a2f66E63810b50A33d0"],
    },
    "3crv_stablex+3crv": {
      pool: "0x3252eFd4EA2d6c78091a1f43982ee2C3659cC3D1",
      lpToken: "0x3252eFd4EA2d6c78091a1f43982ee2C3659cC3D1",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "stablex+3crv": {
      pool: "0x3252eFd4EA2d6c78091a1f43982ee2C3659cC3D1",
      lpToken: "0x3252eFd4EA2d6c78091a1f43982ee2C3659cC3D1",
      tokens: ["0xcD91538B91B4ba7797D39a2f66E63810b50A33d0", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "tusd_tusd+3crv": {
      pool: "0xEcd5e75AFb02eFa118AF914515D6521aaBd189F1",
      lpToken: "0xEcd5e75AFb02eFa118AF914515D6521aaBd189F1",
      tokens: ["0x0000000000085d4780B73119b644AE5ecd22b376"],
    },
    "3crv_tusd+3crv": {
      pool: "0xEcd5e75AFb02eFa118AF914515D6521aaBd189F1",
      lpToken: "0xEcd5e75AFb02eFa118AF914515D6521aaBd189F1",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "tusd+3crv": {
      pool: "0xEcd5e75AFb02eFa118AF914515D6521aaBd189F1",
      lpToken: "0xEcd5e75AFb02eFa118AF914515D6521aaBd189F1",
      tokens: ["0x0000000000085d4780B73119b644AE5ecd22b376", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_wbtc_25000_dai_2021_3_31_rc_wbtc_25000_dai_2021_3_31+3crv": {
      pool: "0x52EEEa483Ab7A801e2592a904Ad209C90e12E471",
      lpToken: "0x52EEEa483Ab7A801e2592a904Ad209C90e12E471",
      tokens: ["0x368df85396Be56f1D475E5D10339211a77e13C32"],
    },
    "3crv_rc_wbtc_25000_dai_2021_3_31+3crv": {
      pool: "0x52EEEa483Ab7A801e2592a904Ad209C90e12E471",
      lpToken: "0x52EEEa483Ab7A801e2592a904Ad209C90e12E471",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_wbtc_25000_dai_2021_3_31+3crv": {
      pool: "0x52EEEa483Ab7A801e2592a904Ad209C90e12E471",
      lpToken: "0x52EEEa483Ab7A801e2592a904Ad209C90e12E471",
      tokens: ["0x368df85396Be56f1D475E5D10339211a77e13C32", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_inv_300_dai_2021_3_31_rc_inv_300_dai_2021_3_31+3crv": {
      pool: "0x52890A0c018fbab21794AD18e15f87fdb57fb975",
      lpToken: "0x52890A0c018fbab21794AD18e15f87fdb57fb975",
      tokens: ["0xd0f05F157aB49b537009594d4605f8AC9564B34B"],
    },
    "3crv_rc_inv_300_dai_2021_3_31+3crv": {
      pool: "0x52890A0c018fbab21794AD18e15f87fdb57fb975",
      lpToken: "0x52890A0c018fbab21794AD18e15f87fdb57fb975",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_inv_300_dai_2021_3_31+3crv": {
      pool: "0x52890A0c018fbab21794AD18e15f87fdb57fb975",
      lpToken: "0x52890A0c018fbab21794AD18e15f87fdb57fb975",
      tokens: ["0xd0f05F157aB49b537009594d4605f8AC9564B34B", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_veth2_850_dai_2021_4_30_rc_veth2_850_dai_2021_4_30+3crv": {
      pool: "0x1Daf17e6d1d9ed6aa9Fe9910AE17Be98C2C4e6BA",
      lpToken: "0x1Daf17e6d1d9ed6aa9Fe9910AE17Be98C2C4e6BA",
      tokens: ["0xFa8490d1C7A270B5f339eA97D05CC7c657774772"],
    },
    "3crv_rc_veth2_850_dai_2021_4_30+3crv": {
      pool: "0x1Daf17e6d1d9ed6aa9Fe9910AE17Be98C2C4e6BA",
      lpToken: "0x1Daf17e6d1d9ed6aa9Fe9910AE17Be98C2C4e6BA",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_veth2_850_dai_2021_4_30+3crv": {
      pool: "0x1Daf17e6d1d9ed6aa9Fe9910AE17Be98C2C4e6BA",
      lpToken: "0x1Daf17e6d1d9ed6aa9Fe9910AE17Be98C2C4e6BA",
      tokens: ["0xFa8490d1C7A270B5f339eA97D05CC7c657774772", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "mic2_mic2+3crv": {
      pool: "0x2B26239f52420d11420bC0982571BFE091417A7d",
      lpToken: "0x2B26239f52420d11420bC0982571BFE091417A7d",
      tokens: ["0xEEd0c8d2DA6d243329a6F4A8C2aC61A59ecBFa02"],
    },
    "3crv_mic2+3crv": {
      pool: "0x2B26239f52420d11420bC0982571BFE091417A7d",
      lpToken: "0x2B26239f52420d11420bC0982571BFE091417A7d",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "mic2+3crv": {
      pool: "0x2B26239f52420d11420bC0982571BFE091417A7d",
      lpToken: "0x2B26239f52420d11420bC0982571BFE091417A7d",
      tokens: ["0xEEd0c8d2DA6d243329a6F4A8C2aC61A59ecBFa02", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "2-noteusd_noteusd+3crv": {
      pool: "0xBd184cD60AF678633b3072FD0B47b5D4b7a072f3",
      lpToken: "0xBd184cD60AF678633b3072FD0B47b5D4b7a072f3",
      tokens: ["0x25aE7B9808F6Cc3B5E9b8699b62b0395C3F01BE0"],
    },
    "2-3crv_noteusd+3crv": {
      pool: "0xBd184cD60AF678633b3072FD0B47b5D4b7a072f3",
      lpToken: "0xBd184cD60AF678633b3072FD0B47b5D4b7a072f3",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "2-noteusd+3crv": {
      pool: "0xBd184cD60AF678633b3072FD0B47b5D4b7a072f3",
      lpToken: "0xBd184cD60AF678633b3072FD0B47b5D4b7a072f3",
      tokens: ["0x25aE7B9808F6Cc3B5E9b8699b62b0395C3F01BE0", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "wausd_wausd+3crv": {
      pool: "0x9f6664205988C3bf4B12B851c075102714869535",
      lpToken: "0x9f6664205988C3bf4B12B851c075102714869535",
      tokens: ["0xc2db4c131ADaF01c15a1DB654c040c8578929D55"],
    },
    "3crv_wausd+3crv": {
      pool: "0x9f6664205988C3bf4B12B851c075102714869535",
      lpToken: "0x9f6664205988C3bf4B12B851c075102714869535",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "wausd+3crv": {
      pool: "0x9f6664205988C3bf4B12B851c075102714869535",
      lpToken: "0x9f6664205988C3bf4B12B851c075102714869535",
      tokens: ["0xc2db4c131ADaF01c15a1DB654c040c8578929D55", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "nkap_nkap+3crv": {
      pool: "0xF9bE07E6E1f28890c1647612187Df8c6e4CC035b",
      lpToken: "0xF9bE07E6E1f28890c1647612187Df8c6e4CC035b",
      tokens: ["0xd29F64577603F2854ab5270E0C68d44cee41e435"],
    },
    "3crv_nkap+3crv": {
      pool: "0xF9bE07E6E1f28890c1647612187Df8c6e4CC035b",
      lpToken: "0xF9bE07E6E1f28890c1647612187Df8c6e4CC035b",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "nkap+3crv": {
      pool: "0xF9bE07E6E1f28890c1647612187Df8c6e4CC035b",
      lpToken: "0xF9bE07E6E1f28890c1647612187Df8c6e4CC035b",
      tokens: ["0xd29F64577603F2854ab5270E0C68d44cee41e435", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_pickle_4_dai_2021_4_30_rc_pickle_4_dai_2021_4_30+3crv": {
      pool: "0x910A00594DC16dD699D579A8F7811d465Dfa2752",
      lpToken: "0x910A00594DC16dD699D579A8F7811d465Dfa2752",
      tokens: ["0xdA8b51EbD2ef9ADDb8F9223116Ba1960D9F1388f"],
    },
    "3crv_rc_pickle_4_dai_2021_4_30+3crv": {
      pool: "0x910A00594DC16dD699D579A8F7811d465Dfa2752",
      lpToken: "0x910A00594DC16dD699D579A8F7811d465Dfa2752",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_pickle_4_dai_2021_4_30+3crv": {
      pool: "0x910A00594DC16dD699D579A8F7811d465Dfa2752",
      lpToken: "0x910A00594DC16dD699D579A8F7811d465Dfa2752",
      tokens: ["0xdA8b51EbD2ef9ADDb8F9223116Ba1960D9F1388f", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_wbtc_29000_dai_2021_4_30_rc_wbtc_29000_dai_2021_4_30+3crv": {
      pool: "0x6Df2B0855060439251fee7eD34952b87b68EeEd9",
      lpToken: "0x6Df2B0855060439251fee7eD34952b87b68EeEd9",
      tokens: ["0xF91C09A2f407753540718209e893E5C96dDB46cc"],
    },
    "3crv_rc_wbtc_29000_dai_2021_4_30+3crv": {
      pool: "0x6Df2B0855060439251fee7eD34952b87b68EeEd9",
      lpToken: "0x6Df2B0855060439251fee7eD34952b87b68EeEd9",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_wbtc_29000_dai_2021_4_30+3crv": {
      pool: "0x6Df2B0855060439251fee7eD34952b87b68EeEd9",
      lpToken: "0x6Df2B0855060439251fee7eD34952b87b68EeEd9",
      tokens: ["0xF91C09A2f407753540718209e893E5C96dDB46cc", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_weth_900_dai_2021_4_30_rc_weth_900_dai_2021_4_30+3crv": {
      pool: "0xf085c77B66cD32182f3573cA2B10762DF3Caaa50",
      lpToken: "0xf085c77B66cD32182f3573cA2B10762DF3Caaa50",
      tokens: ["0x8781407e5acBB728FF1f9289107118f8163880D9"],
    },
    "3crv_rc_weth_900_dai_2021_4_30+3crv": {
      pool: "0xf085c77B66cD32182f3573cA2B10762DF3Caaa50",
      lpToken: "0xf085c77B66cD32182f3573cA2B10762DF3Caaa50",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_weth_900_dai_2021_4_30+3crv": {
      pool: "0xf085c77B66cD32182f3573cA2B10762DF3Caaa50",
      lpToken: "0xf085c77B66cD32182f3573cA2B10762DF3Caaa50",
      tokens: ["0x8781407e5acBB728FF1f9289107118f8163880D9", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_inv_300_dai_2021_4_30_rc_inv_300_dai_2021_4_30+3crv": {
      pool: "0xaC63c167955007D5166Fec43255AD5675EfC3102",
      lpToken: "0xaC63c167955007D5166Fec43255AD5675EfC3102",
      tokens: ["0x573Fff325f4a20db909fBbE7D037E17c486D8697"],
    },
    "3crv_rc_inv_300_dai_2021_4_30+3crv": {
      pool: "0xaC63c167955007D5166Fec43255AD5675EfC3102",
      lpToken: "0xaC63c167955007D5166Fec43255AD5675EfC3102",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_inv_300_dai_2021_4_30+3crv": {
      pool: "0xaC63c167955007D5166Fec43255AD5675EfC3102",
      lpToken: "0xaC63c167955007D5166Fec43255AD5675EfC3102",
      tokens: ["0x573Fff325f4a20db909fBbE7D037E17c486D8697", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_xcover_150_dai_2021_4_30_rc_xcover_150_dai_2021_4_30+3crv": {
      pool: "0x421CB018b91b4048FaAC1760Cee3B66026B940f2",
      lpToken: "0x421CB018b91b4048FaAC1760Cee3B66026B940f2",
      tokens: ["0xC92Caa33F8ce55123437B88ACe245f915D6A0953"],
    },
    "3crv_rc_xcover_150_dai_2021_4_30+3crv": {
      pool: "0x421CB018b91b4048FaAC1760Cee3B66026B940f2",
      lpToken: "0x421CB018b91b4048FaAC1760Cee3B66026B940f2",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_xcover_150_dai_2021_4_30+3crv": {
      pool: "0x421CB018b91b4048FaAC1760Cee3B66026B940f2",
      lpToken: "0x421CB018b91b4048FaAC1760Cee3B66026B940f2",
      tokens: ["0xC92Caa33F8ce55123437B88ACe245f915D6A0953", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_xsushi_8_dai_2021_4_30_rc_xsushi_8_dai_2021_4_30+3crv": {
      pool: "0x4AcE85cF348F316384A96b4739A1ab58f5123E7a",
      lpToken: "0x4AcE85cF348F316384A96b4739A1ab58f5123E7a",
      tokens: ["0xb239556beb879Dbe313e2334AA924Ed734e4e1Bc"],
    },
    "3crv_rc_xsushi_8_dai_2021_4_30+3crv": {
      pool: "0x4AcE85cF348F316384A96b4739A1ab58f5123E7a",
      lpToken: "0x4AcE85cF348F316384A96b4739A1ab58f5123E7a",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_xsushi_8_dai_2021_4_30+3crv": {
      pool: "0x4AcE85cF348F316384A96b4739A1ab58f5123E7a",
      lpToken: "0x4AcE85cF348F316384A96b4739A1ab58f5123E7a",
      tokens: ["0xb239556beb879Dbe313e2334AA924Ed734e4e1Bc", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_bbadger_15_dai_2021_4_30_rc_bbadger_15_dai_2021_4_30+3crv": {
      pool: "0x23078d5BC3AAD79aEFa8773079EE703168F15cF5",
      lpToken: "0x23078d5BC3AAD79aEFa8773079EE703168F15cF5",
      tokens: ["0xDdd2fb8DbA3E1f8c6dDD1BCb1d8460F33adB897d"],
    },
    "3crv_rc_bbadger_15_dai_2021_4_30+3crv": {
      pool: "0x23078d5BC3AAD79aEFa8773079EE703168F15cF5",
      lpToken: "0x23078d5BC3AAD79aEFa8773079EE703168F15cF5",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_bbadger_15_dai_2021_4_30+3crv": {
      pool: "0x23078d5BC3AAD79aEFa8773079EE703168F15cF5",
      lpToken: "0x23078d5BC3AAD79aEFa8773079EE703168F15cF5",
      tokens: ["0xDdd2fb8DbA3E1f8c6dDD1BCb1d8460F33adB897d", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_xruler_125_dai_2021_4_30_rc_xruler_125_dai_2021_4_30+3crv": {
      pool: "0xaFcc5DADcDcFc4D353Ab2d36fbd57b80513a34e6",
      lpToken: "0xaFcc5DADcDcFc4D353Ab2d36fbd57b80513a34e6",
      tokens: ["0xf3D907f9C7cb0B45dE0FDdfe9311B52F09A1c614"],
    },
    "3crv_rc_xruler_125_dai_2021_4_30+3crv": {
      pool: "0xaFcc5DADcDcFc4D353Ab2d36fbd57b80513a34e6",
      lpToken: "0xaFcc5DADcDcFc4D353Ab2d36fbd57b80513a34e6",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_xruler_125_dai_2021_4_30+3crv": {
      pool: "0xaFcc5DADcDcFc4D353Ab2d36fbd57b80513a34e6",
      lpToken: "0xaFcc5DADcDcFc4D353Ab2d36fbd57b80513a34e6",
      tokens: ["0xf3D907f9C7cb0B45dE0FDdfe9311B52F09A1c614", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_bor_300_dai_2021_4_30_rc_bor_300_dai_2021_4_30+3crv": {
      pool: "0xE764Fb1f870D621a197951F1A27aaC6d4F930329",
      lpToken: "0xE764Fb1f870D621a197951F1A27aaC6d4F930329",
      tokens: ["0x2A924F39780c1EC568c2c2a169a13584A2E81E7D"],
    },
    "3crv_rc_bor_300_dai_2021_4_30+3crv": {
      pool: "0xE764Fb1f870D621a197951F1A27aaC6d4F930329",
      lpToken: "0xE764Fb1f870D621a197951F1A27aaC6d4F930329",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_bor_300_dai_2021_4_30+3crv": {
      pool: "0xE764Fb1f870D621a197951F1A27aaC6d4F930329",
      lpToken: "0xE764Fb1f870D621a197951F1A27aaC6d4F930329",
      tokens: ["0x2A924F39780c1EC568c2c2a169a13584A2E81E7D", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_rgt_4_dai_2021_4_30_rc_rgt_4_dai_2021_4_30+3crv": {
      pool: "0xaF47f0877A9b26FfF12ec8253E07f92F89c6805D",
      lpToken: "0xaF47f0877A9b26FfF12ec8253E07f92F89c6805D",
      tokens: ["0xAE9949C8BdD8e6976CE775153c760d5ef75c4A4d"],
    },
    "3crv_rc_rgt_4_dai_2021_4_30+3crv": {
      pool: "0xaF47f0877A9b26FfF12ec8253E07f92F89c6805D",
      lpToken: "0xaF47f0877A9b26FfF12ec8253E07f92F89c6805D",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_rgt_4_dai_2021_4_30+3crv": {
      pool: "0xaF47f0877A9b26FfF12ec8253E07f92F89c6805D",
      lpToken: "0xaF47f0877A9b26FfF12ec8253E07f92F89c6805D",
      tokens: ["0xAE9949C8BdD8e6976CE775153c760d5ef75c4A4d", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_mask_700_dai_2021_4_30_rc_mask_700_dai_2021_4_30+3crv": {
      pool: "0x273AfbF6E257aae160749a61D4b83E06A841c3eB",
      lpToken: "0x273AfbF6E257aae160749a61D4b83E06A841c3eB",
      tokens: ["0x513d29D2b296a51b40A35C4d63884E0AC0a8D075"],
    },
    "3crv_rc_mask_700_dai_2021_4_30+3crv": {
      pool: "0x273AfbF6E257aae160749a61D4b83E06A841c3eB",
      lpToken: "0x273AfbF6E257aae160749a61D4b83E06A841c3eB",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_mask_700_dai_2021_4_30+3crv": {
      pool: "0x273AfbF6E257aae160749a61D4b83E06A841c3eB",
      lpToken: "0x273AfbF6E257aae160749a61D4b83E06A841c3eB",
      tokens: ["0x513d29D2b296a51b40A35C4d63884E0AC0a8D075", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_punk-basic_10000_dai_2021_4_30_rc_punk-basic_10000_dai_2021_4_30+3crv": {
      pool: "0xfB51e37CebC5D6f1569004206629BB7e47b6843f",
      lpToken: "0xfB51e37CebC5D6f1569004206629BB7e47b6843f",
      tokens: ["0x4616638bB5688673452FDfDAF3F7711D0722d96D"],
    },
    "3crv_rc_punk-basic_10000_dai_2021_4_30+3crv": {
      pool: "0xfB51e37CebC5D6f1569004206629BB7e47b6843f",
      lpToken: "0xfB51e37CebC5D6f1569004206629BB7e47b6843f",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_punk-basic_10000_dai_2021_4_30+3crv": {
      pool: "0xfB51e37CebC5D6f1569004206629BB7e47b6843f",
      lpToken: "0xfB51e37CebC5D6f1569004206629BB7e47b6843f",
      tokens: ["0x4616638bB5688673452FDfDAF3F7711D0722d96D", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "fei_fei+3crv": {
      pool: "0x152d13e62952a7c74c536bb3C8b7BD91853F076A",
      lpToken: "0x152d13e62952a7c74c536bb3C8b7BD91853F076A",
      tokens: ["0x956F47F50A910163D8BF957Cf5846D573E7f87CA"],
    },
    "3crv_fei+3crv": {
      pool: "0x152d13e62952a7c74c536bb3C8b7BD91853F076A",
      lpToken: "0x152d13e62952a7c74c536bb3C8b7BD91853F076A",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "fei+3crv": {
      pool: "0x152d13e62952a7c74c536bb3C8b7BD91853F076A",
      lpToken: "0x152d13e62952a7c74c536bb3C8b7BD91853F076A",
      tokens: ["0x956F47F50A910163D8BF957Cf5846D573E7f87CA", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "tribe_tribe+3crv": {
      pool: "0xf01E56475ea4081e6640914b2310E1Aa8F09d2E1",
      lpToken: "0xf01E56475ea4081e6640914b2310E1Aa8F09d2E1",
      tokens: ["0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B"],
    },
    "3crv_tribe+3crv": {
      pool: "0xf01E56475ea4081e6640914b2310E1Aa8F09d2E1",
      lpToken: "0xf01E56475ea4081e6640914b2310E1Aa8F09d2E1",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "tribe+3crv": {
      pool: "0xf01E56475ea4081e6640914b2310E1Aa8F09d2E1",
      lpToken: "0xf01E56475ea4081e6640914b2310E1Aa8F09d2E1",
      tokens: ["0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_defi5_60_dai_2021_4_30_rc_defi5_60_dai_2021_4_30+3crv": {
      pool: "0xbe735E6dd6c47d86BF8510D3c36Cba1a359B8dDc",
      lpToken: "0xbe735E6dd6c47d86BF8510D3c36Cba1a359B8dDc",
      tokens: ["0x6A426a279380CaCc4428Db42b8F5C53A7Fd06662"],
    },
    "3crv_rc_defi5_60_dai_2021_4_30+3crv": {
      pool: "0xbe735E6dd6c47d86BF8510D3c36Cba1a359B8dDc",
      lpToken: "0xbe735E6dd6c47d86BF8510D3c36Cba1a359B8dDc",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_defi5_60_dai_2021_4_30+3crv": {
      pool: "0xbe735E6dd6c47d86BF8510D3c36Cba1a359B8dDc",
      lpToken: "0xbe735E6dd6c47d86BF8510D3c36Cba1a359B8dDc",
      tokens: ["0x6A426a279380CaCc4428Db42b8F5C53A7Fd06662", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "1-rc_weth_1650_dai_2021_4_30_rc_weth_1650_dai_2021_4_30+3crv": {
      pool: "0xd97f71Bc0Ecb40B105dBACF5225d847d9c2334F8",
      lpToken: "0xd97f71Bc0Ecb40B105dBACF5225d847d9c2334F8",
      tokens: ["0x810c4b2A31665ef77b75D2410ACeb29F0F099096"],
    },
    "1-3crv_rc_weth_1650_dai_2021_4_30+3crv": {
      pool: "0xd97f71Bc0Ecb40B105dBACF5225d847d9c2334F8",
      lpToken: "0xd97f71Bc0Ecb40B105dBACF5225d847d9c2334F8",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "1-rc_weth_1650_dai_2021_4_30+3crv": {
      pool: "0xd97f71Bc0Ecb40B105dBACF5225d847d9c2334F8",
      lpToken: "0xd97f71Bc0Ecb40B105dBACF5225d847d9c2334F8",
      tokens: ["0x810c4b2A31665ef77b75D2410ACeb29F0F099096", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "2-rc_weth_1650_dai_2021_4_30_rc_weth_1650_dai_2021_4_30+3crv": {
      pool: "0x2009f19A8B46642E92Ea19adCdFB23ab05fC20A6",
      lpToken: "0x2009f19A8B46642E92Ea19adCdFB23ab05fC20A6",
      tokens: ["0x810c4b2A31665ef77b75D2410ACeb29F0F099096"],
    },
    "2-3crv_rc_weth_1650_dai_2021_4_30+3crv": {
      pool: "0x2009f19A8B46642E92Ea19adCdFB23ab05fC20A6",
      lpToken: "0x2009f19A8B46642E92Ea19adCdFB23ab05fC20A6",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "2-rc_weth_1650_dai_2021_4_30+3crv": {
      pool: "0x2009f19A8B46642E92Ea19adCdFB23ab05fC20A6",
      lpToken: "0x2009f19A8B46642E92Ea19adCdFB23ab05fC20A6",
      tokens: ["0x810c4b2A31665ef77b75D2410ACeb29F0F099096", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "lusd_lusd+3crv": {
      pool: "0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA",
      lpToken: "0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA",
      tokens: ["0x5f98805A4E8be255a32880FDeC7F6728C6568bA0"],
    },
    "3crv_lusd+3crv": {
      pool: "0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA",
      lpToken: "0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "lusd+3crv": {
      pool: "0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA",
      lpToken: "0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA",
      tokens: ["0x5f98805A4E8be255a32880FDeC7F6728C6568bA0", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_fei_0.4_dai_2021_4_30_rc_fei_0.4_dai_2021_4_30+3crv": {
      pool: "0xA46649Ffe1860d79DBE777930aF8e802B8b48AC4",
      lpToken: "0xA46649Ffe1860d79DBE777930aF8e802B8b48AC4",
      tokens: ["0x18880A0cb468Fc76eD63E023A0a510E9fB9FBd2f"],
    },
    "3crv_rc_fei_0.4_dai_2021_4_30+3crv": {
      pool: "0xA46649Ffe1860d79DBE777930aF8e802B8b48AC4",
      lpToken: "0xA46649Ffe1860d79DBE777930aF8e802B8b48AC4",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_fei_0.4_dai_2021_4_30+3crv": {
      pool: "0xA46649Ffe1860d79DBE777930aF8e802B8b48AC4",
      lpToken: "0xA46649Ffe1860d79DBE777930aF8e802B8b48AC4",
      tokens: ["0x18880A0cb468Fc76eD63E023A0a510E9fB9FBd2f", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "busd_busd+3crv": {
      pool: "0x4807862AA8b2bF68830e4C8dc86D0e9A998e085a",
      lpToken: "0x4807862AA8b2bF68830e4C8dc86D0e9A998e085a",
      tokens: ["0x4Fabb145d64652a948d72533023f6E7A623C7C53"],
    },
    "3crv_busd+3crv": {
      pool: "0x4807862AA8b2bF68830e4C8dc86D0e9A998e085a",
      lpToken: "0x4807862AA8b2bF68830e4C8dc86D0e9A998e085a",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "busd+3crv": {
      pool: "0x4807862AA8b2bF68830e4C8dc86D0e9A998e085a",
      lpToken: "0x4807862AA8b2bF68830e4C8dc86D0e9A998e085a",
      tokens: ["0x4Fabb145d64652a948d72533023f6E7A623C7C53", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "1-vbtc_vbtc+crvrenwsbtc": {
      pool: "0x87ca9AC842905628A83df72a23aa480091BB682e",
      lpToken: "0x87ca9AC842905628A83df72a23aa480091BB682e",
      tokens: ["0xe1406825186D63980fd6e2eC61888f7B91C4bAe4"],
    },
    "1-crvrenwsbtc_vbtc+crvrenwsbtc": {
      pool: "0x87ca9AC842905628A83df72a23aa480091BB682e",
      lpToken: "0x87ca9AC842905628A83df72a23aa480091BB682e",
      tokens: ["0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3"],
    },
    "1-vbtc+crvrenwsbtc": {
      pool: "0x87ca9AC842905628A83df72a23aa480091BB682e",
      lpToken: "0x87ca9AC842905628A83df72a23aa480091BB682e",
      tokens: ["0xe1406825186D63980fd6e2eC61888f7B91C4bAe4", "0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3"],
    },
    "rc_xruler_250_dai_2021_5_31_rc_xruler_250_dai_2021_5_31+3crv": {
      pool: "0x51714B15aB2C2172914A005f4f2889f16Af7003c",
      lpToken: "0x51714B15aB2C2172914A005f4f2889f16Af7003c",
      tokens: ["0x751aF265374df8eB065e1dBD8132E7eB7E97A7D0"],
    },
    "3crv_rc_xruler_250_dai_2021_5_31+3crv": {
      pool: "0x51714B15aB2C2172914A005f4f2889f16Af7003c",
      lpToken: "0x51714B15aB2C2172914A005f4f2889f16Af7003c",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_xruler_250_dai_2021_5_31+3crv": {
      pool: "0x51714B15aB2C2172914A005f4f2889f16Af7003c",
      lpToken: "0x51714B15aB2C2172914A005f4f2889f16Af7003c",
      tokens: ["0x751aF265374df8eB065e1dBD8132E7eB7E97A7D0", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_aave_300_dai_2021_5_31_rc_aave_300_dai_2021_5_31+3crv": {
      pool: "0x92719D8b48795CBccD7eC68114ea7a2Db8065140",
      lpToken: "0x92719D8b48795CBccD7eC68114ea7a2Db8065140",
      tokens: ["0x6CD591Ff4148C6eDefCAb97925113c040728aFAb"],
    },
    "3crv_rc_aave_300_dai_2021_5_31+3crv": {
      pool: "0x92719D8b48795CBccD7eC68114ea7a2Db8065140",
      lpToken: "0x92719D8b48795CBccD7eC68114ea7a2Db8065140",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_aave_300_dai_2021_5_31+3crv": {
      pool: "0x92719D8b48795CBccD7eC68114ea7a2Db8065140",
      lpToken: "0x92719D8b48795CBccD7eC68114ea7a2Db8065140",
      tokens: ["0x6CD591Ff4148C6eDefCAb97925113c040728aFAb", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_comp_350_dai_2021_5_31_rc_comp_350_dai_2021_5_31+3crv": {
      pool: "0xf5C511E559342087d30a793705228bFEB881c325",
      lpToken: "0xf5C511E559342087d30a793705228bFEB881c325",
      tokens: ["0xF35A04a8D018c49153f6163C03F8153dA8b6e23d"],
    },
    "3crv_rc_comp_350_dai_2021_5_31+3crv": {
      pool: "0xf5C511E559342087d30a793705228bFEB881c325",
      lpToken: "0xf5C511E559342087d30a793705228bFEB881c325",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_comp_350_dai_2021_5_31+3crv": {
      pool: "0xf5C511E559342087d30a793705228bFEB881c325",
      lpToken: "0xf5C511E559342087d30a793705228bFEB881c325",
      tokens: ["0xF35A04a8D018c49153f6163C03F8153dA8b6e23d", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_xpremia_0.4_dai_2021_5_31_rc_xpremia_0.4_dai_2021_5_31+3crv": {
      pool: "0xB0c6CE798da73F455c2ac4d669C9F4106c251193",
      lpToken: "0xB0c6CE798da73F455c2ac4d669C9F4106c251193",
      tokens: ["0xD6f22f71399104CEd96054E7Cab0A76926c413a6"],
    },
    "3crv_rc_xpremia_0.4_dai_2021_5_31+3crv": {
      pool: "0xB0c6CE798da73F455c2ac4d669C9F4106c251193",
      lpToken: "0xB0c6CE798da73F455c2ac4d669C9F4106c251193",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_xpremia_0.4_dai_2021_5_31+3crv": {
      pool: "0xB0c6CE798da73F455c2ac4d669C9F4106c251193",
      lpToken: "0xB0c6CE798da73F455c2ac4d669C9F4106c251193",
      tokens: ["0xD6f22f71399104CEd96054E7Cab0A76926c413a6", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "2-vbtc_vbtc+crvrenwsbtc": {
      pool: "0xdCB5BE55674ceC407D8A6D28aE2098FEdDf2c296",
      lpToken: "0xdCB5BE55674ceC407D8A6D28aE2098FEdDf2c296",
      tokens: ["0xe1406825186D63980fd6e2eC61888f7B91C4bAe4"],
    },
    "2-crvrenwsbtc_vbtc+crvrenwsbtc": {
      pool: "0xdCB5BE55674ceC407D8A6D28aE2098FEdDf2c296",
      lpToken: "0xdCB5BE55674ceC407D8A6D28aE2098FEdDf2c296",
      tokens: ["0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3"],
    },
    "2-vbtc+crvrenwsbtc": {
      pool: "0xdCB5BE55674ceC407D8A6D28aE2098FEdDf2c296",
      lpToken: "0xdCB5BE55674ceC407D8A6D28aE2098FEdDf2c296",
      tokens: ["0xe1406825186D63980fd6e2eC61888f7B91C4bAe4", "0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3"],
    },
    "rc_alcx_700_dai_2021_5_31_rc_alcx_700_dai_2021_5_31+3crv": {
      pool: "0xcf2be480d37777E6eE846e935E57Aaae1fd466F4",
      lpToken: "0xcf2be480d37777E6eE846e935E57Aaae1fd466F4",
      tokens: ["0x02355248C6bfE873D6e3d82cdc6E1fE54a63627a"],
    },
    "3crv_rc_alcx_700_dai_2021_5_31+3crv": {
      pool: "0xcf2be480d37777E6eE846e935E57Aaae1fd466F4",
      lpToken: "0xcf2be480d37777E6eE846e935E57Aaae1fd466F4",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_alcx_700_dai_2021_5_31+3crv": {
      pool: "0xcf2be480d37777E6eE846e935E57Aaae1fd466F4",
      lpToken: "0xcf2be480d37777E6eE846e935E57Aaae1fd466F4",
      tokens: ["0x02355248C6bfE873D6e3d82cdc6E1fE54a63627a", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_oltc_140_dai_2021_5_31_rc_oltc_140_dai_2021_5_31+3crv": {
      pool: "0xf5E2e90952d3Bdf8e9ACA1Fb38Fa195F0A108a9D",
      lpToken: "0xf5E2e90952d3Bdf8e9ACA1Fb38Fa195F0A108a9D",
      tokens: ["0x96f2ed52824863F9b85A5231b81dAfCB066695c9"],
    },
    "3crv_rc_oltc_140_dai_2021_5_31+3crv": {
      pool: "0xf5E2e90952d3Bdf8e9ACA1Fb38Fa195F0A108a9D",
      lpToken: "0xf5E2e90952d3Bdf8e9ACA1Fb38Fa195F0A108a9D",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_oltc_140_dai_2021_5_31+3crv": {
      pool: "0xf5E2e90952d3Bdf8e9ACA1Fb38Fa195F0A108a9D",
      lpToken: "0xf5E2e90952d3Bdf8e9ACA1Fb38Fa195F0A108a9D",
      tokens: ["0x96f2ed52824863F9b85A5231b81dAfCB066695c9", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_wbtc_32000_dai_2021_5_31_rc_wbtc_32000_dai_2021_5_31+3crv": {
      pool: "0xda3B4449E055C76a740dC5796aFC7bE2A535a70F",
      lpToken: "0xda3B4449E055C76a740dC5796aFC7bE2A535a70F",
      tokens: ["0xf74aF96Eb48A3146e16b33c32837900A1bE7fA40"],
    },
    "3crv_rc_wbtc_32000_dai_2021_5_31+3crv": {
      pool: "0xda3B4449E055C76a740dC5796aFC7bE2A535a70F",
      lpToken: "0xda3B4449E055C76a740dC5796aFC7bE2A535a70F",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_wbtc_32000_dai_2021_5_31+3crv": {
      pool: "0xda3B4449E055C76a740dC5796aFC7bE2A535a70F",
      lpToken: "0xda3B4449E055C76a740dC5796aFC7bE2A535a70F",
      tokens: ["0xf74aF96Eb48A3146e16b33c32837900A1bE7fA40", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_weth_1600_dai_2021_5_31_rc_weth_1600_dai_2021_5_31+3crv": {
      pool: "0x1E20205cd346CD8e5FcA92fCEa34Ead4057e4AE5",
      lpToken: "0x1E20205cd346CD8e5FcA92fCEa34Ead4057e4AE5",
      tokens: ["0xAe6d35c25bFc72ab3366AF415cA8EFF93e487f24"],
    },
    "3crv_rc_weth_1600_dai_2021_5_31+3crv": {
      pool: "0x1E20205cd346CD8e5FcA92fCEa34Ead4057e4AE5",
      lpToken: "0x1E20205cd346CD8e5FcA92fCEa34Ead4057e4AE5",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_weth_1600_dai_2021_5_31+3crv": {
      pool: "0x1E20205cd346CD8e5FcA92fCEa34Ead4057e4AE5",
      lpToken: "0x1E20205cd346CD8e5FcA92fCEa34Ead4057e4AE5",
      tokens: ["0xAe6d35c25bFc72ab3366AF415cA8EFF93e487f24", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_xcover_260_dai_2021_5_31_rc_xcover_260_dai_2021_5_31+3crv": {
      pool: "0x11fbFe3a6c183Dcd6Fd9BaA42Fe39206174a6C00",
      lpToken: "0x11fbFe3a6c183Dcd6Fd9BaA42Fe39206174a6C00",
      tokens: ["0xFC96d415D59614B5200652427bb8b24Eb52341c3"],
    },
    "3crv_rc_xcover_260_dai_2021_5_31+3crv": {
      pool: "0x11fbFe3a6c183Dcd6Fd9BaA42Fe39206174a6C00",
      lpToken: "0x11fbFe3a6c183Dcd6Fd9BaA42Fe39206174a6C00",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_xcover_260_dai_2021_5_31+3crv": {
      pool: "0x11fbFe3a6c183Dcd6Fd9BaA42Fe39206174a6C00",
      lpToken: "0x11fbFe3a6c183Dcd6Fd9BaA42Fe39206174a6C00",
      tokens: ["0xFC96d415D59614B5200652427bb8b24Eb52341c3", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_xruler_150_dai_2021_5_31_rc_xruler_150_dai_2021_5_31+3crv": {
      pool: "0xF9ef8A8dE38ceA3196a4E009aD7A7aF6F5A3d776",
      lpToken: "0xF9ef8A8dE38ceA3196a4E009aD7A7aF6F5A3d776",
      tokens: ["0xA6f69cD607e4AFe5117bFf03ea8C7d677944dfdB"],
    },
    "3crv_rc_xruler_150_dai_2021_5_31+3crv": {
      pool: "0xF9ef8A8dE38ceA3196a4E009aD7A7aF6F5A3d776",
      lpToken: "0xF9ef8A8dE38ceA3196a4E009aD7A7aF6F5A3d776",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_xruler_150_dai_2021_5_31+3crv": {
      pool: "0xF9ef8A8dE38ceA3196a4E009aD7A7aF6F5A3d776",
      lpToken: "0xF9ef8A8dE38ceA3196a4E009aD7A7aF6F5A3d776",
      tokens: ["0xA6f69cD607e4AFe5117bFf03ea8C7d677944dfdB", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_bbadger_17_dai_2021_5_31_rc_bbadger_17_dai_2021_5_31+3crv": {
      pool: "0x9d7ee35a38952bd5Ad36dB0BF435a298363ac1Aa",
      lpToken: "0x9d7ee35a38952bd5Ad36dB0BF435a298363ac1Aa",
      tokens: ["0x38D0665172F1167FD6C3240a01c6158f1FBE0D41"],
    },
    "3crv_rc_bbadger_17_dai_2021_5_31+3crv": {
      pool: "0x9d7ee35a38952bd5Ad36dB0BF435a298363ac1Aa",
      lpToken: "0x9d7ee35a38952bd5Ad36dB0BF435a298363ac1Aa",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_bbadger_17_dai_2021_5_31+3crv": {
      pool: "0x9d7ee35a38952bd5Ad36dB0BF435a298363ac1Aa",
      lpToken: "0x9d7ee35a38952bd5Ad36dB0BF435a298363ac1Aa",
      tokens: ["0x38D0665172F1167FD6C3240a01c6158f1FBE0D41", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_xsushi_7_dai_2021_5_31_rc_xsushi_7_dai_2021_5_31+3crv": {
      pool: "0x4EB0Bb03A246b955D36316a96BE314885c23a1B0",
      lpToken: "0x4EB0Bb03A246b955D36316a96BE314885c23a1B0",
      tokens: ["0x2c448ACd9E04d34fe74059e3748287390e9BDDa9"],
    },
    "3crv_rc_xsushi_7_dai_2021_5_31+3crv": {
      pool: "0x4EB0Bb03A246b955D36316a96BE314885c23a1B0",
      lpToken: "0x4EB0Bb03A246b955D36316a96BE314885c23a1B0",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_xsushi_7_dai_2021_5_31+3crv": {
      pool: "0x4EB0Bb03A246b955D36316a96BE314885c23a1B0",
      lpToken: "0x4EB0Bb03A246b955D36316a96BE314885c23a1B0",
      tokens: ["0x2c448ACd9E04d34fe74059e3748287390e9BDDa9", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_weth_1900_dai_2021_5_31_rc_weth_1900_dai_2021_5_31+3crv": {
      pool: "0xDa3028f415374dE92cD5A7C64F865a6B1AAbf804",
      lpToken: "0xDa3028f415374dE92cD5A7C64F865a6B1AAbf804",
      tokens: ["0xE44c86C6d52773175D5f6f1Fa97219d21F09E0d5"],
    },
    "3crv_rc_weth_1900_dai_2021_5_31+3crv": {
      pool: "0xDa3028f415374dE92cD5A7C64F865a6B1AAbf804",
      lpToken: "0xDa3028f415374dE92cD5A7C64F865a6B1AAbf804",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_weth_1900_dai_2021_5_31+3crv": {
      pool: "0xDa3028f415374dE92cD5A7C64F865a6B1AAbf804",
      lpToken: "0xDa3028f415374dE92cD5A7C64F865a6B1AAbf804",
      tokens: ["0xE44c86C6d52773175D5f6f1Fa97219d21F09E0d5", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_defi5_60_dai_2021_5_31_rc_defi5_60_dai_2021_5_31+3crv": {
      pool: "0x0750da0ED0a4448eD516c326d702e7Fee88F4aD9",
      lpToken: "0x0750da0ED0a4448eD516c326d702e7Fee88F4aD9",
      tokens: ["0x753724342046c366A05675a9bcF7083F1DE21c5c"],
    },
    "3crv_rc_defi5_60_dai_2021_5_31+3crv": {
      pool: "0x0750da0ED0a4448eD516c326d702e7Fee88F4aD9",
      lpToken: "0x0750da0ED0a4448eD516c326d702e7Fee88F4aD9",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_defi5_60_dai_2021_5_31+3crv": {
      pool: "0x0750da0ED0a4448eD516c326d702e7Fee88F4aD9",
      lpToken: "0x0750da0ED0a4448eD516c326d702e7Fee88F4aD9",
      tokens: ["0x753724342046c366A05675a9bcF7083F1DE21c5c", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_bor_330_dai_2021_5_31_rc_bor_330_dai_2021_5_31+3crv": {
      pool: "0xe69fC18b2252f5c3Cf8b8C35CE06AF0Bb461d476",
      lpToken: "0xe69fC18b2252f5c3Cf8b8C35CE06AF0Bb461d476",
      tokens: ["0xd59108fF65cD7C1AEf309fc92E8706746E80c09A"],
    },
    "3crv_rc_bor_330_dai_2021_5_31+3crv": {
      pool: "0xe69fC18b2252f5c3Cf8b8C35CE06AF0Bb461d476",
      lpToken: "0xe69fC18b2252f5c3Cf8b8C35CE06AF0Bb461d476",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_bor_330_dai_2021_5_31+3crv": {
      pool: "0xe69fC18b2252f5c3Cf8b8C35CE06AF0Bb461d476",
      lpToken: "0xe69fC18b2252f5c3Cf8b8C35CE06AF0Bb461d476",
      tokens: ["0xd59108fF65cD7C1AEf309fc92E8706746E80c09A", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_veth2_1200_dai_2021_5_31_rc_veth2_1200_dai_2021_5_31+3crv": {
      pool: "0x3c7Ac391Ad242c7C2Cfbf004ed72C0bDf9d620cc",
      lpToken: "0x3c7Ac391Ad242c7C2Cfbf004ed72C0bDf9d620cc",
      tokens: ["0x8cC2eAD1457Af98dfb2c811bF6D01C2560ef40cc"],
    },
    "3crv_rc_veth2_1200_dai_2021_5_31+3crv": {
      pool: "0x3c7Ac391Ad242c7C2Cfbf004ed72C0bDf9d620cc",
      lpToken: "0x3c7Ac391Ad242c7C2Cfbf004ed72C0bDf9d620cc",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_veth2_1200_dai_2021_5_31+3crv": {
      pool: "0x3c7Ac391Ad242c7C2Cfbf004ed72C0bDf9d620cc",
      lpToken: "0x3c7Ac391Ad242c7C2Cfbf004ed72C0bDf9d620cc",
      tokens: ["0x8cC2eAD1457Af98dfb2c811bF6D01C2560ef40cc", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_inv_350_dai_2021_5_31_rc_inv_350_dai_2021_5_31+3crv": {
      pool: "0x883F7d4B6B24F8BF1dB980951Ad08930D9AEC6Bc",
      lpToken: "0x883F7d4B6B24F8BF1dB980951Ad08930D9AEC6Bc",
      tokens: ["0x3fa372155439e9150a99D86A1de93a92F26b00C8"],
    },
    "3crv_rc_inv_350_dai_2021_5_31+3crv": {
      pool: "0x883F7d4B6B24F8BF1dB980951Ad08930D9AEC6Bc",
      lpToken: "0x883F7d4B6B24F8BF1dB980951Ad08930D9AEC6Bc",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_inv_350_dai_2021_5_31+3crv": {
      pool: "0x883F7d4B6B24F8BF1dB980951Ad08930D9AEC6Bc",
      lpToken: "0x883F7d4B6B24F8BF1dB980951Ad08930D9AEC6Bc",
      tokens: ["0x3fa372155439e9150a99D86A1de93a92F26b00C8", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_vvsp_25_dai_2021_5_31_rc_vvsp_25_dai_2021_5_31+3crv": {
      pool: "0xD5c91b8161924F389A33E97FC8624431a53858F5",
      lpToken: "0xD5c91b8161924F389A33E97FC8624431a53858F5",
      tokens: ["0x1f2930909396b40EF7B64afF8f148430B344e428"],
    },
    "3crv_rc_vvsp_25_dai_2021_5_31+3crv": {
      pool: "0xD5c91b8161924F389A33E97FC8624431a53858F5",
      lpToken: "0xD5c91b8161924F389A33E97FC8624431a53858F5",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_vvsp_25_dai_2021_5_31+3crv": {
      pool: "0xD5c91b8161924F389A33E97FC8624431a53858F5",
      lpToken: "0xD5c91b8161924F389A33E97FC8624431a53858F5",
      tokens: ["0x1f2930909396b40EF7B64afF8f148430B344e428", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_ifarm_110_dai_2021_5_31_rc_ifarm_110_dai_2021_5_31+3crv": {
      pool: "0xDD577F3c26e322d6e790947D5e56362c3F99Cc6d",
      lpToken: "0xDD577F3c26e322d6e790947D5e56362c3F99Cc6d",
      tokens: ["0x3A200791aa0642e6Ba1AF118AAc46b34c24c91Bf"],
    },
    "3crv_rc_ifarm_110_dai_2021_5_31+3crv": {
      pool: "0xDD577F3c26e322d6e790947D5e56362c3F99Cc6d",
      lpToken: "0xDD577F3c26e322d6e790947D5e56362c3F99Cc6d",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_ifarm_110_dai_2021_5_31+3crv": {
      pool: "0xDD577F3c26e322d6e790947D5e56362c3F99Cc6d",
      lpToken: "0xDD577F3c26e322d6e790947D5e56362c3F99Cc6d",
      tokens: ["0x3A200791aa0642e6Ba1AF118AAc46b34c24c91Bf", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_yvyfi_25000_dai_2021_5_31_rc_yvyfi_25000_dai_2021_5_31+3crv": {
      pool: "0x9231dfF16BE1020dcE7dd6F48d565FDA123c11C8",
      lpToken: "0x9231dfF16BE1020dcE7dd6F48d565FDA123c11C8",
      tokens: ["0x5882ab1ab5DA409eD3ba48dce3684824B642C8CB"],
    },
    "3crv_rc_yvyfi_25000_dai_2021_5_31+3crv": {
      pool: "0x9231dfF16BE1020dcE7dd6F48d565FDA123c11C8",
      lpToken: "0x9231dfF16BE1020dcE7dd6F48d565FDA123c11C8",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_yvyfi_25000_dai_2021_5_31+3crv": {
      pool: "0x9231dfF16BE1020dcE7dd6F48d565FDA123c11C8",
      lpToken: "0x9231dfF16BE1020dcE7dd6F48d565FDA123c11C8",
      tokens: ["0x5882ab1ab5DA409eD3ba48dce3684824B642C8CB", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_rai_2_dai_2021_5_31_rc_rai_2_dai_2021_5_31+3crv": {
      pool: "0xAf7c2Fb62ea78Bd5bE98F716de55B480C354f17B",
      lpToken: "0xAf7c2Fb62ea78Bd5bE98F716de55B480C354f17B",
      tokens: ["0xdfb2c2222B305eFCa2E414083CF42318D442aB9F"],
    },
    "3crv_rc_rai_2_dai_2021_5_31+3crv": {
      pool: "0xAf7c2Fb62ea78Bd5bE98F716de55B480C354f17B",
      lpToken: "0xAf7c2Fb62ea78Bd5bE98F716de55B480C354f17B",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_rai_2_dai_2021_5_31+3crv": {
      pool: "0xAf7c2Fb62ea78Bd5bE98F716de55B480C354f17B",
      lpToken: "0xAf7c2Fb62ea78Bd5bE98F716de55B480C354f17B",
      tokens: ["0xdfb2c2222B305eFCa2E414083CF42318D442aB9F", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_bdpi_350_dai_2021_5_31_rc_bdpi_350_dai_2021_5_31+3crv": {
      pool: "0x5c277D5CC9b258Ca957FF83Ec41d153c4DF7619A",
      lpToken: "0x5c277D5CC9b258Ca957FF83Ec41d153c4DF7619A",
      tokens: ["0xa839D74FE0E456c8fCd4d9bb8759861aFcBbD1CE"],
    },
    "3crv_rc_bdpi_350_dai_2021_5_31+3crv": {
      pool: "0x5c277D5CC9b258Ca957FF83Ec41d153c4DF7619A",
      lpToken: "0x5c277D5CC9b258Ca957FF83Ec41d153c4DF7619A",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_bdpi_350_dai_2021_5_31+3crv": {
      pool: "0x5c277D5CC9b258Ca957FF83Ec41d153c4DF7619A",
      lpToken: "0x5c277D5CC9b258Ca957FF83Ec41d153c4DF7619A",
      tokens: ["0xa839D74FE0E456c8fCd4d9bb8759861aFcBbD1CE", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_pickle_7_dai_2021_5_31_rc_pickle_7_dai_2021_5_31+3crv": {
      pool: "0x3EaC18b3e7A4663d38cb6EDB6024cad9d5E76a49",
      lpToken: "0x3EaC18b3e7A4663d38cb6EDB6024cad9d5E76a49",
      tokens: ["0x2EA853fd316A3D6E400bc688ad4a8f61eFAAb322"],
    },
    "3crv_rc_pickle_7_dai_2021_5_31+3crv": {
      pool: "0x3EaC18b3e7A4663d38cb6EDB6024cad9d5E76a49",
      lpToken: "0x3EaC18b3e7A4663d38cb6EDB6024cad9d5E76a49",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_pickle_7_dai_2021_5_31+3crv": {
      pool: "0x3EaC18b3e7A4663d38cb6EDB6024cad9d5E76a49",
      lpToken: "0x3EaC18b3e7A4663d38cb6EDB6024cad9d5E76a49",
      tokens: ["0x2EA853fd316A3D6E400bc688ad4a8f61eFAAb322", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "opium_lp_af0d_opium_lp_af0d+3crv": {
      pool: "0x6448113F6c31F738B7c6b24c1b4A1Cf23c6133f2",
      lpToken: "0x6448113F6c31F738B7c6b24c1b4A1Cf23c6133f2",
      tokens: ["0xb54539D39529cE58fB63877DEbC6d6b70E3ecA01"],
    },
    "3crv_opium_lp_af0d+3crv": {
      pool: "0x6448113F6c31F738B7c6b24c1b4A1Cf23c6133f2",
      lpToken: "0x6448113F6c31F738B7c6b24c1b4A1Cf23c6133f2",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "opium_lp_af0d+3crv": {
      pool: "0x6448113F6c31F738B7c6b24c1b4A1Cf23c6133f2",
      lpToken: "0x6448113F6c31F738B7c6b24c1b4A1Cf23c6133f2",
      tokens: ["0xb54539D39529cE58fB63877DEbC6d6b70E3ecA01", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "crylyl_crylyl+3crv": {
      pool: "0xE75916b70c0E1C58bB605948066151EA449561F4",
      lpToken: "0xE75916b70c0E1C58bB605948066151EA449561F4",
      tokens: ["0xeD86b7Ce1924c6AceF801EDd87BDA29E486A16EA"],
    },
    "3crv_crylyl+3crv": {
      pool: "0xE75916b70c0E1C58bB605948066151EA449561F4",
      lpToken: "0xE75916b70c0E1C58bB605948066151EA449561F4",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "crylyl+3crv": {
      pool: "0xE75916b70c0E1C58bB605948066151EA449561F4",
      lpToken: "0xE75916b70c0E1C58bB605948066151EA449561F4",
      tokens: ["0xeD86b7Ce1924c6AceF801EDd87BDA29E486A16EA", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "opium_lp_1c60_opium_lp_1c60+3crv": {
      pool: "0x5400234516485A8e474A6f1c34DBed940a1A866E",
      lpToken: "0x5400234516485A8e474A6f1c34DBed940a1A866E",
      tokens: ["0x0cAb5A7dCAb521aF5404Fa604b85113267d38444"],
    },
    "3crv_opium_lp_1c60+3crv": {
      pool: "0x5400234516485A8e474A6f1c34DBed940a1A866E",
      lpToken: "0x5400234516485A8e474A6f1c34DBed940a1A866E",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "opium_lp_1c60+3crv": {
      pool: "0x5400234516485A8e474A6f1c34DBed940a1A866E",
      lpToken: "0x5400234516485A8e474A6f1c34DBed940a1A866E",
      tokens: ["0x0cAb5A7dCAb521aF5404Fa604b85113267d38444", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_armor_0.35_dai_2021_5_31_rc_armor_0.35_dai_2021_5_31+3crv": {
      pool: "0x1E556F647f79e734530F2B354FBf339553fB1f6E",
      lpToken: "0x1E556F647f79e734530F2B354FBf339553fB1f6E",
      tokens: ["0x4491BA118C7C358817B6b453eE329A02E93012Bc"],
    },
    "3crv_rc_armor_0.35_dai_2021_5_31+3crv": {
      pool: "0x1E556F647f79e734530F2B354FBf339553fB1f6E",
      lpToken: "0x1E556F647f79e734530F2B354FBf339553fB1f6E",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_armor_0.35_dai_2021_5_31+3crv": {
      pool: "0x1E556F647f79e734530F2B354FBf339553fB1f6E",
      lpToken: "0x1E556F647f79e734530F2B354FBf339553fB1f6E",
      tokens: ["0x4491BA118C7C358817B6b453eE329A02E93012Bc", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_exrd_0.06_dai_2021_5_31_rc_exrd_0.06_dai_2021_5_31+3crv": {
      pool: "0xC55834C9cDf6e92e0ceB181fd07f6243eAC0f598",
      lpToken: "0xC55834C9cDf6e92e0ceB181fd07f6243eAC0f598",
      tokens: ["0x54DE230ff753be1E2313Fa567cb22F7d5FAe80D9"],
    },
    "3crv_rc_exrd_0.06_dai_2021_5_31+3crv": {
      pool: "0xC55834C9cDf6e92e0ceB181fd07f6243eAC0f598",
      lpToken: "0xC55834C9cDf6e92e0ceB181fd07f6243eAC0f598",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_exrd_0.06_dai_2021_5_31+3crv": {
      pool: "0xC55834C9cDf6e92e0ceB181fd07f6243eAC0f598",
      lpToken: "0xC55834C9cDf6e92e0ceB181fd07f6243eAC0f598",
      tokens: ["0x54DE230ff753be1E2313Fa567cb22F7d5FAe80D9", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "curvebtc+_curvebtc++crvrenwsbtc": {
      pool: "0xf6b657Cb19A4cB2AF427D50F3054104871100D52",
      lpToken: "0xf6b657Cb19A4cB2AF427D50F3054104871100D52",
      tokens: ["0xDe79d36aB6D2489dd36729A657a25f299Cb2Fbca"],
    },
    "crvrenwsbtc_curvebtc++crvrenwsbtc": {
      pool: "0xf6b657Cb19A4cB2AF427D50F3054104871100D52",
      lpToken: "0xf6b657Cb19A4cB2AF427D50F3054104871100D52",
      tokens: ["0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3"],
    },
    "curvebtc++crvrenwsbtc": {
      pool: "0xf6b657Cb19A4cB2AF427D50F3054104871100D52",
      lpToken: "0xf6b657Cb19A4cB2AF427D50F3054104871100D52",
      tokens: ["0xDe79d36aB6D2489dd36729A657a25f299Cb2Fbca", "0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3"],
    },
    "rc_weth_2000_dai_2021_6_30_rc_weth_2000_dai_2021_6_30+3crv": {
      pool: "0x56680FDEbDd3e31f79938fa1222bFea4706a0758",
      lpToken: "0x56680FDEbDd3e31f79938fa1222bFea4706a0758",
      tokens: ["0xF3d948CEA0FaDd9Bfc63745F8469922184910a5E"],
    },
    "3crv_rc_weth_2000_dai_2021_6_30+3crv": {
      pool: "0x56680FDEbDd3e31f79938fa1222bFea4706a0758",
      lpToken: "0x56680FDEbDd3e31f79938fa1222bFea4706a0758",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_weth_2000_dai_2021_6_30+3crv": {
      pool: "0x56680FDEbDd3e31f79938fa1222bFea4706a0758",
      lpToken: "0x56680FDEbDd3e31f79938fa1222bFea4706a0758",
      tokens: ["0xF3d948CEA0FaDd9Bfc63745F8469922184910a5E", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_weth_1400_dai_2021_7_31_rc_weth_1400_dai_2021_7_31+3crv": {
      pool: "0x0212133321479B183637e52942564162bCc37C1D",
      lpToken: "0x0212133321479B183637e52942564162bCc37C1D",
      tokens: ["0xf006f6898A814d498927524e7a9745ec05fEE18a"],
    },
    "3crv_rc_weth_1400_dai_2021_7_31+3crv": {
      pool: "0x0212133321479B183637e52942564162bCc37C1D",
      lpToken: "0x0212133321479B183637e52942564162bCc37C1D",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_weth_1400_dai_2021_7_31+3crv": {
      pool: "0x0212133321479B183637e52942564162bCc37C1D",
      lpToken: "0x0212133321479B183637e52942564162bCc37C1D",
      tokens: ["0xf006f6898A814d498927524e7a9745ec05fEE18a", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_wbtc_22000_dai_2021_7_31_rc_wbtc_22000_dai_2021_7_31+3crv": {
      pool: "0x8e49801018361aBb1EDe67D5B12907A5F895C623",
      lpToken: "0x8e49801018361aBb1EDe67D5B12907A5F895C623",
      tokens: ["0x79519Ae4bdA45252E23eA84f48F2447b768f5193"],
    },
    "3crv_rc_wbtc_22000_dai_2021_7_31+3crv": {
      pool: "0x8e49801018361aBb1EDe67D5B12907A5F895C623",
      lpToken: "0x8e49801018361aBb1EDe67D5B12907A5F895C623",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_wbtc_22000_dai_2021_7_31+3crv": {
      pool: "0x8e49801018361aBb1EDe67D5B12907A5F895C623",
      lpToken: "0x8e49801018361aBb1EDe67D5B12907A5F895C623",
      tokens: ["0x79519Ae4bdA45252E23eA84f48F2447b768f5193", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_xruler_15_dai_2021_6_30_rc_xruler_15_dai_2021_6_30+3crv": {
      pool: "0x46f5ab27914A670CFE260A2DEDb87f84c264835f",
      lpToken: "0x46f5ab27914A670CFE260A2DEDb87f84c264835f",
      tokens: ["0xe7D18f2507869280111025F4938376846e8ad11A"],
    },
    "3crv_rc_xruler_15_dai_2021_6_30+3crv": {
      pool: "0x46f5ab27914A670CFE260A2DEDb87f84c264835f",
      lpToken: "0x46f5ab27914A670CFE260A2DEDb87f84c264835f",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_xruler_15_dai_2021_6_30+3crv": {
      pool: "0x46f5ab27914A670CFE260A2DEDb87f84c264835f",
      lpToken: "0x46f5ab27914A670CFE260A2DEDb87f84c264835f",
      tokens: ["0xe7D18f2507869280111025F4938376846e8ad11A", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_xcover_100_dai_2021_6_30_rc_xcover_100_dai_2021_6_30+3crv": {
      pool: "0x2206cF41E7Db9393a3BcbB6Ad35d344811523b46",
      lpToken: "0x2206cF41E7Db9393a3BcbB6Ad35d344811523b46",
      tokens: ["0xB556Bb40E40f4AF34d9eea04d2fF7DB2674939BB"],
    },
    "3crv_rc_xcover_100_dai_2021_6_30+3crv": {
      pool: "0x2206cF41E7Db9393a3BcbB6Ad35d344811523b46",
      lpToken: "0x2206cF41E7Db9393a3BcbB6Ad35d344811523b46",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_xcover_100_dai_2021_6_30+3crv": {
      pool: "0x2206cF41E7Db9393a3BcbB6Ad35d344811523b46",
      lpToken: "0x2206cF41E7Db9393a3BcbB6Ad35d344811523b46",
      tokens: ["0xB556Bb40E40f4AF34d9eea04d2fF7DB2674939BB", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_veth2_1300_dai_2021_6_30_rc_veth2_1300_dai_2021_6_30+3crv": {
      pool: "0xC3134cCB0810418Dcc2540c7df6E4995a9966d4e",
      lpToken: "0xC3134cCB0810418Dcc2540c7df6E4995a9966d4e",
      tokens: ["0x3143C25447a589e7Bb0DBec4bA8FcFEB9FC11150"],
    },
    "3crv_rc_veth2_1300_dai_2021_6_30+3crv": {
      pool: "0xC3134cCB0810418Dcc2540c7df6E4995a9966d4e",
      lpToken: "0xC3134cCB0810418Dcc2540c7df6E4995a9966d4e",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_veth2_1300_dai_2021_6_30+3crv": {
      pool: "0xC3134cCB0810418Dcc2540c7df6E4995a9966d4e",
      lpToken: "0xC3134cCB0810418Dcc2540c7df6E4995a9966d4e",
      tokens: ["0x3143C25447a589e7Bb0DBec4bA8FcFEB9FC11150", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "1-rc_bbadger_5_dai_2021_6_30_rc_bbadger_5_dai_2021_6_30+3crv": {
      pool: "0x0043Fcb34e7470130fDe28198571DeE092c70Bd7",
      lpToken: "0x0043Fcb34e7470130fDe28198571DeE092c70Bd7",
      tokens: ["0xa713Cc74eE148414bcAb46aC2c41c93D84A56B0f"],
    },
    "1-3crv_rc_bbadger_5_dai_2021_6_30+3crv": {
      pool: "0x0043Fcb34e7470130fDe28198571DeE092c70Bd7",
      lpToken: "0x0043Fcb34e7470130fDe28198571DeE092c70Bd7",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "1-rc_bbadger_5_dai_2021_6_30+3crv": {
      pool: "0x0043Fcb34e7470130fDe28198571DeE092c70Bd7",
      lpToken: "0x0043Fcb34e7470130fDe28198571DeE092c70Bd7",
      tokens: ["0xa713Cc74eE148414bcAb46aC2c41c93D84A56B0f", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_alcx_300_dai_2021_6_30_rc_alcx_300_dai_2021_6_30+3crv": {
      pool: "0x439bfaE666826a7cB73663E366c12f03d0A13B49",
      lpToken: "0x439bfaE666826a7cB73663E366c12f03d0A13B49",
      tokens: ["0x09c7A3ac261a45BE1A6B8D8502035F4491F644AE"],
    },
    "3crv_rc_alcx_300_dai_2021_6_30+3crv": {
      pool: "0x439bfaE666826a7cB73663E366c12f03d0A13B49",
      lpToken: "0x439bfaE666826a7cB73663E366c12f03d0A13B49",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_alcx_300_dai_2021_6_30+3crv": {
      pool: "0x439bfaE666826a7cB73663E366c12f03d0A13B49",
      lpToken: "0x439bfaE666826a7cB73663E366c12f03d0A13B49",
      tokens: ["0x09c7A3ac261a45BE1A6B8D8502035F4491F644AE", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_ifarm_30_dai_2021_6_30_rc_ifarm_30_dai_2021_6_30+3crv": {
      pool: "0xBc984294CedABE05d7317CC55BCdA241a7222615",
      lpToken: "0xBc984294CedABE05d7317CC55BCdA241a7222615",
      tokens: ["0xa414B17cbaA24195547369d6afFe7fE1F642714A"],
    },
    "3crv_rc_ifarm_30_dai_2021_6_30+3crv": {
      pool: "0xBc984294CedABE05d7317CC55BCdA241a7222615",
      lpToken: "0xBc984294CedABE05d7317CC55BCdA241a7222615",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_ifarm_30_dai_2021_6_30+3crv": {
      pool: "0xBc984294CedABE05d7317CC55BCdA241a7222615",
      lpToken: "0xBc984294CedABE05d7317CC55BCdA241a7222615",
      tokens: ["0xa414B17cbaA24195547369d6afFe7fE1F642714A", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_bdi_150_dai_2021_6_30_rc_bdi_150_dai_2021_6_30+3crv": {
      pool: "0x0457E0ed628143b6A6A39f6e3458153f96abB26a",
      lpToken: "0x0457E0ed628143b6A6A39f6e3458153f96abB26a",
      tokens: ["0xC2d0Deb48D30D196Db9867f5c263396D46a3A48E"],
    },
    "3crv_rc_bdi_150_dai_2021_6_30+3crv": {
      pool: "0x0457E0ed628143b6A6A39f6e3458153f96abB26a",
      lpToken: "0x0457E0ed628143b6A6A39f6e3458153f96abB26a",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_bdi_150_dai_2021_6_30+3crv": {
      pool: "0x0457E0ed628143b6A6A39f6e3458153f96abB26a",
      lpToken: "0x0457E0ed628143b6A6A39f6e3458153f96abB26a",
      tokens: ["0xC2d0Deb48D30D196Db9867f5c263396D46a3A48E", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_armor_0.15_dai_2021_6_30_rc_armor_0.15_dai_2021_6_30+3crv": {
      pool: "0x3c9aEEb08be0c10cA4135e981F2C73dF8a28F8a0",
      lpToken: "0x3c9aEEb08be0c10cA4135e981F2C73dF8a28F8a0",
      tokens: ["0x01880e5A97d827A2e77b3F2ca436a0A42FE2Dc19"],
    },
    "3crv_rc_armor_0.15_dai_2021_6_30+3crv": {
      pool: "0x3c9aEEb08be0c10cA4135e981F2C73dF8a28F8a0",
      lpToken: "0x3c9aEEb08be0c10cA4135e981F2C73dF8a28F8a0",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_armor_0.15_dai_2021_6_30+3crv": {
      pool: "0x3c9aEEb08be0c10cA4135e981F2C73dF8a28F8a0",
      lpToken: "0x3c9aEEb08be0c10cA4135e981F2C73dF8a28F8a0",
      tokens: ["0x01880e5A97d827A2e77b3F2ca436a0A42FE2Dc19", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_exrd_0.04_dai_2021_6_30_rc_exrd_0.04_dai_2021_6_30+3crv": {
      pool: "0xDc0b9c549809BD4BDe021BD35A99f612D472d827",
      lpToken: "0xDc0b9c549809BD4BDe021BD35A99f612D472d827",
      tokens: ["0x496b33a6E22D2193360F462E326312260CbDEF08"],
    },
    "3crv_rc_exrd_0.04_dai_2021_6_30+3crv": {
      pool: "0xDc0b9c549809BD4BDe021BD35A99f612D472d827",
      lpToken: "0xDc0b9c549809BD4BDe021BD35A99f612D472d827",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_exrd_0.04_dai_2021_6_30+3crv": {
      pool: "0xDc0b9c549809BD4BDe021BD35A99f612D472d827",
      lpToken: "0xDc0b9c549809BD4BDe021BD35A99f612D472d827",
      tokens: ["0x496b33a6E22D2193360F462E326312260CbDEF08", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_ibbtc_20000_dai_2021_6_30_rc_ibbtc_20000_dai_2021_6_30+3crv": {
      pool: "0x8aEe2e72ff7e34fC15dcAD5BbAa6AB2dF1bdEb1c",
      lpToken: "0x8aEe2e72ff7e34fC15dcAD5BbAa6AB2dF1bdEb1c",
      tokens: ["0x2da36A502ed49cf2d550EDac6f6257252764FE04"],
    },
    "3crv_rc_ibbtc_20000_dai_2021_6_30+3crv": {
      pool: "0x8aEe2e72ff7e34fC15dcAD5BbAa6AB2dF1bdEb1c",
      lpToken: "0x8aEe2e72ff7e34fC15dcAD5BbAa6AB2dF1bdEb1c",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_ibbtc_20000_dai_2021_6_30+3crv": {
      pool: "0x8aEe2e72ff7e34fC15dcAD5BbAa6AB2dF1bdEb1c",
      lpToken: "0x8aEe2e72ff7e34fC15dcAD5BbAa6AB2dF1bdEb1c",
      tokens: ["0x2da36A502ed49cf2d550EDac6f6257252764FE04", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_near_1.1_dai_2021_6_30_rc_near_1.1_dai_2021_6_30+3crv": {
      pool: "0x620E3C54d8c6efCA7476D657c57dA5Eb144d3f81",
      lpToken: "0x620E3C54d8c6efCA7476D657c57dA5Eb144d3f81",
      tokens: ["0x738EA1263e70Dbbae98a6093113cB441e65EDA10"],
    },
    "3crv_rc_near_1.1_dai_2021_6_30+3crv": {
      pool: "0x620E3C54d8c6efCA7476D657c57dA5Eb144d3f81",
      lpToken: "0x620E3C54d8c6efCA7476D657c57dA5Eb144d3f81",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_near_1.1_dai_2021_6_30+3crv": {
      pool: "0x620E3C54d8c6efCA7476D657c57dA5Eb144d3f81",
      lpToken: "0x620E3C54d8c6efCA7476D657c57dA5Eb144d3f81",
      tokens: ["0x738EA1263e70Dbbae98a6093113cB441e65EDA10", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "2-rc_bbadger_5_dai_2021_6_30_rc_bbadger_5_dai_2021_6_30+3crv": {
      pool: "0x8B93c5727fF8c0e4CD16f8ae8dFe4DAc8730C4BE",
      lpToken: "0x8B93c5727fF8c0e4CD16f8ae8dFe4DAc8730C4BE",
      tokens: ["0xa713Cc74eE148414bcAb46aC2c41c93D84A56B0f"],
    },
    "2-3crv_rc_bbadger_5_dai_2021_6_30+3crv": {
      pool: "0x8B93c5727fF8c0e4CD16f8ae8dFe4DAc8730C4BE",
      lpToken: "0x8B93c5727fF8c0e4CD16f8ae8dFe4DAc8730C4BE",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "2-rc_bbadger_5_dai_2021_6_30+3crv": {
      pool: "0x8B93c5727fF8c0e4CD16f8ae8dFe4DAc8730C4BE",
      lpToken: "0x8B93c5727fF8c0e4CD16f8ae8dFe4DAc8730C4BE",
      tokens: ["0xa713Cc74eE148414bcAb46aC2c41c93D84A56B0f", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_vvsp_7_dai_2021_7_31_rc_vvsp_7_dai_2021_7_31+3crv": {
      pool: "0xd752B367B1d5998446daA6E9Eb90d05D12d9f263",
      lpToken: "0xd752B367B1d5998446daA6E9Eb90d05D12d9f263",
      tokens: ["0xb0b806A39D838d6854DCF9927420830F7eE53259"],
    },
    "3crv_rc_vvsp_7_dai_2021_7_31+3crv": {
      pool: "0xd752B367B1d5998446daA6E9Eb90d05D12d9f263",
      lpToken: "0xd752B367B1d5998446daA6E9Eb90d05D12d9f263",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_vvsp_7_dai_2021_7_31+3crv": {
      pool: "0xd752B367B1d5998446daA6E9Eb90d05D12d9f263",
      lpToken: "0xd752B367B1d5998446daA6E9Eb90d05D12d9f263",
      tokens: ["0xb0b806A39D838d6854DCF9927420830F7eE53259", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "mim_mim+3crv": {
      pool: "0x5a6A4D54456819380173272A5E8E9B9904BdF41B",
      lpToken: "0x5a6A4D54456819380173272A5E8E9B9904BdF41B",
      tokens: ["0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3"],
    },
    "3crv_mim+3crv": {
      pool: "0x5a6A4D54456819380173272A5E8E9B9904BdF41B",
      lpToken: "0x5a6A4D54456819380173272A5E8E9B9904BdF41B",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "mim+3crv": {
      pool: "0x5a6A4D54456819380173272A5E8E9B9904BdF41B",
      lpToken: "0x5a6A4D54456819380173272A5E8E9B9904BdF41B",
      tokens: ["0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "uad_uad+3crv": {
      pool: "0x20955CB69Ae1515962177D164dfC9522feef567E",
      lpToken: "0x20955CB69Ae1515962177D164dfC9522feef567E",
      tokens: ["0x0F644658510c95CB46955e55D7BA9DDa9E9fBEc6"],
    },
    "3crv_uad+3crv": {
      pool: "0x20955CB69Ae1515962177D164dfC9522feef567E",
      lpToken: "0x20955CB69Ae1515962177D164dfC9522feef567E",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "uad+3crv": {
      pool: "0x20955CB69Ae1515962177D164dfC9522feef567E",
      lpToken: "0x20955CB69Ae1515962177D164dfC9522feef567E",
      tokens: ["0x0F644658510c95CB46955e55D7BA9DDa9E9fBEc6", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_inv_100_dai_2021_7_31_rc_inv_100_dai_2021_7_31+3crv": {
      pool: "0xEAF21e096793d92A1028Bb6F2570846d79165B48",
      lpToken: "0xEAF21e096793d92A1028Bb6F2570846d79165B48",
      tokens: ["0xc8919A086f05A894d54D6BA945fA2ED24375d34f"],
    },
    "3crv_rc_inv_100_dai_2021_7_31+3crv": {
      pool: "0xEAF21e096793d92A1028Bb6F2570846d79165B48",
      lpToken: "0xEAF21e096793d92A1028Bb6F2570846d79165B48",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_inv_100_dai_2021_7_31+3crv": {
      pool: "0xEAF21e096793d92A1028Bb6F2570846d79165B48",
      lpToken: "0xEAF21e096793d92A1028Bb6F2570846d79165B48",
      tokens: ["0xc8919A086f05A894d54D6BA945fA2ED24375d34f", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "kmxsushi/usdt-link_kmxsushi/usdt-link+3crv": {
      pool: "0xF420cdabD89a40D98541df39014576CeAB01cdc7",
      lpToken: "0xF420cdabD89a40D98541df39014576CeAB01cdc7",
      tokens: ["0x17Fb5f39C55903DE60E63543067031cE2B2659EE"],
    },
    "3crv_kmxsushi/usdt-link+3crv": {
      pool: "0xF420cdabD89a40D98541df39014576CeAB01cdc7",
      lpToken: "0xF420cdabD89a40D98541df39014576CeAB01cdc7",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "kmxsushi/usdt-link+3crv": {
      pool: "0xF420cdabD89a40D98541df39014576CeAB01cdc7",
      lpToken: "0xF420cdabD89a40D98541df39014576CeAB01cdc7",
      tokens: ["0x17Fb5f39C55903DE60E63543067031cE2B2659EE", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rusd_rusd+3crv": {
      pool: "0xC3018Fc8B7aC3a01c1fAdb3292B50e6faC417486",
      lpToken: "0xC3018Fc8B7aC3a01c1fAdb3292B50e6faC417486",
      tokens: ["0x9bB1B080b37b6f3FcD38b86b9dF04feef16E97B3"],
    },
    "3crv_rusd+3crv": {
      pool: "0xC3018Fc8B7aC3a01c1fAdb3292B50e6faC417486",
      lpToken: "0xC3018Fc8B7aC3a01c1fAdb3292B50e6faC417486",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rusd+3crv": {
      pool: "0xC3018Fc8B7aC3a01c1fAdb3292B50e6faC417486",
      lpToken: "0xC3018Fc8B7aC3a01c1fAdb3292B50e6faC417486",
      tokens: ["0x9bB1B080b37b6f3FcD38b86b9dF04feef16E97B3", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "vusd_vusd+3crv": {
      pool: "0x4dF9E1A764Fb8Df1113EC02fc9dc75963395b508",
      lpToken: "0x4dF9E1A764Fb8Df1113EC02fc9dc75963395b508",
      tokens: ["0x677ddbd918637E5F2c79e164D402454dE7dA8619"],
    },
    "3crv_vusd+3crv": {
      pool: "0x4dF9E1A764Fb8Df1113EC02fc9dc75963395b508",
      lpToken: "0x4dF9E1A764Fb8Df1113EC02fc9dc75963395b508",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "vusd+3crv": {
      pool: "0x4dF9E1A764Fb8Df1113EC02fc9dc75963395b508",
      lpToken: "0x4dF9E1A764Fb8Df1113EC02fc9dc75963395b508",
      tokens: ["0x677ddbd918637E5F2c79e164D402454dE7dA8619", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "bpf_bpf+3crv": {
      pool: "0xeb20b6Dda329685863c7193d8C3b13D3DEf9a02F",
      lpToken: "0xeb20b6Dda329685863c7193d8C3b13D3DEf9a02F",
      tokens: ["0x5197FBE1a86679FF1360E27862BF88B0c5119BD8"],
    },
    "3crv_bpf+3crv": {
      pool: "0xeb20b6Dda329685863c7193d8C3b13D3DEf9a02F",
      lpToken: "0xeb20b6Dda329685863c7193d8C3b13D3DEf9a02F",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "bpf+3crv": {
      pool: "0xeb20b6Dda329685863c7193d8C3b13D3DEf9a02F",
      lpToken: "0xeb20b6Dda329685863c7193d8C3b13D3DEf9a02F",
      tokens: ["0x5197FBE1a86679FF1360E27862BF88B0c5119BD8", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "xruler_xruler+3crv": {
      pool: "0x3279827b8233Ab455ba6F6bcB9804ee601Bf725B",
      lpToken: "0x3279827b8233Ab455ba6F6bcB9804ee601Bf725B",
      tokens: ["0x01F7Fd324b366380D2145Dfa6C7A76fdb75f17B9"],
    },
    "3crv_xruler+3crv": {
      pool: "0x3279827b8233Ab455ba6F6bcB9804ee601Bf725B",
      lpToken: "0x3279827b8233Ab455ba6F6bcB9804ee601Bf725B",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "xruler+3crv": {
      pool: "0x3279827b8233Ab455ba6F6bcB9804ee601Bf725B",
      lpToken: "0x3279827b8233Ab455ba6F6bcB9804ee601Bf725B",
      tokens: ["0x01F7Fd324b366380D2145Dfa6C7A76fdb75f17B9", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "xcover_xcover+3crv": {
      pool: "0x0c46aC7dC6a06Fa5de5a6e74c0726F96c0319900",
      lpToken: "0x0c46aC7dC6a06Fa5de5a6e74c0726F96c0319900",
      tokens: ["0xa921392015eB37c5977c4Fd77E14DD568c59D5F8"],
    },
    "3crv_xcover+3crv": {
      pool: "0x0c46aC7dC6a06Fa5de5a6e74c0726F96c0319900",
      lpToken: "0x0c46aC7dC6a06Fa5de5a6e74c0726F96c0319900",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "xcover+3crv": {
      pool: "0x0c46aC7dC6a06Fa5de5a6e74c0726F96c0319900",
      lpToken: "0x0c46aC7dC6a06Fa5de5a6e74c0726F96c0319900",
      tokens: ["0xa921392015eB37c5977c4Fd77E14DD568c59D5F8", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_xruler_12_dai_2021_7_31_rc_xruler_12_dai_2021_7_31+3crv": {
      pool: "0x80Bb24b127b96f8C6637acF3BAcAE4F5F860F08c",
      lpToken: "0x80Bb24b127b96f8C6637acF3BAcAE4F5F860F08c",
      tokens: ["0xd0F3063fBD4cE76bbc942f15B80Be8026Ea8FaCf"],
    },
    "3crv_rc_xruler_12_dai_2021_7_31+3crv": {
      pool: "0x80Bb24b127b96f8C6637acF3BAcAE4F5F860F08c",
      lpToken: "0x80Bb24b127b96f8C6637acF3BAcAE4F5F860F08c",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_xruler_12_dai_2021_7_31+3crv": {
      pool: "0x80Bb24b127b96f8C6637acF3BAcAE4F5F860F08c",
      lpToken: "0x80Bb24b127b96f8C6637acF3BAcAE4F5F860F08c",
      tokens: ["0xd0F3063fBD4cE76bbc942f15B80Be8026Ea8FaCf", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_xcover_90_dai_2021_7_31_rc_xcover_90_dai_2021_7_31+3crv": {
      pool: "0xfE97D8f55884186E50AeDba306Ad553911a26A24",
      lpToken: "0xfE97D8f55884186E50AeDba306Ad553911a26A24",
      tokens: ["0x4289C84AA79953c103Fe0767C3aFF26Ab28Cd723"],
    },
    "3crv_rc_xcover_90_dai_2021_7_31+3crv": {
      pool: "0xfE97D8f55884186E50AeDba306Ad553911a26A24",
      lpToken: "0xfE97D8f55884186E50AeDba306Ad553911a26A24",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_xcover_90_dai_2021_7_31+3crv": {
      pool: "0xfE97D8f55884186E50AeDba306Ad553911a26A24",
      lpToken: "0xfE97D8f55884186E50AeDba306Ad553911a26A24",
      tokens: ["0x4289C84AA79953c103Fe0767C3aFF26Ab28Cd723", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_ifarm_25_dai_2021_7_31_rc_ifarm_25_dai_2021_7_31+3crv": {
      pool: "0x5e94A7EE56a168B06C79E5fd972AE0C35cB36FEa",
      lpToken: "0x5e94A7EE56a168B06C79E5fd972AE0C35cB36FEa",
      tokens: ["0x203f6666028af5520d0364a1fcfE576BE2747B5f"],
    },
    "3crv_rc_ifarm_25_dai_2021_7_31+3crv": {
      pool: "0x5e94A7EE56a168B06C79E5fd972AE0C35cB36FEa",
      lpToken: "0x5e94A7EE56a168B06C79E5fd972AE0C35cB36FEa",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_ifarm_25_dai_2021_7_31+3crv": {
      pool: "0x5e94A7EE56a168B06C79E5fd972AE0C35cB36FEa",
      lpToken: "0x5e94A7EE56a168B06C79E5fd972AE0C35cB36FEa",
      tokens: ["0x203f6666028af5520d0364a1fcfE576BE2747B5f", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_amp_0.02_dai_2021_7_31_rc_amp_0.02_dai_2021_7_31+3crv": {
      pool: "0x2a1E73bf81941630869c125194fBF8f5Ec060Ff0",
      lpToken: "0x2a1E73bf81941630869c125194fBF8f5Ec060Ff0",
      tokens: ["0x07028f0eb368195e5BD7c621f25a08e2E4e63d54"],
    },
    "3crv_rc_amp_0.02_dai_2021_7_31+3crv": {
      pool: "0x2a1E73bf81941630869c125194fBF8f5Ec060Ff0",
      lpToken: "0x2a1E73bf81941630869c125194fBF8f5Ec060Ff0",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_amp_0.02_dai_2021_7_31+3crv": {
      pool: "0x2a1E73bf81941630869c125194fBF8f5Ec060Ff0",
      lpToken: "0x2a1E73bf81941630869c125194fBF8f5Ec060Ff0",
      tokens: ["0x07028f0eb368195e5BD7c621f25a08e2E4e63d54", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "1-nusd_nusd+3crv": {
      pool: "0x67d9eAe741944D4402eB0D1cB3bC3a168EC1764c",
      lpToken: "0x67d9eAe741944D4402eB0D1cB3bC3a168EC1764c",
      tokens: ["0x1BEf2e5DE862034Fb0ed456DF59d29Ecadc9934C"],
    },
    "1-3crv_nusd+3crv": {
      pool: "0x67d9eAe741944D4402eB0D1cB3bC3a168EC1764c",
      lpToken: "0x67d9eAe741944D4402eB0D1cB3bC3a168EC1764c",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "1-nusd+3crv": {
      pool: "0x67d9eAe741944D4402eB0D1cB3bC3a168EC1764c",
      lpToken: "0x67d9eAe741944D4402eB0D1cB3bC3a168EC1764c",
      tokens: ["0x1BEf2e5DE862034Fb0ed456DF59d29Ecadc9934C", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_armor_0.1_dai_2021_7_31_rc_armor_0.1_dai_2021_7_31+3crv": {
      pool: "0x8CAdb80062D6EA09b6d480cB3F955cb7F915b2C7",
      lpToken: "0x8CAdb80062D6EA09b6d480cB3F955cb7F915b2C7",
      tokens: ["0x465B0673BbcECA807504FEB129d67576c698c649"],
    },
    "3crv_rc_armor_0.1_dai_2021_7_31+3crv": {
      pool: "0x8CAdb80062D6EA09b6d480cB3F955cb7F915b2C7",
      lpToken: "0x8CAdb80062D6EA09b6d480cB3F955cb7F915b2C7",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "rc_armor_0.1_dai_2021_7_31+3crv": {
      pool: "0x8CAdb80062D6EA09b6d480cB3F955cb7F915b2C7",
      lpToken: "0x8CAdb80062D6EA09b6d480cB3F955cb7F915b2C7",
      tokens: ["0x465B0673BbcECA807504FEB129d67576c698c649", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "usdf_usdf+3crv": {
      pool: "0x6E386F8E746af332d18f5c21F3369835C9c5DB16",
      lpToken: "0x6E386F8E746af332d18f5c21F3369835C9c5DB16",
      tokens: ["0x92FC8E6EfdF389e2527d14393b15F543f9a03420"],
    },
    "3crv_usdf+3crv": {
      pool: "0x6E386F8E746af332d18f5c21F3369835C9c5DB16",
      lpToken: "0x6E386F8E746af332d18f5c21F3369835C9c5DB16",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "usdf+3crv": {
      pool: "0x6E386F8E746af332d18f5c21F3369835C9c5DB16",
      lpToken: "0x6E386F8E746af332d18f5c21F3369835C9c5DB16",
      tokens: ["0x92FC8E6EfdF389e2527d14393b15F543f9a03420", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "2-nusd_nusd+3crv": {
      pool: "0x57EB6fbE61216d9f8c7c09Ad1EE5a3023747244b",
      lpToken: "0x57EB6fbE61216d9f8c7c09Ad1EE5a3023747244b",
      tokens: ["0x1BEf2e5DE862034Fb0ed456DF59d29Ecadc9934C"],
    },
    "2-3crv_nusd+3crv": {
      pool: "0x57EB6fbE61216d9f8c7c09Ad1EE5a3023747244b",
      lpToken: "0x57EB6fbE61216d9f8c7c09Ad1EE5a3023747244b",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "2-nusd+3crv": {
      pool: "0x57EB6fbE61216d9f8c7c09Ad1EE5a3023747244b",
      lpToken: "0x57EB6fbE61216d9f8c7c09Ad1EE5a3023747244b",
      tokens: ["0x1BEf2e5DE862034Fb0ed456DF59d29Ecadc9934C", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "ousd_ousd+3crv": {
      pool: "0x87650D7bbfC3A9F10587d7778206671719d9910D",
      lpToken: "0x87650D7bbfC3A9F10587d7778206671719d9910D",
      tokens: ["0x2A8e1E676Ec238d8A992307B495b45B3fEAa5e86"],
    },
    "3crv_ousd+3crv": {
      pool: "0x87650D7bbfC3A9F10587d7778206671719d9910D",
      lpToken: "0x87650D7bbfC3A9F10587d7778206671719d9910D",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "ousd+3crv": {
      pool: "0x87650D7bbfC3A9F10587d7778206671719d9910D",
      lpToken: "0x87650D7bbfC3A9F10587d7778206671719d9910D",
      tokens: ["0x2A8e1E676Ec238d8A992307B495b45B3fEAa5e86", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "dsu_dsu+3crv": {
      pool: "0x6eC80df362d7042c50D4469bcfbc174C9dd9109a",
      lpToken: "0x6eC80df362d7042c50D4469bcfbc174C9dd9109a",
      tokens: ["0x605D26FBd5be761089281d5cec2Ce86eeA667109"],
    },
    "3crv_dsu+3crv": {
      pool: "0x6eC80df362d7042c50D4469bcfbc174C9dd9109a",
      lpToken: "0x6eC80df362d7042c50D4469bcfbc174C9dd9109a",
      tokens: ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
    "dsu+3crv": {
      pool: "0x6eC80df362d7042c50D4469bcfbc174C9dd9109a",
      lpToken: "0x6eC80df362d7042c50D4469bcfbc174C9dd9109a",
      tokens: ["0x605D26FBd5be761089281d5cec2Ce86eeA667109", "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
    },
  },
  CurveTokens: {
    hcrv: {
      address: "0xb19059ebb43466C323583928285a49f558E572Fd",
      pool: "0x4CA9b3063Ec5866A4B82E437059D2C43d1be596F",
      swap: true,
      old: false,
    },
    "obtc+sbtcCrv": {
      address: "0x2fE94ea3d5d4a175184081439753DE15AeF9d614",
      pool: "0xd5BCf53e2C81e1991570f33Fa881c49EEa570C8D",
      old: false,
    },
    "tbtc+sbtcCrv": {
      address: "0x64eda51d3Ad40D56b9dFc5554E06F94e1Dd786Fd",
      pool: "0xaa82ca713D94bBA7A89CEAB55314F9EfFEdDc78c",
      old: false,
    },
    crvrenwbtc: {
      address: "0x49849C98ae39Fff122806C06791Fa73784FB3675",
      pool: "0x93054188d876f558f4a66B2EF1d97d16eDf0895B",
      swap: true,
      old: true,
    },
    stecrv: {
      address: "0x06325440D014e39736583c165C2963BA99fAf14E",
      pool: "0xDC24316b9AE028F1497c275EB9192a3Ea0f67022",
      swap: true,
      old: false,
    },
    husd3crv: {
      address: "0x5B5CFE992AdAC0C9D48E05854B2d91C73a003858",
      pool: "0x0a53FaDa2d943057C47A301D25a4D9b3B8e01e8E",
      old: false,
    },
    ycrv: {
      address: "0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8",
      pool: "0xbBC81d23Ea2c3ec7e56D39296F0cbB648873a5d3",
      old: true,
    },
    "3crv": {
      address: "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490",
      pool: "0xbEbc44782C7dB0a1A60Cb6fe97d0b483032FF1C7",
      swap: true,
      old: false,
    },
    crv_compound: {
      address: "0x845838DF265Dcd2c412A1Dc9e959c7d08537f8a2",
      pool: "0xeB21209ae4C2c9FF2a86ACA31E123764A3B6Bc06",
      old: true,
    },
    crv_busd: {
      address: "0x3B3Ac5386837Dc563660FB6a0937DFAa5924333B",
      pool: "0xb6c057591E073249F2D9D88Ba59a46CFC9B59EdB",
      old: true,
    },
    usdn3crv: {
      address: "0x4f3E8F405CF5aFC05D68142F3783bDfE13811522",
      pool: "0x35796DAc54f144DFBAD1441Ec7C32313A7c29F39",
      old: false,
    },
    crv_eurs: {
      address: "0x194eBd173F6cDacE046C53eACcE9B953F28411d1",
      pool: "0x0Ce6a5fF5217e38315f87032CF90686C96627CAA",
      swap: true,
      old: false,
    },
    gusd3crv: {
      address: "0xD2967f45c4f384DEEa880F807Be904762a3DeA07",
      pool: "0x64448B78561690B70E17CBE8029a3e5c1bB7136e",
      old: false,
    },
    ust3crv: {
      address: "0x94e131324b6054c0D789b190b2dAC504e4361b53",
      pool: "0xB0a0716841F2Fc03fbA72A891B8Bb13584F52F2d",
      old: false,
    },
  },
};

export default contracts;
