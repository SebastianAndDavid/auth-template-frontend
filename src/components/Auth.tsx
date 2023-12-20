import { logout, signInUser, signUpUser } from "../services/auth";
import { useState } from "react";
import "./Auth.css";
import { useUser } from "../context/userContext";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useUser();
  const navigate = useNavigate();

  console.log("user in auth", user);

  async function handleSignUp() {
    //todo - error handling for empty inputs
    if (!email && !password) {
      return alert("Invalid credentials");
    } else {
      const { data } = await signUpUser({ email, password });
      if (data) setUser(data);
    }
  }

  async function handleSignIn() {
    const { data } = await signInUser({
      email,
      password,
    });
    if (data) {
      setUser(data);
    }
  }

  async function handleLogout() {
    const res = await logout();
    if (res) {
      setUser(null);
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isLogin) {
      await handleSignUp();
    } else {
      await handleSignIn();
      navigate("/home");
    }
  }

  return (
    <div className="auth">
      <h1>Welcome</h1>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <div className="input-field">
          <img className="icon" src="mail.png" alt="email" />
          <input
            className="form-field"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-field">
          <img className="icon" src="lock.png" alt="password" />
          <input
            className="form-field"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button>Submit</button>
      </form>
      {!isLogin ? (
        <p>
          Already have an account?
          <span className="login-text" onClick={() => setIsLogin(true)}>
            Click to sign in.
          </span>
        </p>
      ) : (
        <p>
          Don&apos;t have an account?{" "}
          <span className="login-text" onClick={() => setIsLogin(false)}>
            Click to sign up.
          </span>
        </p>
      )}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
