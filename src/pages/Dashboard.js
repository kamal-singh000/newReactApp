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
    </nav>
  );
};

export default Dashboard;
