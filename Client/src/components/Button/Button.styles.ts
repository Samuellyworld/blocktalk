import styled, { keyframes, css } from 'styled-components';
import { SupportedColors, SupportedVariants }  from '@/types/colors';


const spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;


export const ButtonSpinnerContainer = styled.div`
  position: relative;
  margin-right: 8px;
`;


export const ButtonSpinnerRing = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 99px;
  border: 3px solid var(--spinner-color, white);
  opacity: 0.5;
`;


export const Spinner = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  border: 3px solid transparent;
  border-top-color: var(--spinner-color, white);
  border-radius: 99px;
  animation: ${spin} 0.75s linear infinite;
`;


export const ButtonFlex = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export interface StyledButtonProps {
  fullWidth?: boolean;
  variant: SupportedVariants;
  color: SupportedColors;
  smButton?: boolean;
}


export const StyledButton = styled.button<StyledButtonProps>`
  border: none;
  font-family: inherit;
  white-space: nowrap;
  font-weight: 500;
  font-size: 16px;
  border-radius: 4px;
  height: 40px;
  text-align: center;
  padding: 0 20px;
  transition: 0.25s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}

  ${(props) =>
    props.color === "gradient" &&
    props.variant === "filled" &&
    css`
      background: var(--block-primary);
      color: var(--block-white);

      &:hover {
        background: var(--block-primary);
        background-position: 100% 0%;
      }

      &:disabled {
        pointer-events: none;
        background: rgba(30, 143, 255, 0.5)
      }
    `}

  ${(props) =>
    props.color === "gradient" &&
    props.variant === "outlined" &&
    css`
      background: var(--block-white);

      &:hover {
        background: var(--block-primary);
        color: var(--block-white);
      }
    `}

  ${(props) =>
    (props.color === "purple" || props.color === "primary") &&
    props.variant === "filled" &&
    css`
      background: var(--block-primary);
      color: var(--block-white);

      &:hover {
        opacity: 0.9;
      }

      &:disabled {
        background-color: rgba(30, 144, 255, 0.5);
      }
    `}

  ${(props) =>
    (props.color === "purple" || props.color === "primary") &&
    props.variant === "outlined" &&
    css`
      border: 1px solid var(--block-primary);
      color: var(--block-primary);
      background-color: transparent;

      &:disabled {
        opacity: 0.5;
      }
    `}

  ${(props) =>
    (props.color === "purple" || props.color === "primary") &&
    props.variant === "ghost" &&
    css`
      --spinner-color: var(--block-primary);
      background-color: transparent;
      border: none;
      color: var(--block-primary);
    `}

  ${(props) =>
    (props.color === "purple" || props.color === "primary") &&
    props.variant === "dashed" &&
    css`
      border: 1px dashed var(--block-primary);
      background: transparent;
      color: var(--block-primary);
    `}

  /* Secondary button style */
  ${(props) =>
    props.color === "secondary" &&
    css`
      background-color: transparent;
      color: var(--block-primary);

      &:hover {
        background-color: #fef1fb;
      }

      &:disabled {
        background-color: transparent;
      }
    `}

  /* Danger button style */
  ${(props) =>
    props.color === "danger" &&
    css`
      background-color:  #ff4d4f;
      color: white;

      &:hover {
        opacity: 0.9;
      }

      &:disabled {
        pointer-events: none;
      }
    `}

  ${(props) =>
    props.smButton &&
    css`
      @media (max-width: 600px) {
        font-size: 12px;
        padding: 0 10px;
        height: 25px;
      }
    `}
`;
