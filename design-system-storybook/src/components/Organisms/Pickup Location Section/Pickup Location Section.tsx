import React from 'react';
import './Pickup Location Section.css';

export interface PickupLocationSectionProps {
  heading?: string;
  address?: string;
  city?: string;
  onChangeAddress?: () => void;
}

export const PickupLocationSection: React.FC<PickupLocationSectionProps> = ({
  heading = 'Pickup Address',
  address = '123 Green street, Andheri',
  city = 'Nagpur 411021',
  onChangeAddress,
}) => {
  return (
    <section className="scrapcycle-pickup-location">
      <div className="scrapcycle-pickup-location__icon-circle" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      </div>

      <div className="scrapcycle-pickup-location__details">
        <h4 className="scrapcycle-pickup-location__heading">{heading}</h4>
        <p className="scrapcycle-pickup-location__address">{address}</p>
        <span className="scrapcycle-pickup-location__city">{city}</span>
      </div>

      <button
        type="button"
        className="scrapcycle-pickup-location__change-btn"
        onClick={onChangeAddress}
      >
        Change
      </button>
    </section>
  );
};

export default PickupLocationSection;
