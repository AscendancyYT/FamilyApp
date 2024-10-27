import React from "react";
import { Link } from "react-router-dom";

const Dashboard = ({ userRole, onLogout }) => {
  return (
    <div className="dashboard">
      <h2>Welcome to the Family Dashboard</h2>
      <p>Role: {userRole}</p>

      {userRole === "mom" && <Link to="/products">Products</Link>}
      {userRole === "dad" && <Link to="/products">View Needed Products</Link>}
      {userRole === "mom" && <Link to="/dinner">Dinner Plans</Link>}
      {userRole === "dad" && <Link to="/dinner">Set Eating Out</Link>}
      {userRole === "child" && <Link to="/achievements">Achievements</Link>}
      {(userRole === "mom" || userRole === "dad") && (
        <Link to="/tasks">Set Tasks</Link>
      )}
      {userRole === "child" && <Link to="/tasks"> View tasks </Link>}

      {/* <button onClick={onLogout}>Logout</button> */}
    </div>
  );
};

export default Dashboard;
