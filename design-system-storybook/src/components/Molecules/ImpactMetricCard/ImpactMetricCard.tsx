import React from 'react';
import './ImpactMetricCard.css';

export interface ImpactMetricCardProps {
  heading?: string;
  value?: string;
  description?: string;
  metricType?: 'CO2' | 'Trees' | 'Recycled' | 'Default';
}

export const ImpactMetricCard: React.FC<ImpactMetricCardProps> = ({
  heading = 'CO2 Saved',
  value = '125 kg',
  description = 'Earned this month',
  metricType = 'Default',
}) => {
  const getIcon = () => {
    switch (metricType) {
      case 'Trees': return '🌳';
      case 'CO2': return '🌱';
      case 'Recycled': return '♻️';
      default: return '🌿';
    }
  };

  return (
    <div className="scrapcycle-metric-card">
      <div className="scrapcycle-metric-card__header">
        <span className="scrapcycle-metric-card__icon">{getIcon()}</span>
        <span className="scrapcycle-metric-card__heading">{heading}</span>
      </div>
      <div className="scrapcycle-metric-card__value">{value}</div>
      <div className="scrapcycle-metric-card__desc">{description}</div>
    </div>
  );
};

export default ImpactMetricCard;

