import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";
import Home from "./components/Home";
import Auth from "./components/Auth";
import UserProvider from "./context/userContext";

function App() {
  // const user = useUser();
  // console.log("user in app", user);
  // const [user, setUser] = useState<User | undefined>(undefined);

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
            <Route path="/" element={<Auth />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/home" element={<Home />} />
            </Route>
          </Routes>
        </UserProvider>
      </Router>
    </>
  );
}

export default App;
