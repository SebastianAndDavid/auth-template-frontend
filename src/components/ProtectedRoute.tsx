import { Outlet, Navigate } from "react-router-dom";
import { useUser } from "../context/userContext";

export default function ProtectedRoute() {
  const [user] = useUser();

  console.log("user in protected", user);
  if (user) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
}
