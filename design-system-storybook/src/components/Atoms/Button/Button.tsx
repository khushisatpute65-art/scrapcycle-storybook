import React from 'react';
import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  variant?: 'Primary Filled' | 'Secondary Filled' | 'Outline' | 'Text/Ghost';
  size?: 'Small' | 'Medium' | 'Large';
  state?: 'Default' | 'Hover' | 'Pressed/Active' | 'Focus' | 'Disabled';
  icon?: 'None' | 'Leading' | 'Trailing';
  shape?: 'Standard' | 'Rounded';
}

export const Button: React.FC<ButtonProps> = ({
  label = 'Get Started',
  variant = 'Primary Filled',
  size = 'Large',
  state = 'Default',
  icon = 'None',
  shape = 'Standard',
  disabled,
  className = '',
  children,
  ...props
}) => {
  const isDisabled = disabled || state === 'Disabled';
  const variantClass = variant.toLowerCase().replace(/\s+|\//g, '-');
  const sizeClass = size.toLowerCase();
  const stateClass = state.toLowerCase().replace(/\//g, '-');
  const shapeClass = shape.toLowerCase();

  return (
    <button
      className={`scrapcycle-button scrapcycle-button--${variantClass} scrapcycle-button--size-${sizeClass} scrapcycle-button--shape-${shapeClass} scrapcycle-button--state-${stateClass} ${className}`}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      {...props}
    >
      {icon === 'Leading' && (
        <span className="scrapcycle-button__icon scrapcycle-button__icon--leading" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      )}
      <span className="scrapcycle-button__label">{children || label}</span>
      {icon === 'Trailing' && (
        <span className="scrapcycle-button__icon scrapcycle-button__icon--trailing" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      )}
    </button>
  );
};

export default Button;
