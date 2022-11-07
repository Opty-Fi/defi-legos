import AdapterAbi from "./abi/Adapter.json";
import AdapterBorrowAbi from "./abi/AdapterBorrow.json";
import AdapterFullAbi from "./abi/AdapterFull.json";
import AdapterHarvestRewardAbi from "./abi/AdapterInvestLimit.json";
import AdapterStakingAbi from "./abi/AdapterStaking.json";
import AdapterStakingCurveAbi from "./abi/AdapterStakingCurve.json";
import AdapterV2 from "./abi/AdapterV2.json";

const contracts = {
  Adapter: { abi: AdapterAbi },
  AdapterBorrow: { abi: AdapterBorrowAbi },
  AdapterFull: { abi: AdapterFullAbi },
  AdapterHarvestReward: { abi: AdapterHarvestRewardAbi },
  AdapterStaking: { abi: AdapterStakingAbi },
  AdapterStakingCurve: { abi: AdapterStakingCurveAbi },
  AdapterV2: { abi: AdapterV2 },
};

export default contracts;
