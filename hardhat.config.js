require('dotenv').config();
require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-truffle5');
require('@nomiclabs/hardhat-etherscan');
require('hardhat-gas-reporter');
require('solidity-coverage');
require('@nomiclabs/hardhat-solhint');
require('hardhat-contract-sizer');
require('@openzeppelin/hardhat-upgrades');
require('hardhat-deploy');
require('hardhat-deploy-ethers');

const accounts = {
    mnemonic: process.env.MNEMONIC || "test test test test test test test test test test test junk",
}

module.exports = {
    solidity: {
        version: '0.6.12',
        settings: {
            optimizer: {
                enabled: true,
                runs: 200,
            },
        },
    },
    gasReporter: {
        currency: 'USD',
        enabled: false,
        gasPrice: 50,
    },
    networks: {
        mainnet: {
            url: `https://rpcapi.fantom.network`,
            chainId: 250,
            accounts: accounts
        },
        testnet: {
            url: `https://rpc.testnet.fantom.network`,
            chainId: 4002,
            accounts: accounts,
        },
        ropsten: {
            url: `https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161`,
            chainId: 3,
            accounts: accounts,
        },
        sparta: {
            url: `https://sparta-rpc.polis.tech`,
            accounts,
            chainId: 333888,
            live: true,
            saveDeployments: true,
            tags: ["staging"],
            gasPrice: 20000000000,
            gasMultiplier: 8,
            timeout: 100000
        },
        mumbai: {
            url: "https://rpc-mumbai.maticvigil.com/",
            accounts,
            chainId: 80001,
            live: true,
            saveDeployments: true,
            tags: ["staging"],
            gasMultiplier: 2,
        },
        coverage: {
            url: 'http://localhost:8555',
        },

        localhost: {
            url: `http://127.0.0.1:8545`
        },
    },
    namedAccounts: {
        deployer: {
            default: 1,
        },
        dev: {
            default: 0,
        },
    },
    etherscan: {
        apiKey: '46DD6NK19R2AZQQIJIY1FXR85HKM2XSNBE'
    }
};