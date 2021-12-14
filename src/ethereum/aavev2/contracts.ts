import LendingPoolAddressesProviderAbi from "./abi/LendingPoolAddressProvider.json";
import PriceOracleAbi from "./abi/PriceOracle.json";
import ATokenAbi from "./abi/AToken.json";
import LendingPoolAddressProviderRegistryAbi from "./abi/LendingPoolAddressProviderRegistry.json";
import LendingPoolAbi from "./abi/LendingPool.json";
import AaveV2ProtocolDataProviderAbi from "./abi/AaveV2ProtocolDataProvider.json";
import AaveV2Abi from "./abi/AaveV2.json";
import AaveV2PriceOracleAbi from "./abi/AaveV2PriceOracle.json";
import AaveV2TokenAbi from "./abi/AaveV2Token.json";
import AaveV2LendingPoolAddressesProviderAbi from "./abi/AaveV2LendingPoolAddressesProvider.json";
import AaveV2LendingPoolAddressesProviderRegistryAbi from "./abi/AaveV2LendingPoolAddressProviderRegistry.json";

const contracts = {
  ATokenAbi,
  AaveV2: { abi: AaveV2Abi },
  AaveV2PriceOracle: { abi: AaveV2PriceOracleAbi },
  AaveV2Token: { abi: AaveV2TokenAbi },
  AaveV2LendingPoolAddressesProvider: { abi: AaveV2LendingPoolAddressesProviderAbi },
  AaveV2LendingPoolAddressesProviderRegistry: { abi: AaveV2LendingPoolAddressesProviderRegistryAbi },
  LendingPoolAddressesProvider: {
    abi: LendingPoolAddressesProviderAbi,
    address: "0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5",
  },
  LendingPoolAddressProviderRegistry: {
    abi: LendingPoolAddressProviderRegistryAbi,
    address: "0x52D306e36E3B6B02c153d0266ff0f85d18BCD413",
  },
  LendingPool: {
    abi: LendingPoolAbi,
    address: "0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9",
  },
  PriceOracle: {
    abi: PriceOracleAbi,
    address: "0xA50ba011c48153De246E5192C8f9258A2ba79Ca9",
  },
  AaveV2ProtocolDataProvider: {
    abi: AaveV2ProtocolDataProviderAbi,
    address: "0x057835Ad21a177dbdd3090bB1CAE03EaCF78Fc6d",
  },
  pools: {
    dai: {
      pool: "0x52D306e36E3B6B02c153d0266ff0f85d18BCD413",
      lpToken: "0x028171bCA77440897B824Ca71D1c56caC55b68A3",
      tokens: ["0x6b175474e89094c44da98b954eedeac495271d0f"],
    },
    usdc: {
      pool: "0x52D306e36E3B6B02c153d0266ff0f85d18BCD413",
      lpToken: "0xBcca60bB61934080951369a648Fb03DF4F96263C",
      tokens: ["0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"],
    },
    usdt: {
      pool: "0x52D306e36E3B6B02c153d0266ff0f85d18BCD413",
      lpToken: "0x3Ed3B47Dd13EC9a98b44e6204A523E766B225811",
      tokens: ["0xdac17f958d2ee523a2206206994597c13d831ec7"],
    },
    wbtc: {
      pool: "0x52D306e36E3B6B02c153d0266ff0f85d18BCD413",
      lpToken: "0x9ff58f4fFB29fA2266Ab25e75e2A8b3503311656",
      tokens: ["0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599"],
    },
    weth: {
      pool: "0x52D306e36E3B6B02c153d0266ff0f85d18BCD413",
      lpToken: "0x030bA81f1c18d280636F32af80b9AAd02Cf0854e",
      tokens: ["0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"],
    },
    susd: {
      pool: "0x52D306e36E3B6B02c153d0266ff0f85d18BCD413",
      lpToken: "0x6C5024Cd4F8A59110119C56f8933403A539555EB",
      tokens: ["0x57ab1ec28d129707052df4df418d58a2d46d5f51"],
    },
    tusd: {
      pool: "0x52D306e36E3B6B02c153d0266ff0f85d18BCD413",
      lpToken: "0x101cc05f4A51C0319f570d5E146a8C625198e636",
      tokens: ["0x0000000000085d4780B73119b644AE5ecd22b376"],
    },
    busd: {
      pool: "0x52D306e36E3B6B02c153d0266ff0f85d18BCD413",
      lpToken: "0xA361718326c15715591c299427c62086F69923D9",
      tokens: ["0x4Fabb145d64652a948d72533023f6E7A623C7C53"],
    },
    link: {
      pool: "0x52D306e36E3B6B02c153d0266ff0f85d18BCD413",
      lpToken: "0xa06bC25B5805d5F8d82847D191Cb4Af5A3e873E0",
      tokens: ["0x514910771AF9Ca656af840dff83E8264EcF986CA"],
    },
    knc: {
      pool: "0x52D306e36E3B6B02c153d0266ff0f85d18BCD413",
      lpToken: "0x39C6b3e42d6A679d7D776778Fe880BC9487C2EDA",
      tokens: ["0xdd974D5C2e2928deA5F71b9825b8b646686BD200"],
    },
    zrx: {
      pool: "0x52D306e36E3B6B02c153d0266ff0f85d18BCD413",
      lpToken: "0xDf7FF54aAcAcbFf42dfe29DD6144A69b629f8C9e",
      tokens: ["0xe41d2489571d322189246dafa5ebde1f4699f498"],
    },
    uni: {
      pool: "0x52D306e36E3B6B02c153d0266ff0f85d18BCD413",
      lpToken: "0xB9D7CB55f463405CDfBe4E90a6D2Df01C2B92BF1",
      tokens: ["0x1f9840a85d5af5bf1d1762f925bdaddc4201f984"],
    },
    bat: {
      pool: "0x52D306e36E3B6B02c153d0266ff0f85d18BCD413",
      lpToken: "0x05Ec93c0365baAeAbF7AefFb0972ea7ECdD39CF1",
      tokens: ["0x0D8775F648430679A709E98d2b0Cb6250d2887EF"],
    },
    mkr: {
      pool: "0x52D306e36E3B6B02c153d0266ff0f85d18BCD413",
      lpToken: "0xc713e5E149D5D0715DcD1c156a020976e7E56B88",
      tokens: ["0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2"],
    },
    yfi: {
      pool: "0x52D306e36E3B6B02c153d0266ff0f85d18BCD413",
      lpToken: "0x5165d24277cD063F5ac44Efd447B27025e888f37",
      tokens: ["0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e"],
    },
    usdp: {
      pool: "0x52D306e36E3B6B02c153d0266ff0f85d18BCD413",
      lpToken: "0x2e8F4bdbE3d47d7d7DE490437AeA9915D930F1A3",
      tokens: ["0x8E870D67F660D95d5be530380D0eC0bd388289E1"],
    },
    rai: {
      pool: "0x52D306e36E3B6B02c153d0266ff0f85d18BCD413",
      lpToken: "0xc9BC48c72154ef3e5425641a3c747242112a46AF",
      tokens: ["0x03ab458634910AaD20eF5f1C8ee96F1D6ac54919"],
    },
    dpi: {
      pool: "0x52D306e36E3B6B02c153d0266ff0f85d18BCD413",
      lpToken: "0x6F634c6135D2EBD550000ac92F494F9CB8183dAe",
      tokens: ["0x1494CA1F11D487c2bBe4543E90080AeBa4BA3C2b"],
    },
    frax: {
      pool: "0x52D306e36E3B6B02c153d0266ff0f85d18BCD413",
      lpToken: "0xd4937682df3C8aEF4FE912A96A74121C0829E664",
      tokens: ["0x853d955aCEf822Db058eb8505911ED77F175b99e"],
    },
    fei: {
      pool: "0x52D306e36E3B6B02c153d0266ff0f85d18BCD413",
      lpToken: "0x683923dB55Fead99A79Fa01A27EeC3cB19679cC3",
      tokens: ["0x956F47F50A910163D8BF957Cf5846D573E7f87CA"],
    },
    aave: {
      pool: "0x52D306e36E3B6B02c153d0266ff0f85d18BCD413",
      lpToken: "0xFFC97d72E13E01096502Cb8Eb52dEe56f74DAD7B",
      tokens: ["0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9"],
    },
    ampl: {
      pool: "0x52D306e36E3B6B02c153d0266ff0f85d18BCD413",
      lpToken: "0x1E6bb68Acec8fefBD87D192bE09bb274170a0548",
      tokens: ["0xD46bA6D942050d489DBd938a2C909A5d5039A161"],
    },
    bal: {
      pool: "0x52D306e36E3B6B02c153d0266ff0f85d18BCD413",
      lpToken: "0x272F97b7a56a387aE942350bBC7Df5700f8a4576",
      tokens: ["0xba100000625a3754423978a60c9317c58a424e3D"],
    },
    crv: {
      pool: "0x52D306e36E3B6B02c153d0266ff0f85d18BCD413",
      lpToken: "0x8dAE6Cb04688C62d939ed9B68d32Bc62e49970b1",
      tokens: ["0xD533a949740bb3306d119CC777fa900bA034cd52"],
    },
    enj: {
      pool: "0x52D306e36E3B6B02c153d0266ff0f85d18BCD413",
      lpToken: "0xaC6Df26a590F08dcC95D5a4705ae8abbc88509Ef",
      tokens: ["0xF629cBd94d3791C9250152BD8dfBDF380E2a3B9c"],
    },
    gusd: {
      pool: "0x52D306e36E3B6B02c153d0266ff0f85d18BCD413",
      lpToken: "0xD37EE7e4f452C6638c96536e68090De8cBcdb583",
      tokens: ["0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd"],
    },
    mana: {
      pool: "0x52D306e36E3B6B02c153d0266ff0f85d18BCD413",
      lpToken: "0xa685a61171bb30d4072B338c80Cb7b2c865c873E",
      tokens: ["0x0F5D2fB29fb7d3CFeE444a200298f468908cC942"],
    },
    ren: {
      pool: "0x52D306e36E3B6B02c153d0266ff0f85d18BCD413",
      lpToken: "0xCC12AbE4ff81c9378D670De1b57F8e0Dd228D77a",
      tokens: ["0x408e41876cCCDC0F92210600ef50372656052a38"],
    },
    renfil: {
      pool: "0x52D306e36E3B6B02c153d0266ff0f85d18BCD413",
      lpToken: "0x514cd6756CCBe28772d4Cb81bC3156BA9d1744aa",
      tokens: ["0xD5147bc8e386d91Cc5DBE72099DAC6C9b99276F5"],
    },
    snx: {
      pool: "0x52D306e36E3B6B02c153d0266ff0f85d18BCD413",
      lpToken: "0x35f6B052C598d933D69A4EEC4D04c73A191fE6c2",
      tokens: ["0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F"],
    },
    xsushi: {
      pool: "0x52D306e36E3B6B02c153d0266ff0f85d18BCD413",
      lpToken: "0xF256CC7847E919FAc9B808cC216cAc87CCF2f47a",
      tokens: ["0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272"],
    },
  },
};

export default contracts;
