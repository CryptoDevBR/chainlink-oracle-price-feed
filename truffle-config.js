const HDWalletProvider = require('@truffle/hdwallet-provider')
require('dotenv').config()

const mnemonic = process.env.MNEMONIC
const infuraURL = process.env.RPC_URL

module.exports = {
    networks: {
        cldev: {
            host: '127.0.0.1',
            port: 8545,
            network_id: '*',
        },
        ganache: {
            host: '127.0.0.1',
            port: 7545,
            network_id: '*',
        },
        binance_testnet: {
            provider: () => new HDWalletProvider(mnemonic, 'https://data-seed-prebsc-1-s1.binance.org:8545'),
            network_id: 97,
            confirmations: 10,
            timeoutBlocks: 200,
            skipDryRun: true
        },
        kovan: {
            provider: () =>
                new HDWalletProvider({
                    mnemonic: {
                        phrase: mnemonic
                    },
                    providerOrUrl: infuraURL,
                    numberOfAddresses: 1,
                    shareNonce: true,
                }),
            network_id: '42',
            networkCheckTimeout: 10000000,
            // skipDryRun: - true if you don't want to test run the migration locally before the actual migration (default is false)
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '0.6.6',
        },
    },
}
