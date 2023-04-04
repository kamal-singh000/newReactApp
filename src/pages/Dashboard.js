import { NavLink } from "react-router-dom";
const Dashboard = () => {
  return (
    <nav class="navbar navbar-dark bg-dark">
      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: isActive ? "greenyellow" : "white",
        })}
      >
        Home
      </NavLink>
      <NavLink
        to="/launchNFTReward"
        style={({ isActive }) => ({
          color: isActive ? "greenyellow" : "white",
        })}
      >
        Launch NFT Reward
      </NavLink>
      <NavLink
        to="/fungibleTokens"
        style={({ isActive }) => ({
          color: isActive ? "greenyellow" : "white",
        })}
      >
        Fungible Tokens
      </NavLink>
      <NavLink
        to="/mintReceipt"
        style={({ isActive }) => ({
          color: isActive ? "greenyellow" : "white",
        })}
      >
        Mint Receipt
      </NavLink>
      <li class="dropdown ">
        <NavLink
          class="nav-link text-danger dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Promotions
        </NavLink>
        <ul class="dropdown-menu">
          <li>
            <NavLink class="dropdown-item  text-danger">
              Membership Program
            </NavLink>
          </li>
          <li>
            <NavLink class="dropdown-item  text-danger">Create Coupons</NavLink>
          </li>
          <li>
            <NavLink class="dropdown-item  text-danger">
              Start NavLink Raffle
            </NavLink>
          </li>
          <li>
            <NavLink class="dropdown-item  text-danger">Deploy Airdrop</NavLink>
          </li>
        </ul>
      </li>
    </nav>
  );
};

export default Dashboard;
