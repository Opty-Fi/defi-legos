import ComptrollerAbi from "./abi/Comptroller.json";
import CompoundPriceOracleAbi from "./abi/CompoundPriceOracle.json";
import CTokenAbi from "./abi/CToken.json";
import CEtherAbi from "./abi/CEther.json";
import CompoundAbi from "./abi/Compound.json";

const contracts = {
  cToken: { abi: CTokenAbi },
  CompoundAbi,
  comptroller: {
    address: "0x3d9819210a31b4961b30ef54be2aed79b9c9cd3b",
    abi: ComptrollerAbi,
  },
  priceOracle: {
    address: "0xDDc46a3B076aec7ab3Fc37420A8eDd2959764Ec4",
    abi: CompoundPriceOracleAbi,
  },
  pools: {
    dai: {
      pool: "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
      lpToken: "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
      tokens: ["0x6b175474e89094c44da98b954eedeac495271d0f"],
    },
    usdc: {
      pool: "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
      lpToken: "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
      tokens: ["0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"],
    },
    usdt: {
      pool: "0xf650C3d88D12dB855b8bf7D11Be6C55A4e07dCC9",
      lpToken: "0xf650C3d88D12dB855b8bf7D11Be6C55A4e07dCC9",
      tokens: ["0xdac17f958d2ee523a2206206994597c13d831ec7"],
    },
    zrx: {
      pool: "0xb3319f5d18bc0d84dd1b4825dcde5d5f7266d407",
      lpToken: "0xb3319f5d18bc0d84dd1b4825dcde5d5f7266d407",
      tokens: ["0xe41d2489571d322189246dafa5ebde1f4699f498"],
    },
    uni: {
      pool: "0x35a18000230da775cac24873d00ff85bccded550",
      lpToken: "0x35a18000230da775cac24873d00ff85bccded550",
      tokens: ["0x1f9840a85d5af5bf1d1762f925bdaddc4201f984"],
    },
    bat: {
      pool: "0x6C8c6b02E7b2BE14d4fA6022Dfd6d75921D90E4E",
      lpToken: "0x6C8c6b02E7b2BE14d4fA6022Dfd6d75921D90E4E",
      tokens: ["0x0D8775F648430679A709E98d2b0Cb6250d2887EF"],
    },
    comp: {
      pool: "0x70e36f6bf80a52b3b46b3af8e106cc0ed743e8e4",
      lpToken: "0x70e36f6bf80a52b3b46b3af8e106cc0ed743e8e4",
      tokens: ["0xc00e94Cb662C3520282E6f5717214004A7f26888"],
    },
    eth: {
      pool: "0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5",
      lpToken: "0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5",
      tokens: ["0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"],
    },
    wbtc2: {
      pool: "0xccf4429db6322d5c611ee964527d42e5d685dd6a",
      lpToken: "0xccf4429db6322d5c611ee964527d42e5d685dd6a",
      tokens: ["0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599"],
    },
    wbtc: {
      pool: "0xC11b1268C1A384e55C48c2391d8d480264A3A7F4",
      lpToken: "0xC11b1268C1A384e55C48c2391d8d480264A3A7F4",
      tokens: ["0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599"],
    },
    tusd: {
      pool: "0x12392f67bdf24fae0af363c24ac620a2f67dad86",
      lpToken: "0x12392f67bdf24fae0af363c24ac620a2f67dad86",
      tokens: ["0x0000000000085d4780B73119b644AE5ecd22b376"],
    },
    link: {
      pool: "0xFAce851a4921ce59e912d19329929CE6da6EB0c7",
      lpToken: "0xFAce851a4921ce59e912d19329929CE6da6EB0c7",
      tokens: ["0x514910771AF9Ca656af840dff83E8264EcF986CA"],
    },
    rep: {
      pool: "0x158079Ee67Fce2f58472A96584A73C7Ab9AC95c1",
      lpToken: "0x158079Ee67Fce2f58472A96584A73C7Ab9AC95c1",
      tokens: ["0x1985365e9f78359a9b6ad760e32412f4a445e862"],
    },
    sai: {
      pool: "0xf5dce57282a584d2746faf1593d3121fcac444dc",
      lpToken: "0xf5dce57282a584d2746faf1593d3121fcac444dc",
      tokens: ["0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359"],
    },
  },
  cEther: {
    decimals: 8,
    address: "0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5",
    abi: CEtherAbi,
  },
  cDAI: {
    decimals: 8,
    address: "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
    abi: CTokenAbi,
  },
  cSAI: {
    decimals: 8,
    address: "0xf5dce57282a584d2746faf1593d3121fcac444dc",
    abi: CTokenAbi,
  },
  cBAT: {
    decimals: 8,
    address: "0x6c8c6b02e7b2be14d4fa6022dfd6d75921d90e4e",
    abi: CTokenAbi,
  },
  cZRX: {
    decimals: 8,
    address: "0xb3319f5d18bc0d84dd1b4825dcde5d5f7266d407",
    abi: CTokenAbi,
  },
  cUSDC: {
    decimals: 8,
    address: "0x39aa39c021dfbae8fac545936693ac917d5e7563",
    abi: CTokenAbi,
  },
  cREP: {
    decimals: 8,
    address: "0x158079ee67fce2f58472a96584a73c7ab9ac95c1",
    abi: CTokenAbi,
  },
  cWBTC: {
    decimals: 8,
    address: "0xc11b1268c1a384e55c48c2391d8d480264a3a7f4",
    abi: CTokenAbi,
  },
};

export default contracts;
