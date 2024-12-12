import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element: Element, allowedRoles, exceptions }) => {
  const { userRole, userName } = useSelector((state) => ({
    userRole: state.user.role,
    userName: state.user.userName,
  }));

  return allowedRoles.includes(userRole) ||
    exceptions.find((name) => name === userName) ? (
    <Element />
  ) : (
    <Navigate to="/unauthorized" replace />
  );
};

export default PrivateRoute;
