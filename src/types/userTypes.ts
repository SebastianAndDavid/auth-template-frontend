export interface User {
  id: number;
  email: string;
  password: string;
}

export interface UserProps {
  user?: User;
}
