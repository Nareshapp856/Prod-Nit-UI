import React from "react";
import { Outlet } from "react-router";

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md">
        <Outlet />
      </div>
    </div>
  );
}

export default Login;
