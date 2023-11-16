import { AuthProps } from "../types/userTypes";

export default function Auth({ user, setEmail }: AuthProps) {
  return (
    <>
      <form>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" />
        <button></button>
      </form>
    </>
  );
}
