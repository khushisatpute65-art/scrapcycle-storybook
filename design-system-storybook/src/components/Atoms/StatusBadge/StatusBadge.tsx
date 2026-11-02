import React from 'react';
import './StatusBadge.css';

export interface StatusBadgeProps {
  status?: 'In Route' | 'Completed' | 'Pending';
  size?: 'Small' | 'Medium';
  appearance?: 'Soft' | 'Filled';
  label?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status = 'In Route',
  size = 'Small',
  appearance = 'Soft',
  label,
}) => {
  const statusSlug = status.toLowerCase().replace(/\s+/g, '-');
  const sizeSlug = size.toLowerCase();
  const appSlug = appearance.toLowerCase();

  return (
    <span
      className={`scrapcycle-status-badge scrapcycle-status-badge--${statusSlug} scrapcycle-status-badge--${sizeSlug} scrapcycle-status-badge--${appSlug}`}
    >
      {label || status}
    </span>
  );
};

export default StatusBadge;

