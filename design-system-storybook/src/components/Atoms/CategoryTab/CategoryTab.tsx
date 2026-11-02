import React from 'react';
import './CategoryTab.css';

export interface CategoryTabProps {
  label?: string;
  state?: 'Selected' | 'Unselected' | 'Disabled';
  onClick?: () => void;
}

export const CategoryTab: React.FC<CategoryTabProps> = ({
  label = 'Glass',
  state = 'Unselected',
  onClick,
}) => {
  const isDisabled = state === 'Disabled';
  const isSelected = state === 'Selected';

  return (
    <button
      className={`scrapcycle-category-tab scrapcycle-category-tab--${state.toLowerCase()}`}
      disabled={isDisabled}
      onClick={onClick}
      role="tab"
      aria-selected={isSelected}
    >
      <span className="scrapcycle-category-tab__label">{label}</span>
    </button>
  );
};

export default CategoryTab;

