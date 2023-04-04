import React from "react";
import { useState } from "react";
import { getContractInstance } from "../helpers/functions";
import { web3 } from "../web3";
import { useAccount, useContract, useSigner } from "wagmi";
const ReedemCoupon = () => {
  const { address, isConnecting, isDisconnected } = useAccount();

  const [couponCode, setCouponCode] = useState();

  const redeemCoupon = async () => {
    const couponContractInstance = await getContractInstance();
    console.log(couponContractInstance);
    console.log("address", address);
    await couponContractInstance.methods
      .redeemCoupon(couponCode)
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
            <label for="CouponCode">CouponCode:</label>
            <input
              class="form-control"
              placeholder="Enter CouponCode"
              id="CouponCode"
              type={"text"}
              name="cost"
              onChange={(e) => setCouponCode(e.target.value)}
            />
          </div>
          <br />
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => redeemCoupon()}
          >
            {" "}
            Redeem Coupon{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default ReedemCoupon;
