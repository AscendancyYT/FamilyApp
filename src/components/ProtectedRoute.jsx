import React from 'react';
import { Navigate } from 'react-router-dom';
import { rolePermissions } from '../auth';

const ProtectedRoute = ({ userRole, permission, children }) => {
  // Check if userRole has the required permission
  if (rolePermissions[userRole]?.includes(permission)) {
    return children;
  }
  // If not, redirect to the dashboard or login
  return <Navigate to={userRole ? "/dashboard" : "/"} />;
};

export default ProtectedRoute;
