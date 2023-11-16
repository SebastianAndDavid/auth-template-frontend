export interface User {
  id: number;
  email: string;
  password: string;
}

export interface AuthProps {
  user?: User;
}
