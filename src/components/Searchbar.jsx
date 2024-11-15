import React, { useState, useEffect, useRef } from "react";
import "../styles/Searchbar.css";

const Searchbar = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropDownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="search-bar-container" ref={dropdownRef}>
      <input
        className={`search-bar ${
          isDropDownOpen
            ? "search-bar-dropdown-open"
            : "search-bar-dropdown-close"
        }`}
        placeholder="Search"
        onClick={toggleDropDown}
      />
      <i className="bx bx-search search-icon"></i>
      {isDropDownOpen && (
        <div className="dropdown-container">
          <div className="dropdown-header">
            Trending
            <hr />
          </div>
          <div className="dropdown-suggestions">
            Math 221: Calculus and Analytic Geometry 1
          </div>
          <div className="dropdown-suggestions">
            Math 222: Calculus and Analytic Geometry 1
          </div>
          <div className="dropdown-suggestions">
            Math 234: Calculus--Functions of Several Variables
          </div>
          <div className="dropdown-suggestions">
            Comp Sci 200: Programming I
          </div>
          <div className="dropdown-suggestions">
            Comp Sci 220: Data Science Programming II
          </div>
        </div>
      )}
    </div>
  );
};

export default Searchbar;
