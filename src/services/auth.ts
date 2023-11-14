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

async function signInUser(credentials: CreateUser) {
  const res = await post(`${BASE_URL}/users/sessions`, credentials);
  console.log("res", res);
  return res;
}

export { signUpUser, signInUser };