require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace industry frame solution firm cruise million punch grace hen foster secret'; 
let testAccounts = [
"0x07e9cb832dda86696106e7ce1aa305f675a1cc2f84948ec7bc0fcdd384f087b7",
"0x9e27fd30025dd387532a59a9c4c0f4320c223c246ccb365c3aba58d5fc538ee7",
"0x8e55c52505b00db13795c31a1b21c3218d77d5d522c036956be6626abd0c46f5",
"0xe498856424b54359708d2616bbc775951172af3c8d0c80818e2f4fced2d85516",
"0x51f48203ea7012525481b627280d5e6f38bfc220a0de048074a5c5ca279d9271",
"0x6c71a363102c2754124a5a8512282ccf5271ded30c24979dcf5f5b16458b66c6",
"0x50185c9df22d43b4e59d30267e9b4c78345df73eadcdddbd0ec2420e23f06eec",
"0xe35b24e145f0bcd0c929aa71c560a25d7827283a9750de0abf148bb47957fdc7",
"0x9d092fbf9f0e233969096999ab253fd5cbf56fb978f25098c1528362ffe7f6eb",
"0x846e7f39aa5756d0ab15db5841130b99c253b19a7ff76f861630fdca8479c91f"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
