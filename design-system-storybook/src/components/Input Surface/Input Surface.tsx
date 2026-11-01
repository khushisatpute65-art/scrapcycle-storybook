import React from 'react';
import './Input Surface.css';

export interface InputSurfaceProps {
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const InputSurface: React.FC<InputSurfaceProps> = ({value, placeholder, disabled, onChange}) => (
  <input
    className="input-surface"
    type="text"
    value={value}
    placeholder={placeholder}
    disabled={disabled}
    onChange={onChange}
    aria-label={placeholder}
  />
);

export default InputSurface;

