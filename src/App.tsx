import { useState, useEffect } from "react";
import { verifyUser } from "./services/auth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { User } from "./types/userTypes";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";
import Home from "./components/Home";
import Auth from "./components/Auth";

function App() {
  const [user, setUser] = useState<User | undefined>(undefined);

  async function verify() {
    //work around - verify was returning a user after logout
    const cookieExists = document.cookie.includes("session");
    if (cookieExists) {
      const res = await verifyUser();
      console.log("res", res);
      if (res.data) {
        setUser(res.data);
      }
    }
  }

  useEffect(() => {
    verify();
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Auth user={user} setUser={setUser} />} />
          <Route element={<ProtectedRoute user={user} />}>
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
