import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Web3 from "web3";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import FungibleTokens from "./components/FungibleTokens";
import MintReceipt from "./components/MintReceipt";
import LaunchNFTReward from "./components/LaunchNFTReward";
import ReedemCoupon from "./components/ReedemCoupon";
import GetGiftCoupon from "./components/GetGiftCoupon";
let web3 = new Web3(Web3.givenProvider);

function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <Routes>
        <Route exact path="/" element={<MainLayout />} />
        <Route path="/redeemCoupon" element={<ReedemCoupon />} />
        <Route path="/launchNFTReward" element={<LaunchNFTReward />} />
        <Route path="/fungibleTokens" element={<FungibleTokens />} />
        <Route path="/getGiftCoupon" element={<GetGiftCoupon />} />
        <Route path="/mintReceipt" element={<MintReceipt />} />
      </Routes>
    </>
  );
}

export default App;
