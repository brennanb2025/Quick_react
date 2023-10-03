import { useState } from 'react';
import CourseList from "./CourseList";
import CourseBanner from "./CourseBanner";
import Modal from './CourseSelectionModal';
import CoursePlan from './CoursePlan';


const CoursePage = ({pageTitle, courses}) => {
  const [selected, setSelected] = useState([]);

  const toggleSelected = (item) => setSelected(
    selected.includes(item)
    ? selected.filter(x => x !== item)
    : [...selected, item]
  );

  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <div>
      <Modal open={open} close={closeModal}>
        <CoursePlan courses={courses} selected={selected} toggleSelected={toggleSelected} />
      </Modal>
      <CourseBanner scheduleTitle={pageTitle} />
      <button className="btn btn-outline-dark" onClick={openModal}><i className="bi bi-calendar"></i></button>
      <CourseList courses={courses} selectedCourses={selected} toggleSelectedCourses={toggleSelected} />
    </div>
  );
}

export default CoursePage;