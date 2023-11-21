import { createContext } from "react";
import { User } from "../types/userTypes";

interface UserStateAndSetters {
  user: User | null;
}

interface UserProviderProps {
  children: React.ReactNode;
}

const UserContext = createContext<UserStateAndSetters | null>(null);

export default function UserProvider({ children }: UserProviderProps) {
  return <UserContext.Provider value={null}>{children}</UserContext.Provider>;
}
