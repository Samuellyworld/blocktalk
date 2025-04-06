// InputField.styles.ts
import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 20px;
  width: 100%;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const SearchIconWrapper = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 1;
`;

export const StyledInput = styled.input<{ hasIcon?: boolean }>`
  background-color: transparent;
  border: 1px solid rgba(55, 58, 65, 1);
  border-radius: 4px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 16px;
  padding: 12px 16px 12px ${({ hasIcon }) => (hasIcon ? '40px' : '16px')};
  outline: none;
  width: 100%;
  transition: all 0.2s ease-in-out;
  
  &:focus {
    border-color: rgba(85, 88, 95, 1);
    box-shadow: 0 0 0 2px rgba(55, 58, 65, 0.2);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const Label = styled.label`
  color: white;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 8px;
  transition: all 0.2s ease-in-out;
`;

export const ErrorText = styled.span`
  color: #ff4d4f;
  font-size: 12px;
  margin-top: 4px;
`;