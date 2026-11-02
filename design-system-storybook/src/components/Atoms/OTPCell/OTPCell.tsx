import React from 'react';
import './OTPCell.css';

export interface OTPCellProps {
  digit?: string;
  state?: 'Empty' | 'Filled' | 'Focused' | 'Error' | 'Disabled';
  onChange?: (val: string) => void;
}

export const OTPCell: React.FC<OTPCellProps> = ({
  digit = '',
  state = 'Empty',
  onChange,
}) => {
  const stateClass = state.toLowerCase();

  return (
    <div className={`scrapcycle-otp-cell scrapcycle-otp-cell--${stateClass}`}>
      <input
        type="text"
        maxLength={1}
        value={digit}
        disabled={state === 'Disabled'}
        className="scrapcycle-otp-cell__input"
        onChange={(e) => onChange && onChange(e.target.value)}
        aria-label="OTP digit"
      />
    </div>
  );
};

export default OTPCell;

