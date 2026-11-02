import React from 'react';
import './BottomNavigation.css';

export interface BottomNavigationProps {
  active?: 'Home' | 'Categories' | 'Orders' | 'Impact';
  hasNotification?: boolean;
  onTabChange?: (tab: 'Home' | 'Categories' | 'Orders' | 'Impact') => void;
  onCentralAction?: () => void;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
  active = 'Home',
  hasNotification = true,
  onTabChange,
  onCentralAction,
}) => {
  const tabs = [
    { id: 'Home', label: 'Home', icon: '🏠' },
    { id: 'Categories', label: 'Categories', icon: '🗂️' },
    { id: 'Orders', label: 'Orders', icon: '📋' },
    { id: 'Impact', label: 'Impact', icon: '🌱' },
  ] as const;

  return (
    <nav className="scrapcycle-bottom-nav" aria-label="Main Navigation">
      <div className="scrapcycle-bottom-nav__bar">
        {tabs.slice(0, 2).map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`scrapcycle-bottom-nav__tab ${active === tab.id ? 'scrapcycle-bottom-nav__tab--active' : ''}`}
            onClick={() => onTabChange && onTabChange(tab.id)}
            aria-selected={active === tab.id}
          >
            <span className="scrapcycle-bottom-nav__icon">{tab.icon}</span>
            <span className="scrapcycle-bottom-nav__label">{tab.label}</span>
          </button>
        ))}

        {/* Central Elevated Action Button */}
        <div className="scrapcycle-bottom-nav__central-wrap">
          <button
            type="button"
            className="scrapcycle-bottom-nav__central-btn"
            onClick={onCentralAction}
            aria-label="New Scrap Pickup Request"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
        </div>

        {tabs.slice(2, 4).map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`scrapcycle-bottom-nav__tab ${active === tab.id ? 'scrapcycle-bottom-nav__tab--active' : ''}`}
            onClick={() => onTabChange && onTabChange(tab.id)}
            aria-selected={active === tab.id}
          >
            <div className="scrapcycle-bottom-nav__icon-wrap">
              <span className="scrapcycle-bottom-nav__icon">{tab.icon}</span>
              {tab.id === 'Orders' && hasNotification && (
                <span className="scrapcycle-bottom-nav__dot" aria-hidden="true" />
              )}
            </div>
            <span className="scrapcycle-bottom-nav__label">{tab.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavigation;

