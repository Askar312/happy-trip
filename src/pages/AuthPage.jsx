import React from "react";
import Login from "../components/Login/Login";

import { useAuth } from "../contexts/AuthContext";
import HomePage from "./HomePage";

const AuthPage = () => {
  const { user } = useAuth();
  return <>{user ? <HomePage /> : <Login />}</>;
};

export default AuthPage;
