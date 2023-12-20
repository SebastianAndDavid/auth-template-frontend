import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { User } from "../types/userTypes";
import { verifyUser } from "../services/auth";

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

  async function verify() {
    const data = await verifyUser();
    if (data) setUser(data.data);
  }

  useEffect(() => {
    verify();
  }, []);

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
