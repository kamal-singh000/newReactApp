import React from "react";
import { useState } from "react";
import { getContractInstance } from "../helpers/functions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { web3 } from "../web3";
import { useAccount, useContract, useSigner } from "wagmi";

const SuccessPopUp = ({ txn }) => {
  return (
    <>
      Transaction Successful! Check your transaction{" "}
      <a
        href={`https://testnet.bscscan.com/tx/${txn}`}
        rel="noreferrer"
        target="_blank"
      >
        Click here
      </a>
    </>
  );
};

const ReedemCoupon = () => {
  const { address } = useAccount();

  const [couponCode, setCouponCode] = useState();

  const redeemCoupon = async () => {
    const couponContractInstance = await getContractInstance();
    console.log(couponContractInstance);
    console.log("address", address);
    await couponContractInstance.methods
      .redeemCoupon(couponCode)
      .send({ from: address })
      .on("transactionHash", (hash) => {
        // console.log("transaction hash : ", hash);
        toast.info("Transaction is Processing...");
      })
      .on("receipt", (receipt) => {
        console.log("on receipt ", receipt);
        toast.success(<SuccessPopUp txn={receipt.transactionHash} />);
      })
      .on("error", (error) => {
        console.log("on error ", error);
        toast.error("Transaction Failed!");
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
      <ToastContainer
        position="top-right"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default ReedemCoupon;
