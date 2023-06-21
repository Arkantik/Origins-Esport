import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Videos from "./pages/Videos";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Connection from "./pages/Connection";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";
import User from "./pages/User";
// import RowStatic from "./components/dashboard/RowStatic";
// Layout
import Navbar from "./components/utilities/Navbar";
import Footer from "./components/utilities/Footer";
import DashLayout from "./layout/DashLayout";

// Components
import Player from "./components/video/Player";

export default function App() {
  return (
    <div className="min-h-screen bg-gradientDarkTheme">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="videos" element={<Videos />} />
          <Route path="videos/:id" element={<Player />} />
          <Route path="plans" element={<Pricing />} />
          <Route path="about" element={<About />} />
          <Route path="connection" element={<Connection />} />
          <Route path="*" element={<NotFound />} />
          <Route path="account" element={<DashLayout />}>
            {/* <Route path="dashboard" element={<RowStatic />} /> */}
            <Route path="edit" element={<Admin />} />
            <Route path="user" element={<User />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
