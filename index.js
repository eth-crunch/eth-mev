// index.js
import { MetaMaskSDK } from "@metamask/sdk"

const MMSDK = new MetaMaskSDK({
  dappMetadata: {
    name: "Example Node.js Dapp",
  },
  infuraAPIKey: 0f8eaffc42534557973fdf35d5d858dd,
  // Other options.
})

const accounts = await MMSDK.connect()
const provider = MMSDK.getProvider()
provider.request({ method: "eth_accounts", params: [] })
