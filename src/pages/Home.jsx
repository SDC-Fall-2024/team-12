import React from "react";
import Searchbar from "../components/Searchbar";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-page page-content">
      <div className="header-name">Note Share Name</div>
      <div className="description">Access and share notes at UW-Madison</div>
      <Searchbar />
    </div>
  );
};

export default Home;
