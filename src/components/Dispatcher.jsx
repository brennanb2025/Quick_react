import { BrowserRouter, Routes, Route } from "react-router-dom";
import CoursePage from "./CoursePage";
import EditCourseForm from "./EditCourseForm";

const Dispatcher = ({courses, title}) => (
  <BrowserRouter>
    <Routes>
        <Route path="/" element={
                <CoursePage pageTitle={title} courses={courses}/>
                } />
        <Route path="/editCourse/:courseId" element={
            <EditCourseForm courses={courses} />} />
    </Routes>
  </BrowserRouter>
);

export default Dispatcher;