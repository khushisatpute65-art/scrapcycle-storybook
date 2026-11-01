import React from 'react';
import './Search Bar.css';
import { InputSurface } from '../Input Surface/Input Surface';

export interface SearchBarProps {
  /** Text entered by the user */
  value?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Show the search icon on the left */
  showIcon?: boolean;
  /** Disable the whole control */
  disabled?: boolean;
  /** Change handler */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const SearchBar: React.FC<SearchBarProps> = ({value, placeholder = 'Search', showIcon = true, disabled, onChange}) => (
  <div className="search-bar" aria-disabled={disabled}>
    {showIcon && <span className="search-icon" aria-hidden="true">🔍</span>}
    <InputSurface
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
    />
  </div>
);

export default SearchBar;
