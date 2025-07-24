import React, { type ReactNode } from "react";
import { TabList, Tab as FluentTab } from "@fluentui/react-components";
import "./Tab.css";

interface TabItem {
  label: string;
  content: ReactNode;
}

interface TabProps {
  tabs: TabItem[];
  selectedIndex: number;
  onTabSelect: (index: number) => void;
  className?: string;
}

export const Tab: React.FC<TabProps> = ({
  tabs,
  selectedIndex,
  onTabSelect,
  className,
}) => {
  return (
    <div className={`${className ? " " + className : ""}`}>
      <TabList
        className="tab-list"
        selectedValue={selectedIndex}
        onTabSelect={(_, data) => {
          if (typeof data.value === "number") {
            onTabSelect(data.value);
          }
        }}
      >
        {tabs.map((tab, idx) => (
          <FluentTab className="citta-tab" key={tab.label} value={idx}>
            {tab.label}
          </FluentTab>
        ))}
      </TabList>
      {tabs[selectedIndex] && (
        <div className="tab-content">{tabs[selectedIndex].content}</div>
      )}
    </div>
  );
};
