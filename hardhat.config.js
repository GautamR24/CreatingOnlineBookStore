

require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  
  solidity: "0.8.15",
  networks: {
    goerli: {
      url: jsonRpsLink,
      accounts: [privkey],
    }

  },
  etherscan: {
    apiKey: etherApi //polygon apiKey

  },
};
