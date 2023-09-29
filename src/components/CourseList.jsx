import CourseDisplay from './CourseDisplay';
import './CourseList.css';
import { useState } from "react";

const terms = {
  Fall: 'Fall',
  Winter: 'Winter',
  Spring: 'Spring'
};

const TermButton = ({term, selection, setSelection}) => (
  <div>
    <input type="radio" id={term} className="btn-check" checked={term === selection} autoComplete="off"
      onChange={() => setSelection(term)} />
    <label className="btn btn-success mt-2 me-1 p-2" htmlFor={term}>
      { term }
    </label>
  </div>
);

const TermSelector = ({selection, setSelection}) => (
  <div className="btn-group">
    { 
      Object.keys(terms).map(term => <TermButton key={term} term={term} selection={selection} setSelection={setSelection} />)
    }
  </div>
);

const CourseList = ({courses}) => {
    const [selection, setSelection] = useState(() => Object.keys(terms)[0]);

    return (
        <div>
            <TermSelector selection={selection} setSelection={setSelection} />
            <div className='course-list mt-4'>
                {
                    Object.entries(courses).filter(
                        ([id, course]) => course.term === terms[selection]
                    ).map(
                        ([id, course]) => <CourseDisplay key={id} course={course} />)
                }
            </div>
        </div>
    );
};
export default CourseList;