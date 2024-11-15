import React from "react";
import "../styles/Layout.css";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
