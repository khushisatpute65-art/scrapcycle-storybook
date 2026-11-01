import React from 'react';
import './Progress Indicator.css';

export interface ProgressIndicatorProps {
  step?: '1' | '2' | '3';
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  step = '1',
}) => {
  const stepNum = parseInt(step, 10) || 1;
  const percentage = (stepNum / 3) * 100;

  return (
    <div className="scrapcycle-progress-indicator" role="progressbar" aria-valuenow={stepNum} aria-valuemin={1} aria-valuemax={3}>
      <div className="scrapcycle-progress-indicator__track">
        <div
          className={`scrapcycle-progress-indicator__bar scrapcycle-progress-indicator__bar--step-${step}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="scrapcycle-progress-indicator__steps">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={`scrapcycle-progress-indicator__dot ${s <= stepNum ? 'scrapcycle-progress-indicator__dot--active' : ''}`}
          >
            {s}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressIndicator;
