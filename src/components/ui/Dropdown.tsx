import React, { useState, useRef, useEffect } from 'react';

// Define the type for the option object
type Option = {
  label: string;
  value: string;
};

type DropdownMenuProps = {
  label: string;
  options: Option[];
  onSelect: (option: Option) => void;
};

const Dropdown: React.FC<DropdownMenuProps> = ({ label, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      closeDropdown();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleOptionClick = (option: Option) => {
    onSelect(option);
    closeDropdown();
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded"
        onClick={toggleDropdown}
      >
        {label}
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded shadow-md">
          <ul>
            {options.map((option) => (
              <li
                key={option.value}
                onClick={() => handleOptionClick(option)}
                className="py-2 px-4 cursor-pointer hover:bg-gray-100"
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
