import React from 'react';
import './Input Surface.css';

export interface InputSurfaceProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputState?: 'Default' | 'Focus' | 'Filled' | 'Error' | 'Disabled' | 'Success';
}

export const InputSurface: React.FC<InputSurfaceProps> = ({
  inputState = 'Default',
  disabled,
  placeholder = 'Enter value...',
  className = '',
  ...props
}) => {
  const isDisabled = disabled || inputState === 'Disabled';
  const stateClass = inputState.toLowerCase();

  return (
    <input
      type="text"
      className={`scrapcycle-input-surface scrapcycle-input-surface--${stateClass} ${className}`}
      disabled={isDisabled}
      placeholder={placeholder}
      aria-invalid={inputState === 'Error'}
      {...props}
    />
  );
};

export default InputSurface;
