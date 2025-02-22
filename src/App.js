import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Landing from "./components/Landing";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import PostAuction from "./components/PostAuction";
import "./App.css"; // Global styles

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Static Navbar */}
        <nav className="navbar">
          <h1 className="app-title">Online Auction Platform</h1>
          <ul className="nav-links">
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/signin">Signin</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/post-auction">Post Auction</Link></li>
          </ul>
        </nav>

        {/* Dynamic Page Content */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/post-auction" element={<PostAuction />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
