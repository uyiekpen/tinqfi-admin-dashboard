import React from "react";

interface DropdownProps {
  options: { icon: string; label: string; link: string }[];
}

const Dropdown: React.FC<DropdownProps> = ({ options }) => {
  const isOpen = true; // Set isOpen to true to always display the dropdown

  return (
    <div className="relative inline-block text-left">
      {isOpen && (
        <div className="origin-top-right absolute right-0   w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option, index) => (
              <a
                key={index}
                href={option.link}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
               <span className="flex gap-2 ">
               <img src={option.icon} alt="" className="w-4 h-4 object-cover overflow-hidden"/>
                {option.label}
               </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
