import { useState } from "react";
import "./App.css";
import { signInUser, signUpUser } from "./services/auth";

interface User {
  id: number;
  email: string;
}

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sessionsEmail, setSessionsEmail] = useState("");
  const [sessionsPassword, setSessionsPassword] = useState("");
  const [user, setUser] = useState<User | null>(null);

  async function handleSignUp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = await signUpUser({ email, password });
    setUser(data.data);
    return data;
  }

  console.log("user", user);

  async function handleSignIn() {
    const data = await signInUser({
      email: sessionsEmail,
      password: sessionsPassword,
    });
    console.log("sign in", data);
    return data;
  }

  return (
    <>
      <form onSubmit={handleSignUp}>
        <h1>Sign Up</h1>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Submit</button>
      </form>
      <div>
        <h1>Sign In</h1>
        <input
          type="email"
          value={sessionsEmail}
          onChange={(e) => setSessionsEmail(e.target.value)}
        />
        <input
          type="password"
          value={sessionsPassword}
          onChange={(e) => setSessionsPassword(e.target.value)}
        />
        <button onClick={() => handleSignIn()}>Submit</button>
      </div>
    </>
  );
}

export default App;
