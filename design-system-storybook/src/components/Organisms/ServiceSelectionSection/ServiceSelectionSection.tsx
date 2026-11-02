import React, { useState } from 'react';
import './ServiceSelectionSection.css';
import { ServiceOptionRow } from '../../Molecules/ServiceOptionRow/ServiceOptionRow';

export interface ServiceSelectionSectionProps {
  selectedCategory?: 'None' | 'Scrap Materials' | 'Furniture' | 'Electronics' | 'Mixed Items';
  onSelectCategory?: (category: string) => void;
}

export const ServiceSelectionSection: React.FC<ServiceSelectionSectionProps> = ({
  selectedCategory = 'Scrap Materials',
  onSelectCategory,
}) => {
  const [selected, setSelected] = useState(selectedCategory);

  const categories: Array<'Scrap Materials' | 'Furniture' | 'Electronics' | 'Mixed Items'> = [
    'Scrap Materials',
    'Furniture',
    'Electronics',
    'Mixed Items',
  ];

  const handleSelect = (cat: 'Scrap Materials' | 'Furniture' | 'Electronics' | 'Mixed Items') => {
    setSelected(cat);
    if (onSelectCategory) onSelectCategory(cat);
  };

  return (
    <section className="scrapcycle-service-selection">
      <h3 className="scrapcycle-service-selection__heading">Select Service Category</h3>
      <div className="scrapcycle-service-selection__list">
        {categories.map((cat) => (
          <ServiceOptionRow
            key={cat}
            category={cat}
            state={selected === cat ? 'Selected' : 'Unselected'}
            onSelect={() => handleSelect(cat)}
          />
        ))}
      </div>
    </section>
  );
};

export default ServiceSelectionSection;

