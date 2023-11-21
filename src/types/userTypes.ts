export interface User {
  id: number;
  email: string;
}

export interface ProtectedProps {
  isUser: boolean;
}

export interface AuthProps {
  setIsUser: React.Dispatch<React.SetStateAction<boolean>>;
}
