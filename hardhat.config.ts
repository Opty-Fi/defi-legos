import { HardhatUserConfig } from "hardhat/config";

const config: HardhatUserConfig = {
  solidity: "0.6.12",
  paths: {
    artifacts: "./artifacts",
    cache: "./cache",
    sources: "./src",
  },
};

export default config;
