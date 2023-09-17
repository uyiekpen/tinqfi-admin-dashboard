import React, { useState } from "react";

interface TabProps {
  tabs: {
    label: string;
    content: React.ReactNode;
  }[];
}

const Tab: React.FC<TabProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="space-y-2">
      <div className="flex rounded-sm ">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${
              activeTab === index
                ? "bg-tinqfiYellow text-white"
                : "bg-white text-gray-700"
            } py-1 px-8 border text-sm `}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tab;
