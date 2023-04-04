// import { services } from "../../services";
let networkId = 1;
// async function fetchNetworkId() {
//   networkId = await services.getNetworkId();
// }
// fetchNetworkId();

function getContractAddresses() {
  if (networkId === "0x4" || +networkId === 4)
    return {
      couponContractAddress: "0x5266fF551287e29a4515a68abE658EbcB9c08205", //"0x15Fde56337427cAD5fa777694D732Ac147De3614", //"0xF1c5F3925044B5180041321585754aA543aEC63d",
    };
  else if (+networkId === 1 || networkId === "0x1")
    return {
      couponContractAddress: "0x5266fF551287e29a4515a68abE658EbcB9c08205", //"0xF1c5F3925044B5180041321585754aA543aEC63d",
    };
  else
    return {
      couponContractAddress: "0x5266fF551287e29a4515a68abE658EbcB9c08205", //"0xF1c5F3925044B5180041321585754aA543aEC63d",
    };
}
export default getContractAddresses;
