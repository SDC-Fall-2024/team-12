import React from "react";
import { useState, useRef, useEffect } from "react";
import "../../styles/FilterDropdown.css";

const FilterDropdown = ({ departmentData, setFilter, handleTableData }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const dropdownFilterRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownFilterRef.current &&
        !dropdownFilterRef.current.contains(e.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (inputValue === "") {
      setFilteredSuggestions(departmentData);
    } else {
      const query = inputValue.toLowerCase();
      const filtered = departmentData.filter((department) =>
        department.departmentName.toLowerCase().includes(query)
      );
      setFilteredSuggestions(filtered);
    }
  }, [inputValue, departmentData]);

  const handleQueryChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const setFilterByClick = (department) => {
    setFilter(department);
    setIsDropdownOpen(false);
    setInputValue(department.departmentName);
    handleTableData();
  };

  return (
    <div className="filter-by-subject">
      <div className="filter-text">Filter by Subject:</div>
      <div className="filter-input-container" ref={dropdownFilterRef}>
        <input
          className="filter-input"
          value={inputValue}
          onClick={() => {
            setIsDropdownOpen(!isDropdownOpen);
          }}
          onChange={handleQueryChange}
        />
        {isDropdownOpen && filteredSuggestions.length > 0 && (
          <div className="filter-dropdown-menu">
            {filteredSuggestions.map((department) => (
              <React.Fragment key={department.departmentId}>
                <div
                  className="filter-dropdown-item"
                  onClick={() => {
                    setFilterByClick(department);
                  }}
                >
                  {department.departmentName}
                </div>
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterDropdown;
