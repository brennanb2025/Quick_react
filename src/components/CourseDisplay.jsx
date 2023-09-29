import './CourseDisplay.css';

const CourseDisplay = ({id, course, selected, toggleSelected}) => (
    <div className={`card mb-4 p-2 course-card ${selected.includes(id) ? 'selected' : ''}`} onClick={() => toggleSelected(id)}>
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
export default CourseDisplay;