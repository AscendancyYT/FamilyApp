import "./App.css";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";
import DinnerPlans from "./components/DinnerPlans";
import Achievements from "./components/Achievements";
import Tasks from "./components/Tasks";
import { permissions } from "./auth";

function App() {
  const savedRole = localStorage.getItem("userRole");
  const [userRole, setUserRole] = useState(savedRole);

  const handleLogin = (role) => {
    setUserRole(role);
    localStorage.setItem("userRole", role);
  };

  const handleLogout = () => {
    setUserRole(null);
    localStorage.removeItem("userRole");
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              userRole ? (
                <Navigate to="/dashboard" />
              ) : (
                <Login onLogin={handleLogin} />
              )
            }
          />

          <Route
            path="/dashboard"
            element={<Dashboard userRole={userRole} onLogout={handleLogout} />}
          />

          <Route
            path="/products"
            element={
              <ProtectedRoute
                userRole={userRole}
                permission={
                  permissions.VIEW_PRODUCTS || permissions.ADD_PRODUCTS
                }
              >
                <Products userRole={userRole} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dinner"
            element={
              <ProtectedRoute
                userRole={userRole}
                permission={permissions.SET_DINNER || permissions.EAT_OUTSIDE}
              >
                <DinnerPlans userRole={userRole} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/achievements"
            element={
              <ProtectedRoute
                userRole={userRole}
                permission={permissions.PIN_ACHIEVEMENTS}
              >
                <Achievements userRole={userRole} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tasks"
            element={
              <ProtectedRoute
                userRole={userRole}
                permission={permissions.SET_TASKS || permissions.SEE_TASKS}
              >
                <Tasks userRole={userRole} />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
