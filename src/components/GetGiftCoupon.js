import React from "react";
import { useState } from "react";
import { getContractInstance } from "../helpers/functions";
import { web3 } from "../web3";
import { useAccount, useContract, useSigner } from "wagmi";
const GetGiftCoupon = () => {
  const { address } = useAccount();

  const [couponCode, setCouponCode] = useState();
  const [getGiftCoupon, setGetGiftCoupon] = useState(null);
  const giftCoupon = async () => {
    const couponContractInstance = await getContractInstance();
    console.log(couponContractInstance);
    console.log("address", address);
    let getGiftCoupon = await couponContractInstance.methods
      .getGiftCouponDetails(couponCode)
      .call();
    //   .on("transactionHash", (hash) => {
    //     console.log("transaction hash : ", hash);
    //   })
    //   .on("receipt", (receipt) => {
    //     console.log("on receipt ", receipt);
    //   })
    //   .on("error", (error) => {
    //     console.log("on error ", error);
    //   });
    setGetGiftCoupon(getGiftCoupon);
    console.log("getGiftCoupon", getGiftCoupon);
  };
  return (
    <>
      <div
        style={{
          margin: "50px 200px auto 200px",
        }}
      >
        <div>
          <h3>Gift coupon</h3>
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
            onClick={() => giftCoupon()}
          >
            {" "}
            Get Gift Coupon{" "}
          </button>
        </div>
        <div className="container mt-5">
          {getGiftCoupon && (
            <div className="row fs-5 border">
              <div className="col-6 p-0">
                <p className="bg-secondary text-light px-3  m-0">title</p>
                <p className="bg-light px-3  m-0">cost</p>
                <p className="bg-secondary text-light px-3  m-0">validity</p>
                <p className="bg-light px-3  m-0">code</p>
                <p className="bg-secondary text-light px-3  m-0">creator</p>
                <p className="bg-light px-3  m-0">redeemedBy</p>
              </div>
              <div className="col-6 p-0">
                <p className="bg-secondary text-light px-3  m-0">
                  {getGiftCoupon?.title ? getGiftCoupon?.title : "No title"}
                </p>
                <p className="bg-light px-3  m-0">{getGiftCoupon?.cost}</p>
                <p className="bg-secondary text-light px-3  m-0">
                  {getGiftCoupon?.validity}
                </p>
                <p className="bg-light px-3  m-0">{getGiftCoupon?.code}</p>
                <p className="bg-secondary text-light px-3  m-0">
                  {getGiftCoupon?.creator}
                </p>
                <p className="bg-light px-3  m-0">
                  {getGiftCoupon?.redeemedBy}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default GetGiftCoupon;
