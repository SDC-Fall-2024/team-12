import React from "react";
import "../styles/Explore.css";
import { courseList, departmentList, toTitleCase } from "../data/data.js";
import { useState, useEffect, useRef } from "react";
import Table from "../components/ExploreComponents/Table.jsx";
import Filter from "../components/ExploreComponents/FilterDropdown.jsx";
import Pagination from "../components/ExploreComponents/Pagination.jsx";

const Explore = () => {
  const [isSortDropDownOpen, setIsSortDropDownOpen] = useState(false);
  const [sortBy, setSortBy] = useState("Number of Notes");
  const [filterSubject, setFilterSubject] = useState(null);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(15);
  const [courseData, setCourseData] = useState([]);
  const [departmentData, setDepartmentData] = useState([]);
  const [tableData, setTableData] = useState(null);
  const [tableDataLength, setTableDataLength] = useState(null);

  const dropdownSortRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1));
        setCourseData(courseList);
        setDepartmentData(departmentList);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (courseData.length > 0) {
      handleTableData();
      setPage(1);
    }
  }, [courseData, limit, filterSubject, sortBy]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownSortRef.current &&
        !dropdownSortRef.current.contains(e.target)
      ) {
        setIsSortDropDownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    handleTableData();
  }, [filterSubject, page, limit]);

  const setSortByClick = (sortCriteria) => {
    setSortBy(sortCriteria);
    setIsSortDropDownOpen(false);
  };

  const setCoursePage = (page, limit, courseArray) => {
    let array = [];
    for (let i = (page - 1) * limit; i < page * limit; i++) {
      array.push(courseArray[i]);
    }
    return array;
  };

  const handleTableData = () => {
    let filteredData = courseData;
    if (filterSubject) {
      filteredData = courseData.filter(
        (course) => course.departmentId === filterSubject.departmentId
      );
    }
    setTableData(setCoursePage(page, limit, filteredData));
    setTableDataLength(filteredData.length);
  };

  return (
    <div className="page-content explore-page">
      <div className="explore-header">Explore: Courses</div>
      <div className="explore-description">
        Find notes for on courses, subjects*
      </div>
      <div className="filter-container">
        <Filter
          departmentData={departmentData}
          setFilter={setFilterSubject}
          handleTableData={handleTableData}
        />

        <div className="sort-by-container" ref={dropdownSortRef}>
          <div className="sort-by-text">
            Sort by:{" "}
            <span
              onClick={() => {
                setIsSortDropDownOpen(!isSortDropDownOpen);
              }}
            >
              {sortBy}
              <i className="bx bxs-down-arrow"></i>
            </span>
          </div>
          {isSortDropDownOpen && (
            <div className="dropdown-menu">
              <div
                className="dropdown-item"
                onClick={() => {
                  setSortByClick("Name");
                }}
              >
                Name
              </div>
              <div
                className="dropdown-item"
                onClick={() => {
                  setSortByClick("Notes");
                }}
              >
                Notes
              </div>
              <div
                className="dropdown-item"
                onClick={() => {
                  setSortByClick("Most Popular");
                }}
              >
                Most Popular
              </div>
            </div>
          )}
        </div>
      </div>

      <Table tableData={tableData} />
      <div className="pagination-container">
        {tableDataLength > 0 && (
          <Pagination
            setPage={setPage}
            limit={limit}
            page={page}
            tableDataLength={tableDataLength}
          />
        )}
      </div>
    </div>
  );
};

export default Explore;
