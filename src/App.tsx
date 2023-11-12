import { useState } from "react";
import "./App.css";
import { signUpUser } from "./services/auth";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.target.value;
    const data = await signUpUser({ email, password });
    console.log("data", data);
  }

  return (
    <>
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
      <button onClick={(e) => handleSubmit(e)}>Submit</button>
    </>
  );
}

export default App;
