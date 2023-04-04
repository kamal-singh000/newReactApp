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
let web3 = new Web3(Web3.givenProvider);

function App() {
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <Dashboard />
        <Routes>
          <Route exact path="/" element={<MainLayout />} />
          <Route path="/launchNFTReward" element={<LaunchNFTReward />} />
          <Route path="/fungibleTokens" element={<FungibleTokens />} />
          <Route path="/mintReceipt" element={<MintReceipt />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
