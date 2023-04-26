import React from "react";
import "./App.css";
import Login from "./component/login/Login";
import Register from "./component/register/Register";
// import { Person } from "@material-ui/icons";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Home />} path="/"></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/profile/:username" element={<Profile />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
