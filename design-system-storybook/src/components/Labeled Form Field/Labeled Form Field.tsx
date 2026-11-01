import React from 'react';
import './Labeled Form Field.css';
import { InputSurface } from '../Input Surface/Input Surface';

export interface LabeledFormFieldProps {
  label: string;
  value?: string;
  placeholder?: string;
  type?: 'email' | 'pincode' | 'condition';
  state?: 'default' | 'filled' | 'focus' | 'error' | 'disabled' | 'success';
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const LabeledFormField: React.FC<LabeledFormFieldProps> = ({
  label,
  value,
  placeholder,
  type = 'email',
  state = 'default',
  onChange,
}) => (
  <div className={`labeled-form-field state-${state}`}> 
    <label className="field-label" aria-label={label}>{label}</label>
    <InputSurface
      value={value}
      placeholder={placeholder}
      disabled={state === 'disabled'}
      onChange={onChange}
    />
  </div>
);

export default LabeledFormField;
