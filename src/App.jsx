import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
