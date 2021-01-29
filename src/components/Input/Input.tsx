import React from 'react';
import styled from 'styled-components';

interface InputComponentProps {
  name: string;
  onChange: any;
  value: any;
  label?: string;
  isPrimary?: boolean;
  disabled?: boolean;
}

const InputComponent: React.FC<InputComponentProps> = (props) => {
  const Input = styled.input`
    box-shadow: -1px -1px 0 ${props.isPrimary ? '#ff00eb4f' : '#00ffb896'}, 1px 1px 0 #EEE;
    border: none;
    color: #ff00eb4f;
    text-shadow: 1px 1px 0 #00ffb896;
    &:focus {
      outline: none;
    }
  `;

  return (
    <>
      <label>{props.label?.toUpperCase() || props.name?.toUpperCase()}: </label>
      <Input {...props} />
    </>
  );
};

export default InputComponent;
