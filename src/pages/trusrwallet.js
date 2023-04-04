import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { arbitrum, mainnet, polygon, bscTestnet } from "wagmi/chains";
import HomePage from "./home";
import { useAccount, useContract, useSigner } from "wagmi";
import { useEffect } from "react";
const chains = [bscTestnet];
const projectId = "2ed39f2a18f131b74e1e7404048442ab";

const { provider } = configureChains(chains, [w3mProvider({ projectId })]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider,
});
const ethereumClient = new EthereumClient(wagmiClient, chains);
console.log(ethereumClient, useAccount);
function TrustWallet() {
  const { address, isConnecting, isDisconnected } = useAccount();
  useEffect(() => {
    if (address) {
      mintNFT(address);
    }
  }, [address]);
  const mintNFT = (address) => {};
  console.log(address);
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <HomePage />
      </WagmiConfig>

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
}

export default TrustWallet;
