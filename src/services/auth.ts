import { del, get, post } from "./request";

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
  return res;
}

async function verifyUser() {
  const res = await get(`${BASE_URL}/users/me`);
  return res;
}

async function logout() {
  const res = await del(`${BASE_URL}/users/sessions`);
  return res;
}

export { signUpUser, signInUser, verifyUser, logout };
