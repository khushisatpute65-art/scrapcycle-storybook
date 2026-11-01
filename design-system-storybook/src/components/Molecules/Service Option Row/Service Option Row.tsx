import React from 'react';
import './Service Option Row.css';
import { RadioIndicator } from '../../Atoms/Radio Indicator/Radio Indicator';

export interface ServiceOptionRowProps {
  category?: 'Scrap Materials' | 'Furniture' | 'Electronics' | 'Mixed Items';
  state?: 'Unselected' | 'Selected' | 'Disabled';
  title?: string;
  subtitle?: string;
  onSelect?: () => void;
}

export const ServiceOptionRow: React.FC<ServiceOptionRowProps> = ({
  category = 'Scrap Materials',
  state = 'Unselected',
  title,
  subtitle,
  onSelect,
}) => {
  const isSelected = state === 'Selected';
  const isDisabled = state === 'Disabled';

  const defaultSubtitles: Record<string, string> = {
    'Scrap Materials': 'Paper, Plastic, Metal, Glass waste',
    'Furniture': 'Tables, Chairs, Sofas & Wooden items',
    'Electronics': 'Appliances, Computers, Cables & Gadgets',
    'Mixed Items': 'Household mixed items & recyclables',
  };

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Furniture':
        return '🪑';
      case 'Electronics':
        return '🔌';
      case 'Mixed Items':
        return '📦';
      default:
        return '♻️';
    }
  };

  return (
    <div
      className={`scrapcycle-service-row scrapcycle-service-row--${state.toLowerCase()}`}
      onClick={() => !isDisabled && onSelect && onSelect()}
      role="button"
      tabIndex={isDisabled ? -1 : 0}
      aria-selected={isSelected}
    >
      <div className="scrapcycle-service-row__icon-wrap">
        <span className="scrapcycle-service-row__emoji">{getCategoryIcon(category)}</span>
      </div>
      <div className="scrapcycle-service-row__content">
        <div className="scrapcycle-service-row__title">{title || category}</div>
        <div className="scrapcycle-service-row__subtitle">{subtitle || defaultSubtitles[category]}</div>
      </div>
      <div className="scrapcycle-service-row__radio">
        <RadioIndicator selected={isSelected ? 'Yes' : 'No'} state={isDisabled ? 'Disabled' : 'Default'} />
      </div>
    </div>
  );
};

export default ServiceOptionRow;
