import { createContext, useState } from "react";
import { User } from "../types/userTypes";

interface UserStateAndSetters {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

interface UserProviderProps {
  children: React.ReactNode;
}

const UserContext = createContext<UserStateAndSetters | null>(null);

export default function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  const stateAndSetters: UserStateAndSetters = {
    user,
    setUser,
  };

  return (
    <UserContext.Provider value={stateAndSetters}>
      {children}
    </UserContext.Provider>
  );
}
