import React, { ReactElement } from "react";
import cx from "clsx";
import { SupportedColors } from "@/types/colors"; 
import {
  StyledButton,
  StyledButtonProps,
  ButtonFlex,
  ButtonSpinnerContainer,
  ButtonSpinnerRing,
  Spinner,
} from "./Button.styles";

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: StyledButtonProps["variant"];
  color?: SupportedColors;
  loadingText?: string;
  isLoading?: boolean;
  fullWidth?: boolean;
  className?: string;
  id?: string;
  leftIcon?: ReactElement | null;
  rightIcon?: ReactElement | null;
  style?: React.CSSProperties;
  smButton?: boolean;
}

export const Button = ({
  children,
  disabled,
  isLoading,
  color = "gradient",
  variant = "filled",
  loadingText,
  fullWidth = false,
  className,
  id = "",
  style,
  rightIcon,
  leftIcon,
  smButton = false,
  ...btnProps
}: ButtonProps) => {
  const isDisabled = isLoading || disabled;
  return (
    <StyledButton
      {...btnProps}
      disabled={isDisabled}
      style={style}
      id={id}
      fullWidth={fullWidth}
      variant={variant}
      color={color}
      smButton={smButton}
      className={cx(className)}
    >
      <ButtonFlex>
        {(isLoading || leftIcon) && (
          <div>
            {isLoading ? (
              <ButtonSpinnerContainer>
                <ButtonSpinnerRing />
                <Spinner />
              </ButtonSpinnerContainer>
            ) : (
              leftIcon
            )}
          </div>
        )}

        {isLoading && loadingText ? loadingText : children}
        {rightIcon && <div>{rightIcon}</div>}
      </ButtonFlex>
    </StyledButton>
  );
};
