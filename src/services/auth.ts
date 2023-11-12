import { post } from "./request";

interface CreateUser {
  email: string;
  password: string;
}

const BASE_URL = "http://localhost:8000";

async function signUpUser(credentials: CreateUser) {
  const res = await post(`${BASE_URL}/users`, credentials);
  return res;
}

export { signUpUser };
