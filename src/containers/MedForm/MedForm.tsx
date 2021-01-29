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
      <Input
        name="form"
        isPrimary={true}
        onChange={handleChange}
        value={values.form}
        disabled
      />
      <br />
      <Input
        name="strength"
        isPrimary={true}
        onChange={handleChange}
        value={values.strength}
        disabled
      />
      <br />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default MedForm;
