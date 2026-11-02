import React from 'react';
import './LabeledFormField.css';
import { InputSurface } from '../../Atoms/InputSurface/InputSurface';

export interface LabeledFormFieldProps {
  inputType?: 'Email' | 'Pincode' | 'Condition';
  state?: 'Default' | 'Filled' | 'Focus' | 'Error' | 'Disabled' | 'Success';
  label?: string;
  helperText?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const LabeledFormField: React.FC<LabeledFormFieldProps> = ({
  inputType = 'Email',
  state = 'Default',
  label = 'Enter Gmail',
  helperText = 'Enter a valid value.',
  placeholder,
  value,
  onChange,
}) => {
  const defaultPlaceholder = inputType === 'Email'
    ? 'e.g. user@gmail.com'
    : inputType === 'Pincode'
    ? '6-digit PIN (e.g. 411021)'
    : 'Select condition';

  const defaultLabel = label || (inputType === 'Email' ? 'Enter Gmail' : inputType === 'Pincode' ? 'Pickup Pincode' : 'Material Condition');

  return (
    <div className={`scrapcycle-labeled-field scrapcycle-labeled-field--${state.toLowerCase()}`}>
      <label className="scrapcycle-labeled-field__label">{defaultLabel}</label>
      <div className="scrapcycle-labeled-field__control">
        <InputSurface
          inputState={state}
          placeholder={placeholder || defaultPlaceholder}
          value={value}
          onChange={onChange}
        />
        {inputType === 'Condition' && (
          <span className="scrapcycle-labeled-field__chevron" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </span>
        )}
      </div>
      {helperText && (
        <span className={`scrapcycle-labeled-field__helper scrapcycle-labeled-field__helper--${state.toLowerCase()}`}>
          {helperText}
        </span>
      )}
    </div>
  );
};

export default LabeledFormField;

