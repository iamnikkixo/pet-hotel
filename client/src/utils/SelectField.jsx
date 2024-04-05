import { useField, ErrorMessage, Field } from 'formik';
import { Label } from 'reactstrap';

// eslint-disable-next-line react/prop-types
const SelectField = ({ label, option1, option2, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <Label htmlFor={field.name}>{label}</Label>
      <Field
        as="select"
        className={`form-control ${meta.touched && meta.error && 'is-invalid'}`}
        {...field}
        {...props}
      >
        <option>{option1}</option>
        <option>{option2}</option>
      </Field>
      <ErrorMessage component="div" className="error" name={field.name} />
    </>
  );
};

export default SelectField;
