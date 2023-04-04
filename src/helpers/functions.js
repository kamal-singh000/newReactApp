import { web3 } from "../web3";
import contractAbi from "../contractData/abi.json";
import getContractAddresses from "../contractData/address";

export async function getContractInstance() {
  const { couponContractAddress } = getContractAddresses();
  console.log(couponContractAddress);
  try {
    if (web3) {
      const contractInstance = await new web3.eth.Contract(
        contractAbi,
        couponContractAddress
      );
      return contractInstance;
    }
  } catch (error) {
    console.log(error);
  }
}
