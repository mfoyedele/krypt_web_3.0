require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.alchemyapi.io/v2/8RnLbgdO2vgIi6aafSD7BCg8AtwL7HVB',
      accounts: [
        '76aada99908eabefd4e3dd31cbb3d03fcc9c4ec81bd83f19b5a9f0cf773e7e40',
      ],
    },
  },
};
