import * as React from "react";
import styles from "./Button.module.css";

export type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  dataTestId?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<Props> = ({
  children,
  onClick,
  disabled = false,
  type = "button",
  dataTestId = "button",
}) => {
  const handleClick = () => {
    if (!disabled && onClick) onClick();
  };

  const rootProps = {
    className: styles.Button,
    type,
    onClick: handleClick,
    disabled,
    "data-testid": dataTestId,
  };

  return (
    <button {...rootProps}>
      <span className={styles.Label}>{children}</span>
    </button>
  );
};

export default Button;
