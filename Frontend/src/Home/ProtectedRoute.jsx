import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "./UserAuthContext";
// type prop = {
//   children: String;
// };
// type huru={
//   setname:Function;
//   name:string
// }
function ProtectedRoute({ children }) {
  const { name } = useUserAuth();
  
  if (!name) {
    return <Navigate to={"/"} />;
  }
  return children;
}

export default ProtectedRoute;
