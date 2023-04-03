import React, { useState } from "react";
import MainLayout from "../components/MainLayout";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  const [dashboardHeader, setDashboardHeader] = useState("Dashboard");
  return (
    <div class="container-fluid vh-100">
      <div class="row">
        <div class="col-sm-4 col-lg-2 border bg-light vh-100">
          <div class="pt-3 fs-5 w-100">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a
                  onClick={() => setDashboardHeader("Dashboard")}
                  class={`nav-link ${
                    dashboardHeader == "Dashboard"
                      ? "bg-danger text-white"
                      : "text-danger"
                  } `}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={() => setDashboardHeader("Launch NFT Reward")}
                  class={`nav-link  ${
                    dashboardHeader == "Launch NFT Reward"
                      ? "bg-danger text-white"
                      : "text-danger"
                  }`}
                >
                  Launch NFT Reward
                </a>
              </li>
              <li>
                <a
                  onClick={() => setDashboardHeader("Fungible Tokens")}
                  class={`nav-link  ${
                    dashboardHeader == "Fungible Tokens"
                      ? "bg-danger text-white"
                      : "text-danger"
                  }`}
                >
                  Fungible Tokens
                </a>
              </li>
              <li>
                <a
                  onClick={() => setDashboardHeader("Mint Receipt")}
                  class={`nav-link  ${
                    dashboardHeader == "Mint Receipt"
                      ? "bg-danger text-white"
                      : "text-danger"
                  }`}
                >
                  Mint Receipt
                </a>
              </li>
              <li class="dropdown ">
                <a
                  class="nav-link text-danger dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Promotions
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item  text-danger" href="#">
                      Membership Program
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item  text-danger" href="#">
                      Create Coupons
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item  text-danger" href="#">
                      Start a Raffle
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item  text-danger" href="#">
                      Deploy Airdrop
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-sm-8 col-lg-10 px-5">
          <MainLayout header={dashboardHeader} />
        </div>
        {/* <Sidebar /> */}
      </div>
    </div>
  );
};

export default Dashboard;
