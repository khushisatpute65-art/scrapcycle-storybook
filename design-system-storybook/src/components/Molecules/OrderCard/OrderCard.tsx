import React from 'react';
import './OrderCard.css';
import { StatusBadge } from '../../Atoms/StatusBadge/StatusBadge';
import { Button } from '../../Atoms/Button/Button';

export interface OrderCardProps {
  status?: 'In Route' | 'Completed' | 'Pending';
  orderNumber?: string;
  itemsDescription?: string;
  earnedAmount?: string;
  pickupStatus?: string;
  pickupTime?: string;
  driverInfo?: string;
  onTrack?: () => void;
}

export const OrderCard: React.FC<OrderCardProps> = ({
  status = 'In Route',
  orderNumber = 'Order #12344',
  itemsDescription = '5 kg aluminum & plastic',
  earnedAmount = '₹320',
  pickupStatus = 'Scheduled for today',
  pickupTime = 'Pickup time: 3:15 PM',
  driverInfo = 'Driver: Raj Kumar • ⭐ 4.8',
  onTrack,
}) => {
  return (
    <div className={`scrapcycle-order-card scrapcycle-order-card--${status.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="scrapcycle-order-card__top">
        <div>
          <div className="scrapcycle-order-card__id">{orderNumber}</div>
          <div className="scrapcycle-order-card__items">{itemsDescription}</div>
        </div>
        <StatusBadge status={status} size="Small" appearance="Filled" />
      </div>

      <div className="scrapcycle-order-card__middle">
        <span className="scrapcycle-order-card__amount">Earned: {earnedAmount}</span>
        <span className="scrapcycle-order-card__schedule">{pickupStatus}</span>
      </div>

      <div className="scrapcycle-order-card__driver">
        <div>{pickupTime}</div>
        <div>{driverInfo}</div>
      </div>

      <div className="scrapcycle-order-card__action">
        <Button
          label="Track Order"
          variant="Primary Filled"
          size="Small"
          shape="Rounded"
          onClick={onTrack}
        />
      </div>
    </div>
  );
};

export default OrderCard;

