import { signInUser, signUpUser } from "../services/auth";
import { AuthProps } from "../types/userTypes";
import { useState } from "react";

export default function Auth({ user, setUser }: AuthProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  console.log("user", user);

  async function handleSignUp() {
    const { data } = await signUpUser({ email, password });
    setUser(data);
    return data;
  }

  async function handleSignIn() {
    const { data } = await signInUser({
      email,
      password,
    });
    setUser(data);
    return data;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isLogin) {
      handleSignUp();
    } else {
      handleSignIn();
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button>Submit</button>
      </form>
      {!isLogin ? (
        <p>
          Already have an account?
          <span onClick={() => setIsLogin(true)}>Click to sign in.</span>
        </p>
      ) : (
        <p>
          Don&apos;t have an account?{" "}
          <span onClick={() => setIsLogin(false)}>Click to sign up.</span>
        </p>
      )}
    </>
  );
}
