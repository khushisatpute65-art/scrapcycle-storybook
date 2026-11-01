import React from 'react';
import './Radio Indicator.css';

export interface RadioIndicatorProps {
  selected?: 'Yes' | 'No' | boolean;
  state?: 'Default' | 'Disabled';
  onChange?: (val: boolean) => void;
}

export const RadioIndicator: React.FC<RadioIndicatorProps> = ({
  selected = 'No',
  state = 'Default',
  onChange,
}) => {
  const isSelected = selected === 'Yes' || selected === true;
  const isDisabled = state === 'Disabled';

  return (
    <div
      className={`scrapcycle-radio-indicator ${isSelected ? 'scrapcycle-radio-indicator--selected' : ''} ${isDisabled ? 'scrapcycle-radio-indicator--disabled' : ''}`}
      onClick={() => !isDisabled && onChange && onChange(!isSelected)}
      role="radio"
      aria-checked={isSelected}
      aria-disabled={isDisabled}
      tabIndex={isDisabled ? -1 : 0}
    >
      <div className="scrapcycle-radio-indicator__ring">
        {isSelected && <div className="scrapcycle-radio-indicator__dot" />}
      </div>
    </div>
  );
};

export default RadioIndicator;
