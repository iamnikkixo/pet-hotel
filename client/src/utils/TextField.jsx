import { useField, ErrorMessage } from 'formik';
import { FormGroup, Label, Input } from 'reactstrap';

// eslint-disable-next-line react/prop-types
const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <FormGroup>
      <Label htmlFor={field.name} className="header-font">
        {label}
      </Label>
      <Input
        className={`form-control ${meta.touched && meta.error && 'is-invalid'}`}
        autoComplete="off"
        {...field}
        {...props}
      />
      <ErrorMessage component="div" className="error" name={field.name} />
    </FormGroup>
  );
};

export default TextField;
