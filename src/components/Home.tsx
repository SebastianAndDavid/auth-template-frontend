import { HomeProps } from "../types/userTypes";

export default function Home({ user }: HomeProps) {
  console.log("user", user);
  return <div>Home</div>;
}
