import { useEffect, useState } from 'react';
import CourseList from "./CourseList";
import CourseBanner from "./CourseBanner";
import Modal from './CourseSelectionModal';
import CoursePlan from './CoursePlan';
import { AnyOverlap } from '../utilities/classOverlap';


const CoursePage = ({pageTitle, courses}) => {
  const [selected, setSelected] = useState([]);
  const [unselectable, setUnselectable] = useState([]);

  useEffect(() => {
    const overlapping = Object.entries(courses).filter(c =>  //check if c overlaps any in selected courses
      AnyOverlap(c[1], selected.filter(s => c[0] != s).map(s => courses[s])))
      //filter by course checking against is not equal to the courses list in the 
      .map(([id, course]) => id);

    setUnselectable(overlapping);

  }, [selected]);

  const toggleSelected = (item) => {

    if(unselectable.includes(item)) {
      console.log("can't select that one");
      return;
    }

    setSelected(
      selected.includes(item)
      ? selected.filter(x => x !== item)
      : [...selected, item]);
  };

  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <div>
      <Modal open={open} close={closeModal}>
        <CoursePlan courses={courses} selected={selected} toggleSelected={toggleSelected} title={'Course Plan'}/>
      </Modal>
      <CourseBanner scheduleTitle={pageTitle} />
      <button className="btn btn-outline-dark" onClick={openModal}><i className="bi bi-calendar"></i></button>
      <CourseList courses={courses} selectedCourses={selected} toggleSelectedCourses={toggleSelected} unselectable={unselectable} />
    </div>
  );
}

export default CoursePage;