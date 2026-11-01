import React, { useState } from 'react';
import './OTP Verification Group.css';
import { OTPCell } from '../../Atoms/OTP Cell/OTP Cell';

export interface OTPVerificationGroupProps {
  verificationState?: 'Default' | 'Error' | 'Success' | 'Disabled';
  heading?: string;
  instructions?: string;
  countdown?: string;
  onComplete?: (otp: string) => void;
  onResend?: () => void;
}

export const OTPVerificationGroup: React.FC<OTPVerificationGroupProps> = ({
  verificationState = 'Default',
  heading = 'OTP Verification',
  instructions = 'Enter the verification code sent to your Gmail.',
  countdown = '00:12',
  onComplete,
  onResend,
}) => {
  const [digits, setDigits] = useState(['8', '4', '', '']);

  const handleDigitChange = (index: number, val: string) => {
    const newDigits = [...digits];
    newDigits[index] = val;
    setDigits(newDigits);
    if (newDigits.every(d => d.length > 0) && onComplete) {
      onComplete(newDigits.join(''));
    }
  };

  const cellState = verificationState === 'Error'
    ? 'Error'
    : verificationState === 'Disabled'
    ? 'Disabled'
    : 'Empty';

  return (
    <div className={`scrapcycle-otp-group scrapcycle-otp-group--${verificationState.toLowerCase()}`}>
      <h3 className="scrapcycle-otp-group__heading">{heading}</h3>
      <p className="scrapcycle-otp-group__instructions">{instructions}</p>
      
      <div className="scrapcycle-otp-group__cells">
        {digits.map((digit, idx) => (
          <OTPCell
            key={idx}
            digit={digit}
            state={cellState === 'Empty' ? (digit ? 'Filled' : 'Empty') : cellState}
            onChange={(val) => handleDigitChange(idx, val)}
          />
        ))}
      </div>

      <div className="scrapcycle-otp-group__footer">
        <span className="scrapcycle-otp-group__countdown">{countdown}</span>
        <button
          type="button"
          className="scrapcycle-otp-group__resend"
          onClick={onResend}
          disabled={verificationState === 'Disabled'}
        >
          Resend code
        </button>
      </div>
    </div>
  );
};

export default OTPVerificationGroup;
