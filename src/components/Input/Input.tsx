import React from 'react';
import styled from 'styled-components';

interface InputComponentProps {
  name: string;
  isPrimary: boolean;
  onChange: any;
  value: any;
  disabled: boolean;
}

const InputComponent: React.FC<InputComponentProps> = (props) => {
  const Input = styled.input`
    box-shadow: -2px -2px 0 ${props.isPrimary ? '#ff00eb4f' : '#00ffb896'};
    border: none;
    color: #222;
    &:focus {
      outline: none;
    }
  `;

  return (
    <Input {...props} />
  );
};

export default InputComponent;
