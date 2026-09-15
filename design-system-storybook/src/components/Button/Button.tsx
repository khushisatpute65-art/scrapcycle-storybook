import React from 'react';
import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Exact variant state defined in Figma Component Set
   * @default 'Default'
   */
  state?: 'Default' | 'hover' | 'pressed' | 'Disabled';
  /**
   * Button label text (default matches Figma layer "Get Started")
   */
  label?: string;
  /**
   * Optional custom children
   */
  children?: React.ReactNode;
  /**
   * Click handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * Button component generated directly from Figma Component Set `Button` (node 53:27).
 * Preserves exact layer dimensions, typography, and state styling.
 */
export const Button: React.FC<ButtonProps> = ({
  state = 'Default',
  label = 'Get Started',
  children,
  disabled = false,
  className = '',
  onClick,
  ...props
}) => {
  const effectiveState = disabled ? 'Disabled' : state;
  const isDisabled = effectiveState === 'Disabled';

  return (
    <button
      type="button"
      className={`figma-button figma-button--state-${effectiveState.toLowerCase()} ${className}`.trim()}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      onClick={!isDisabled ? onClick : undefined}
      {...props}
    >
      <span className="figma-button__label">
        {children || label}
      </span>
    </button>
  );
};

export default Button;
