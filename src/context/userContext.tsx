import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { User } from "../types/userTypes";

interface UserStateAndSetters {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
}

interface UserProviderProps {
  children: React.ReactNode;
}

const UserContext = createContext<UserStateAndSetters>({
  user: null,
  setUser: () => {},
} as UserStateAndSetters);

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

export function useUser() {
  const { user, setUser } = useContext(UserContext);
  return [user, setUser] as const;
}
