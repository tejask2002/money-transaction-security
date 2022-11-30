require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/yl9S1VSG5sDFSiECXdb5toRm4_Id6Srg',
      accounts: ['7b22fe916882dce0dbad6e00f90a323dc1006c188b9852b98e12a2d4d12b3c59'],
    },
  },
};