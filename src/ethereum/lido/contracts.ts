import LidoDepositAbi from "./abi/LidoDeopsit.json";

const contracts = {
  LidoDeposit: { abi: LidoDepositAbi },
  pools: {
    eth: {
      pool: "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84",
      lpToken: "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84",
      tokens: ["0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"],
      rewardTokens: ["0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32"],
      swap: "0xDC24316b9AE028F1497c275EB9192a3Ea0f67022",
    },
  },
};

export default contracts;
