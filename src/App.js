import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Web3 from "web3";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";

let web3 = new Web3(Web3.givenProvider);

function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <Routes>
        <Route path="/Dashboard" element={<MainLayout />} />
      </Routes>
      {/* <TrustWallet /> */}
    </>
  );
}

export default App;
