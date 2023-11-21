import { useUser } from "../context/userContext";

export default function Home() {
  const [user] = useUser();
  console.log("user", user);
  return <div>Home</div>;
}
