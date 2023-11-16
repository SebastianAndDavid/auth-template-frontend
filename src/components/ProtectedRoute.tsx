import { Outlet, Navigate } from "react-router-dom";
import { UserProps } from "../types/userTypes";

export default function ProtectedRoute({ user }: UserProps) {
  if (!user) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
}
