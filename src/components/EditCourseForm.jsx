import { Link, useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


import { useFormData } from '../utilities/useFormData';
import './CourseDisplay.css';


const validateData = (key, val) => {
    switch (key) {
      case 'Title': case 'Meets':
        return /(^\w\w)/.test(val) ? '' : 'must be least two characters';
      default: return '';
    }
};

const InputField = ({name, text, state, change}) => (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">{text}</label>
      <input className="form-control" id={name} name={name} 
        defaultValue={state.values?.[name]} onChange={change} />
      <div className="invalid-feedback">{state.errors?.[name]}</div>
    </div>
);

const ButtonBar = ({message, disabled}) => {
    const navigate = useNavigate();
    return (
      <div className="d-flex">
        <button type="button" className="btn btn-outline-dark me-2" onClick={() => navigate(-1)}>Cancel</button>
        <button type="submit" className="btn btn-primary me-auto" disabled={disabled}>Submit</button>
        <span className="p-2">{message}</span>
      </div>
    );
};

const EditCourseForm = ({courses}) => {
    const { courseId } = useParams();

    const [state, change] = useFormData(validateData, {"title":courses[courseId].title,"meets":courses[courseId].meets});
    const submit = (evt) => {
        evt.preventDefault();
        /*if (!state.errors) {

        }*/
    }

    return (
        <form onSubmit={submit} noValidate className={state.errors ? 'was-validated' : null}>
            <InputField name="title" text="Title" state={state} change={change} />
            <InputField name="meets" text="Meets" state={state} change={change} />
            <ButtonBar message={""} />
        </form>
    )
};

export default EditCourseForm;