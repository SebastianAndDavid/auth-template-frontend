import { useState, useEffect } from "react";
import "./App.css";
import { logout, signInUser, signUpUser, verifyUser } from "./services/auth";

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

  console.log("user", user);

  async function verify() {
    //work around - verify was returning a user after logout
    const cookieExists = document.cookie.includes("session");
    if (cookieExists) {
      const res = await verifyUser();
      if (res.data) {
        setUser(res.data);
      }
    }
  }

  async function handleSignUpSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { data } = await signUpUser({ email, password });
    setUser(data);
    return data;
  }

  async function handleSignIn() {
    const { data } = await signInUser({
      email: sessionsEmail,
      password: sessionsPassword,
    });
    setUser(data);
    return data;
  }

  async function handleLogout() {
    const res = await logout();
    if (res) {
      setUser(null);
    }
  }

  useEffect(() => {
    verify();
  }, []);

  return (
    <>
      <form onSubmit={handleSignUpSubmit}>
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
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}

export default App;
