import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import PrivateRoutes from "./utils/PrivateRoutes.jsx";
import "./App.css";
import ResponsiveAppBar from "./components/Navbar.jsx";
import OrganizerList from "./pages/OrganizerList.jsx";
import OrganizerProfile from "./pages/OrganizerProfile.jsx";

function App() {
  return (
    <div>
      
      {localStorage.getItem("loginStatus") && <ResponsiveAppBar/>}

      <Routes>
        {/* Unprotected Routes */}
        <Route element={<Login />} path="/login" />
        <Route element={<SignUp />} path="/signup" />

        {/* Protected Routes */}
        <Route element={<PrivateRoutes />}>
          <Route element={<Home />} path="/" />
          <Route element={<Home />} path="/home" />
          <Route element={<About />} path="/about" />
          <Route element={<OrganizerList />} path="/organizers" />
          <Route element={<OrganizerProfile />} path="/organizerProfile" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
