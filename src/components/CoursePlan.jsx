import './CoursePlan.css';
import CourseDisplay from './CourseDisplay';

const CoursePlan = ({courses, selected, toggleSelected}) => (
    <div className="course-plan m-2 p-1">
        {
            selected.length === 0
            ? <h3>Your course schedule is empty!</h3>
            : 
            <div className="course-list">
                {
                    Object.entries(courses).filter(([id, course]) =>
                        selected.includes(id)
                    ).map(
                        ([id, course]) => 
                            <CourseDisplay key={id} id={id} course={course} selected={selected} toggleSelected={toggleSelected}/>
                    )
                }
            </div>
        }
    </div>
);

export default CoursePlan;