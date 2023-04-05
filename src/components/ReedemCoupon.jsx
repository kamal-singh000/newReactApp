import React from "react";
import { useState } from "react";
import { getContractInstance } from "../helpers/functions";
import { web3 } from "../web3";
import { useAccount, useContract, useSigner } from "wagmi";
const ReedemCoupon = () => {
  const { address } = useAccount();

  const [couponCode, setCouponCode] = useState();
  const [couponData, setCouponData] = useState([]);

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
        console.log("on error ", error);
      });
  };
  const getGiftCoupon = async () => {
    const couponContractInstance = await getContractInstance();
    console.log(couponContractInstance);
    console.log("address", address);
    let data = await couponContractInstance.methods
      .getGiftCouponDetails(couponCode)
      .call();
    setCouponData(data);
    //   .send({ from: address })
    //   .on("transactionHash", (hash) => {
    //     console.log("transaction hash : ", hash);
    //   })
    //   .on("receipt", (receipt) => {
    //     console.log("on receipt ", receipt);
    //   })
    //   .on("error", (error) => {
    //     console.log("on error ", error);
    //   });
  };
  console.log("data", couponData.creator);
  return (
    <>
      <div
        style={{
          margin: "50px 200px auto 200px",
        }}
      >
        <div>
          <h3>GiftCoupon Deatails</h3>
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
            onClick={() => getGiftCoupon()}
          >
            {" "}
            getGiftCoupon{" "}
          </button>
          <br />
          <br />
          <table class="table table-sm">
            <thead>
              <tr>
                <th scope="col">title</th>
                <th scope="col">Cost</th>
                <th scope="col">Creator</th>
                <th scope="col">Code</th>
                <th scope="col">RedeemBy</th>
                <th scope="col">Validity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{couponData.title}</td>
                <td>{couponData.cost}</td>
                <td>{couponData.creator}</td>
                <td>{couponData.code}</td>
                <td>{couponData.redeemedBy}</td>
                <td>{couponData.validity}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div
        style={{
          margin: "50px 200px auto 200px",
        }}
      >
        <div>
          <h3>Redeem coupon</h3>
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
