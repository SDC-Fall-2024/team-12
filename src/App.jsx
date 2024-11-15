import { useState, useEffect } from "react";
import "./App.css";
import Layout from "./pages/Layout.jsx";
import "./styles/global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import Explore from "./pages/Explore.jsx";
import About from "./pages/About.jsx";
import Error from "./pages/Error.jsx";
import Courses from "./pages/Courses.jsx";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
