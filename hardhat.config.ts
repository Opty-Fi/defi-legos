import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";

const config: HardhatUserConfig = {
  solidity: "0.6.12",
  paths: {
    artifacts: "./artifacts",
    cache: "./cache",
    sources: "./src",
  },
};

export default config;
