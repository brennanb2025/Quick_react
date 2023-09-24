import CourseDisplay from './CourseDisplay';
const CourseList = ({courses}) => (
    Object.entries(courses).map(
        ([id, course]) => <CourseDisplay course={course}></CourseDisplay>
    )
);
export default CourseList;