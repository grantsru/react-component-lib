import React from 'react';
interface InputComponentProps {
    name: string;
    isPrimary: boolean;
    onChange: any;
    value: any;
}
declare const InputComponent: React.FC<InputComponentProps>;
export default InputComponent;
