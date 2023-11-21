import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";
import Home from "./components/Home";
import Auth from "./components/Auth";
import UserProvider from "./context/userContext";

function App() {
  // const [user, setUser] = useState<User | undefined>(undefined);
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
        <UserProvider>
          <Routes>
            <Route path="/" element={<Auth setIsUser={setIsUser} />} />
            <Route path="/home" element={<ProtectedRoute isUser={isUser} />}>
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </UserProvider>
      </Router>
    </>
  );
}

export default App;
