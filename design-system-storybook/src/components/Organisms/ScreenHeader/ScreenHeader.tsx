import React from 'react';
import './ScreenHeader.css';
import { BackIconButton } from '../../Atoms/BackIconButton/BackIconButton';

export interface ScreenHeaderProps {
  title?: string;
  subtitle?: string;
  showBack?: boolean;
  onBack?: () => void;
  rightAction?: React.ReactNode;
}

export const ScreenHeader: React.FC<ScreenHeaderProps> = ({
  title = 'Select Scrap Items',
  subtitle = 'Choose materials for doorstep pickup',
  showBack = true,
  onBack,
  rightAction,
}) => {
  return (
    <header className="scrapcycle-screen-header">
      <div className="scrapcycle-screen-header__left">
        {showBack && (
          <BackIconButton
            styleVariant="Outline"
            size="Medium"
            shape="Rounded"
            onClick={onBack}
          />
        )}
        <div className="scrapcycle-screen-header__titles">
          <h1 className="scrapcycle-screen-header__title">{title}</h1>
          {subtitle && <p className="scrapcycle-screen-header__subtitle">{subtitle}</p>}
        </div>
      </div>
      {rightAction && (
        <div className="scrapcycle-screen-header__right">
          {rightAction}
        </div>
      )}
    </header>
  );
};

export default ScreenHeader;

