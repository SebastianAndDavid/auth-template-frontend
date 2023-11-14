import { useState } from "react";
import "./App.css";
import { signInUser, signUpUser } from "./services/auth";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sessionsEmail, setSessionsEmail] = useState("");
  const [sessionsPassword, setSessionsPassword] = useState("");

  async function handleSignUp() {
    const data = await signUpUser({ email, password });
    console.log("sign up", data);
    return data;
  }

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
      <div>
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
        <button onClick={() => handleSignUp()}>Submit</button>
      </div>
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
