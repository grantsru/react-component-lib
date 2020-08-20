import React from 'react';
import { useFormik } from 'formik';

import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

import { MedFormProps } from '../../global';

const MedForm: React.FC<MedFormProps> = ({ activeMedication, onSubmit }) => {
  const {
    handleSubmit, handleChange, resetForm, setFieldValue, values,
  } = useFormik({
    initialValues: {
      name: '',
      ndc: '',
      form: '',
      strength: '',
    },
    onSubmit(values) {
      onSubmit(values);
    },
  });

  React.useEffect(() => {
    if (!activeMedication) {
      resetForm();
    } else {
      for (const [field, value] of Object.entries(activeMedication)) {
        setFieldValue(field, value);
      }
    }
  }, [activeMedication]);

  return (
    <form onSubmit={handleSubmit}>
      <label>Form:</label>
      <Input
        name="form"
        onChange={handleChange}
        value={values.form}
      />
      <br />
      <label>Strength:</label>
      <Input
        name="strength"
        onChange={handleChange}
        value={values.strength}
      />
      <br />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default MedForm;
