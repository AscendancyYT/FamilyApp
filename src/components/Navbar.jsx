import React from 'react';
import { Link } from 'react-router-dom';
import { permissions, rolePermissions } from '../auth';

const Navbar = ({ userRole }) => (
  <nav className="navbar">
    {/* Render Product Link for roles that have permission to VIEW_PRODUCTS */}
    {rolePermissions[userRole]?.includes(permissions.VIEW_PRODUCTS) && (
      <Link to="/products">Products</Link>
    )}

    {/* Render Dinner Plans Link for roles that can SET_DINNER or EAT_OUTSIDE */}
    {(rolePermissions[userRole]?.includes(permissions.SET_DINNER) ||
      rolePermissions[userRole]?.includes(permissions.EAT_OUTSIDE)) && (
      <Link to="/dinner">Dinner Plans</Link>
    )}

    {/* Render Achievements Link only for Children */}
    {rolePermissions[userRole]?.includes(permissions.PIN_ACHIEVEMENTS) && (
      <Link to="/achievements">Achievements</Link>
    )}

    {/* Render Tasks Link for Parents (Mom and Dad) */}
    {(rolePermissions[userRole]?.includes(permissions.SET_TASKS)) && (
      <Link to="/tasks">Tasks</Link>
    )}
  </nav>
);

export default Navbar;
