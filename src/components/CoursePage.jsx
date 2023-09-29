import { useState } from 'react';
import CourseList from "./CourseList";
import CourseBanner from "./CourseBanner";


const CoursePage = ({pageTitle, courses}) => {
  const [selected, setSelected] = useState([]);

  const toggleSelected = (item) => setSelected(
    selected.includes(item)
    ? selected.filter(x => x !== item)
    : [...selected, item]
  );

  return (
    <div>
      <CourseBanner scheduleTitle={pageTitle} />
      <CourseList courses={courses} selectedCourses={selected} toggleSelectedCourses={toggleSelected} />
    </div>);
}

export default CoursePage;