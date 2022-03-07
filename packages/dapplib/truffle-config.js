require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict roast fortune street name raise noble hospital give civil army gasp'; 
let testAccounts = [
"0x02009a55aa9e64cb0e18dc95e38f549e87b79123c962477417ab8713c6ee0307",
"0x1aadda2cb55be628b72b8b76578e23a259c9f00e8ae8ec5d5f53749323235655",
"0x8a339292e5d12c00a31b919e5f0fcc020c5921ca33b2ae06f5850e882a8a4445",
"0xaa702329d64ac5aed066c3c46b8e62a5da6ebce584fee237d9bd3e308791a297",
"0x72a4a6a8446ee2f4d03639cf908b7e20cdad0b679e6db937c817882e76a97e38",
"0x3002cce4d53f82ee12463ca450f00198bf6197ffd4de01dcfccbc7bc9d99dc21",
"0x697d5ea9caf379aa9d0002f0f1f2c46f12a7a21be0e99ce5bab8534a488d1097",
"0x8fb097a81c29b1736f7b6cedb642f04dbcc36b03fe33e0bcac1992f3b5dbf9a6",
"0x9d5aa8cc6717986ba55f322cd7824abd91c04b9d3d18f2d5d40ea01620d0bdb4",
"0x1a935dd35ad60778ab72db2a012b855ee4eef37d346a6375aa32489e14ff4cc4"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

