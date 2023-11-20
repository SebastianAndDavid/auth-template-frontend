export interface User {
  id: number;
  email: string;
  password: string;
}

export interface ProtectedProps {
  // user?: User;
  isUser: boolean;
}

export interface AuthProps {
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  setIsUser: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface HomeProps {
  user?: User;
}
