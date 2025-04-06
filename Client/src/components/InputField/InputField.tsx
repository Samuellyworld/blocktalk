// InputField.tsx
import React from 'react';
import { InputContainer, Label, StyledInput, ErrorText, InputWrapper, SearchIconWrapper } from "./InputField.styles";

export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  icon?: React.ReactNode;
}

const InputField = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = 'text',
  error,
  disabled,
  required,
  icon,
  ...props
}: InputFieldProps) => {
  const hasIcon = Boolean(icon);
  
  return (
    <InputContainer>
      {label && (
        <Label htmlFor={name}>
          {label} {required && <span style={{ color: '#ff4d4f' }}>*</span>}
        </Label>
      )}
      <InputWrapper>
        {hasIcon && <SearchIconWrapper>{icon}</SearchIconWrapper>}
        <StyledInput
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          hasIcon={hasIcon}
          {...props}
        />
      </InputWrapper>
      {error && <ErrorText>{error}</ErrorText>}
    </InputContainer>
  );
};

export default InputField;