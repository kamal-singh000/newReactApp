import React from "react";
import { useState } from "react";
import { getContractInstance } from "../helpers/functions";
import { web3 } from "../web3";
import { useAccount, useContract, useSigner } from "wagmi";
const MainLayout = ({ header }) => {
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
      .createGiftCoupon(cost, validity, title, noOfCoupon)
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
      <div
        style={{
          margin: "50px 200px auto 200px",
        }}
      >
        <div>
          <h3>Create coupon</h3>
          <div class="form-group">
            <label for="cost">Cost:</label>
            <input
              class="form-control"
              placeholder="Enter cost"
              id="cost"
              type={"text"}
              name="cost"
              onChange={(e) => setCost(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="validity">validity:</label>
            <input
              class="form-control"
              placeholder="Validity"
              id="Validity"
              type={"text"}
              name="validity"
              onChange={(e) => setValidity(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="title">title:</label>
            <input
              class="form-control"
              placeholder="Enter title"
              id="Title"
              type={"text"}
              name="title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="no of coupon">no of coupon:</label>
            <input
              class="form-control"
              placeholder="No of coupon"
              id="No of coupon"
              type={"text"}
              name="no of coupon"
              onChange={(e) => setNoOfCoupon(e.target.value)}
            />
          </div>
          <br />
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => createGiftCoupon()}
          >
            {" "}
            Create Coupon{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
