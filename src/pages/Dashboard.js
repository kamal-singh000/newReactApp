import { NavLink } from "react-router-dom";
const Dashboard = () => {
  return (
    <div
      style={{
        display: "row",
        background: "rgb(220,20,60)",
        padding: "0px",
        fontSize: "20px",
        width: "225px",
      }}
      // className="col-md-3 d-none d-md-block bg-light sidebar"
    >
      <div style={{ margin: "10px" }}>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "greenyellow" : "white",
          })}
        >
          Home
        </NavLink>
      </div>
      <div style={{ margin: "10px" }}>
        <NavLink
          to="/launchNFTReward"
          style={({ isActive }) => ({
            color: isActive ? "greenyellow" : "white",
          })}
        >
          Launch NFT Reward
        </NavLink>
      </div>
      <div style={{ margin: "10px" }}>
        <NavLink
          to="/fungibleTokens"
          style={({ isActive }) => ({
            color: isActive ? "greenyellow" : "white",
          })}
        >
          Fungible Tokens
        </NavLink>
      </div>
      <div style={{ margin: "10px" }}>
        <NavLink
          to="/mintReceipt"
          style={({ isActive }) => ({
            color: isActive ? "greenyellow" : "white",
          })}
        >
          Mint Receipt
        </NavLink>
      </div>
    </div>
  );
};

export default Dashboard;
