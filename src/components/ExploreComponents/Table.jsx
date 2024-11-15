import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Table.css";

const Table = ({ tableData }) => {
  const navigate = useNavigate();
  const navigateCourses = (query) => {
    navigate(`/courses?q=${query}`);
  };

  return (
    <div className="table-container">
      <div className="table-header">Course Code</div>
      <div className="table-header">Course Title</div>
      <div className="table-header">Notes</div>
      {tableData &&
        tableData.map((course) => {
          if (course) {
            return (
              <React.Fragment key={course.courseCode}>
                <div
                  className="table-item table-item-click"
                  onClick={() => {
                    navigateCourses(course.courseCode);
                  }}
                >
                  {course.courseCode}
                </div>
                <div
                  className="table-item table-item-click"
                  onClick={() => {
                    navigateCourses(course.courseCode);
                  }}
                >
                  {course.courseTitle}
                </div>
                <div className="table-item">0</div>
              </React.Fragment>
            );
          }
        })}
    </div>
  );
};

export default Table;
