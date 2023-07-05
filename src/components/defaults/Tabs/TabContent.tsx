import React from "react";
import { ITabContent } from "./types";


export interface TabContentProps {
  items: ITabContent[];
  openTab: number;
}

const TabContent: React.FC<TabContentProps> = ({ items, openTab }) => {
  return (
    <div className="px-4 py-5 flex-auto bg-gray-100">
      <div className="tab-content tab-space">
        {items.map((item) => (
          <div className={openTab === item.id ? "block" : "hidden"} id={`${item.id}`} key={item.id}>
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabContent;
