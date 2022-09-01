import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.16",
  networks: {
    hardhat: {
      initialBaseFeePerGas: 0,
      mining: {
        auto: false,
        interval: 5000,
      },
    },
  },
};

export default config;
