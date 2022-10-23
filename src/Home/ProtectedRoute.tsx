import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "./UserAuthContext";
type prop = {
  children: String;
};
function ProtectedRoute({ children }: prop) {
  const user = localStorage.getItem("users");
  if (!user) {
    return <Navigate to={"/"} />;
  }
  return children;
}

export default ProtectedRoute;
