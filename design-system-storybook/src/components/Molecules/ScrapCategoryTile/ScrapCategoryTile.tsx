import React from 'react';
import './ScrapCategoryTile.css';

export interface ScrapCategoryTileProps {
  category?: 'Paper' | 'Plastic' | 'Metal' | 'Glass' | 'E-Waste' | 'Textile' | string;
  state?: 'Unselected' | 'Selected';
  onClick?: () => void;
}

export const ScrapCategoryTile: React.FC<ScrapCategoryTileProps> = ({
  category = 'Paper',
  state = 'Unselected',
  onClick,
}) => {
  const isSelected = state === 'Selected';

  const getEmoji = (cat: string) => {
    switch (cat.toLowerCase()) {
      case 'paper': return '📄';
      case 'plastic': return '🧴';
      case 'metal': return '🥫';
      case 'glass': return '🍾';
      case 'e-waste': return '💻';
      case 'textile': return '👕';
      default: return '♻️';
    }
  };

  return (
    <div
      className={`scrapcycle-category-tile scrapcycle-category-tile--${state.toLowerCase()}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-selected={isSelected}
    >
      <div className="scrapcycle-category-tile__icon-box">
        <span className="scrapcycle-category-tile__emoji">{getEmoji(category)}</span>
      </div>
      <span className="scrapcycle-category-tile__title">{category}</span>
    </div>
  );
};

export default ScrapCategoryTile;

