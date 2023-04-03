import Web3 from "web3";

let web3 = null;

const metamaskConnectInit = () => {
  // Check if Web3 has been injected by the browser (Mist/MetaMask).
  return new Promise((resolve, reject) => {
    if (typeof window.web3 !== "undefined") {
      // Use Mist/MetaMask's provider.
      web3 = new Web3(window.web3.currentProvider);
      localStorage.setItem("walletConnect", 0);
      resolve(true);
    } else {
      // Handle the case where the user doesn't have web3. Probably
      // show them a message telling them to install Metamask in
      // order to use the app.
      web3 = new Web3(
        new Web3.providers.HttpProvider(
          //'https://bsc-dataseed.binance.org/'
          "https://data-seed-prebsc-1-s1.binance.org:8545/"
        )
      );
      reject(false);
    }
  });
};

if (!web3) {
  metamaskConnectInit();
}

export { web3, metamaskConnectInit };
