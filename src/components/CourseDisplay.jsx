import './CourseDisplay.css';
import { Link } from 'react-router-dom';

const CourseDisplay = ({id, course, userSignedIn, selected, toggleSelected, unselectable}) => {
    const isUnselectable = unselectable === undefined ? false : unselectable.includes(id);
  return (
    <div className={`card mb-4 p-2 course-card ${isUnselectable ? 'unselectable' : ''} ${selected.includes(id) ? 'selected' : ''}`} onClick={() => toggleSelected(id)}>
        {userSignedIn?.isAdmin && <Link to={`/editCourse/${id}`}><i className='bi bi-pencil-square'></i></Link>}
        <div className='card-body'>
            <h4 className='card-title'>{course.term} CS {course.number}</h4>
            <p className='card-text'>{course.title}</p>
            <div className='card-footer-custom'>
                <hr />
                <p className='card-text pt-3 ps-4'>{course.meets}</p>
            </div>
        </div>
    </div>
  );
};
export default CourseDisplay;