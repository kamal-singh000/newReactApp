import React from "react";

const Sidebar = () => {
  return (
    <>
      <div class="pt-3 fs-5 w-100 ">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a href="#" class="nav-link bg-danger active text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#" class="nav-link text-danger">
              Launch NFT Reward
            </a>
          </li>
          <li>
            <a href="#" class="nav-link text-danger">
              Fungible Tokens
            </a>
          </li>
          <li>
            <a href="#" class="nav-link text-danger">
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
    </>
  );
};

export default Sidebar;
