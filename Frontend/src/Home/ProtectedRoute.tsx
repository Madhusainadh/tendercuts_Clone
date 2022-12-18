
import { Navigate } from "react-router-dom";

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
