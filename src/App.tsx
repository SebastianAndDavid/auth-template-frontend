import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { User } from "./types/userTypes";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";
import Home from "./components/Home";
import Auth from "./components/Auth";

function App() {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [isUser, setIsUser] = useState(false);

  console.log("isUser", isUser);

  // async function verify() {
  //   //work around - verify was returning a user after logout
  //   // const isCookie = document.cookie.includes("session");

  //   const res = await verifyUser();
  //   console.log("res.data", res.data);
  //   setIsUser(true);
  // }

  // useEffect(() => {
  //   verify();
  // }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Auth setUser={setUser} setIsUser={setIsUser} />}
          />
          <Route path="/home" element={<ProtectedRoute isUser={isUser} />}>
            <Route index element={<Home user={user} />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
