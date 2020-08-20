import React from 'react';
import styled from 'styled-components';

interface InputComponentProps {
  name: string;
  isPrimary: boolean;
  onChange: any;
  value: any;
}

const InputComponent: React.FC<InputComponentProps> = (props) => {
  const Input = styled.input`
    background: ${props.isPrimary ? 'blue' : 'pink'};
    color: #222;
  `;

  return (
    <Input {...props} />
  );
};

export default InputComponent;
