import React from "react";
import { useLocation } from "react-router-dom";

const Courses = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const courseCode = searchParams.get("q");

  return <div className="page-content">Course Page: {courseCode}</div>;
};

export default Courses;
