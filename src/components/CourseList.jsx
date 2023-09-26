import CourseDisplay from './CourseDisplay';
import './CourseList.css';

const CourseList = ({courses}) => (
    <div className="course-list">
        {
            Object.entries(courses).map(
                ([id, course]) => <CourseDisplay key={id} course={course} />)
        }
    </div>
);
export default CourseList;