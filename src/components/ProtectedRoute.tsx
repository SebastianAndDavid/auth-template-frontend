import { Outlet, Navigate } from "react-router-dom";
import { ProtectedProps } from "../types/userTypes";

export default function ProtectedRoute({ isUser }: ProtectedProps) {
  console.log("isUser", isUser);
  if (!isUser) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
}
