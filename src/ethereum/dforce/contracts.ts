import DForceStake from "./abi/DForceStake.json";
import DForceDeposit from "./abi/DForceDeposit.json";

const contracts = {
    USDT_STAKING_VAULT: {
        abi: DForceStake,
        address: "0x324EebDAa45829c6A8eE903aFBc7B61AF48538df",
    },
    USDC_STAKING_VAULT: {
      abi: DForceStake,
      address: "0xB71dEFDd6240c45746EC58314a01dd6D833fD3b5",
    },
    DAI_STAKING_VAULT: {
    abi: DForceStake,
    address: "0xD2fA07cD6Cd4A5A96aa86BacfA6E50bB3aaDBA8B",
    },
    USDT_DEPOSIT_POOL: {
        abi: DForceDeposit,
        address: "0x868277d475E0e475E38EC5CdA2d9C83B5E1D9fc8",
    }, 
    USDC_DEPOSIT_POOL: {
      abi: DForceDeposit,
      address: "0x16c9cF62d8daC4a38FB50Ae5fa5d51E9170F3179",
    },
    DAI_DEPOSIT_POOL: {
    abi: DForceDeposit,
    address: "0x02285AcaafEB533e03A7306C55EC031297df9224",
  },
};

export default contracts;