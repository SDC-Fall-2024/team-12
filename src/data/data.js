import courseData from "./UWCourseCatalog_02-26-2024.json";

const extractedCourses = courseData.map((department) => {
  const departmentNames = department[0];
  const courses = department[1];

  const simplifiedCourses = courses.map((course) => ({
    courseCode: course["course-code"],
    courseTitle: course["course-title"],
  }));

  return {
    department: departmentNames,
    courses: simplifiedCourses,
  };
});

const courseList = extractedCourses.flatMap((department) =>
  department.courses.map((course) => ({
    departmentId: department.department,
    courseCode: course.courseCode,
    courseTitle: course.courseTitle,
  }))
);

function toTitleCase(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

let departmentList = [];

courseData.forEach((department) => {
  let cleanName = department[0].replace(/\s*\(.*?\)\s*/g, "");
  departmentList.push({
    departmentName: toTitleCase(cleanName),
    departmentId: department[0],
  });
});

export { courseList, departmentList, toTitleCase };
