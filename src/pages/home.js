import { Web3Button } from "@web3modal/react";
import { useState } from "react";
import { getContractInstance } from "../helpers/functions";
import { web3 } from "../web3";
import { useAccount, useContract, useSigner } from "wagmi";

function HomePage() {
  const { address, isConnecting, isDisconnected } = useAccount();

  const [cost, setCost] = useState();
  const [validity, setValidity] = useState();
  const [title, setTitle] = useState();
  const [noOfCoupon, setNoOfCoupon] = useState();
  const createGiftCoupon = async () => {
    const couponContractInstance = await getContractInstance();
    console.log(couponContractInstance);
    console.log("address", address);
    await couponContractInstance.methods
      .createGiftCoupon(web3.utils.toWei(cost), validity, title, noOfCoupon)
      .send({ from: address })
      .on("transactionHash", (hash) => {
        console.log("transaction hash : ", hash);
      })
      .on("receipt", (receipt) => {
        console.log("on receipt ", receipt);
      })
      .on("error", (error) => {
        console.log("on error ", error); // error.code===4001 user reject the metamask transaction
      });
  };
  return (
    <>
      <Web3Button />
      <div>
        <h3>Create coupon</h3>
        <label for="cost">Cost</label>
        <input
          id="cost"
          type={"text"}
          name="cost"
          onChange={(e) => setCost(e.target.value)}
        />
        <label for="validity">validity:</label>

        <input
          id="Validity"
          type={"text"}
          name="validity"
          onChange={(e) => setValidity(e.target.value)}
        />
        <label for="title">title:</label>

        <input
          id="Title"
          type={"text"}
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label for="no of coupon">no of coupon:</label>

        <input
          id="No of coupon"
          type={"text"}
          name="no of coupon"
          onChange={(e) => setNoOfCoupon(e.target.value)}
        />
        <button type="button" onClick={() => createGiftCoupon()}>
          {" "}
          Create Coupon{" "}
        </button>
      </div>
    </>
  );
}

export default HomePage;
