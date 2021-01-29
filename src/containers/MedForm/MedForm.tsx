import React from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';

import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

import { MedFormProps } from '../../global';

const Form = styled.form`
  padding: 20px;
  text-align: right;
`;

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
    <Form onSubmit={handleSubmit}>
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
      <Button type="submit" disabled={!activeMedication}>Submit</Button>
    </Form>
  );
};

export default MedForm;
