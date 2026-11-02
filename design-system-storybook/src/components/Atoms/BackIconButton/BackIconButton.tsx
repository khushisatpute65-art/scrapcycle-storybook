import React from 'react';
import './BackIconButton.css';

export interface BackIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  styleVariant?: 'Outline' | 'Primary' | 'Secondary';
  size?: 'Small' | 'Medium' | 'Large';
  state?: 'Default' | 'Focus' | 'Hover' | 'Pressed' | 'Disabled';
  shape?: 'Rounded' | 'Square' | 'Circular';
}

export const BackIconButton: React.FC<BackIconButtonProps> = ({
  styleVariant = 'Outline',
  size = 'Medium',
  state = 'Default',
  shape = 'Rounded',
  disabled,
  className = '',
  onClick,
  ...props
}) => {
  const isDisabled = disabled || state === 'Disabled';
  const styleClass = styleVariant.toLowerCase();
  const sizeClass = size.toLowerCase();
  const shapeClass = shape.toLowerCase();
  const stateClass = state.toLowerCase();

  return (
    <button
      className={`scrapcycle-back-icon-btn scrapcycle-back-icon-btn--${styleClass} scrapcycle-back-icon-btn--${sizeClass} scrapcycle-back-icon-btn--${shapeClass} scrapcycle-back-icon-btn--${stateClass} ${className}`}
      disabled={isDisabled}
      aria-label="Back"
      onClick={onClick}
      {...props}
    >
      <svg className="scrapcycle-back-icon-btn__svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 12H5M12 19l-7-7 7-7" />
      </svg>
    </button>
  );
};

export default BackIconButton;

