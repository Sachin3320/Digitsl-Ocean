import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";

const App = () => {
  return (
    <div className="w-full">
      {/* Navigation */}
      <nav className="bg-gray-800 p-4 text-white">
        <ul className="flex gap-4">
          <li>
            <Link to="/" className="hover:underline">Home</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline">Contact Us</Link>
          </li>
        </ul>
      </nav>

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
};

export default App;
