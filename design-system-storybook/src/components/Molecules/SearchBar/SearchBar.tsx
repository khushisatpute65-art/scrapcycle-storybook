import React, { useState } from 'react';
import './SearchBar.css';

export interface SearchBarProps {
  state?: 'Default' | 'Focus' | 'Filled' | 'Disabled';
  placeholder?: string;
  value?: string;
  onSearch?: (term: string) => void;
  onClear?: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  state = 'Default',
  placeholder = 'Search scrap materials...',
  value: initialValue = '',
  onSearch,
  onClear,
}) => {
  const [searchTerm, setSearchTerm] = useState(initialValue);
  const isDisabled = state === 'Disabled';
  const stateClass = state.toLowerCase();

  const handleClear = () => {
    setSearchTerm('');
    if (onClear) onClear();
  };

  return (
    <div className={`scrapcycle-search-bar scrapcycle-search-bar--${stateClass}`}>
      <span className="scrapcycle-search-bar__icon" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </span>
      <input
        type="text"
        className="scrapcycle-search-bar__input"
        placeholder={placeholder}
        value={searchTerm}
        disabled={isDisabled}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          if (onSearch) onSearch(e.target.value);
        }}
        aria-label="Search"
      />
      {searchTerm && !isDisabled && (
        <button
          type="button"
          className="scrapcycle-search-bar__clear"
          onClick={handleClear}
          aria-label="Clear search"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default SearchBar;

