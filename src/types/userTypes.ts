export interface User {
  id: number;
  email: string;
  password: string;
}

export interface UserProps {
  user?: User;
}

export interface AuthProps {
  user?: User;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
}
