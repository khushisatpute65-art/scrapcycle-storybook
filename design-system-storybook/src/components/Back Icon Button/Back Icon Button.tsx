import React from 'react';
import './Back Icon Button.css';

export interface BackIconButtonProps {
  /** Disable the button */
  disabled?: boolean;
  /** Click handler */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const BackIconButton: React.FC<BackIconButtonProps> = ({disabled, onClick}) => {
  return (
    <button
      className="back-icon-button"
      disabled={disabled}
      onClick={onClick}
      aria-label="Back"
    >
      {/* Icon placeholder - actual SVG should be extracted from Figma */}
      <span className="icon" aria-hidden="true">←</span>
    </button>
  );
};

export default BackIconButton;

