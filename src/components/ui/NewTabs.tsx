import React, { useState } from "react";

interface TabProps {
  tabs: {
    label: string;
    content: React.ReactNode;
  }[];
}

const NewTab: React.FC<TabProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="space-y-2">
      <div className="flex rounded-sm ">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${
              activeTab === index
                ? "border-b-tinqfiYellow text-tinqfiYellow"
                : "bg-white text-gray-700"
            }  px-4  text-xs font-semibold `}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <hr />
      <div>{tabs[activeTab].content}</div>
    </div>
  );
};

export default NewTab;
