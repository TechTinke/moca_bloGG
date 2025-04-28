import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Category from "./components/Category.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/mental-health"
          element={<Category category="Mental Health and Awareness" />}
        />
        <Route
          path="/relationships"
          element={<Category category="Relationships and Dating" />}
        />
        <Route
          path="/technology"
          element={<Category category="Technology and Innovation" />}
        />
        <Route
          path="/fashion"
          element={<Category category="Fashion and Pop Culture" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
