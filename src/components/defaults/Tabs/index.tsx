

import React from "react";
import TabContent from "./TabContent";
import TabSelection from "./TabSelection";
import { ITabContent, ITabSelection } from "./types";

export interface TabsProps {
  tabItems: ITabSelection[];
  tabContents: ITabContent[];
  openTab: number;
  setOpenTab: (tab: number) => void;
}

const Tabs: React.FC<TabsProps> = ({ openTab, setOpenTab, tabContents, tabItems }) => {
  return (
    <>
      <div className="header__content-tabs bg-[#1b2438] w-full px-16 py-4">
        <TabSelection
          items={tabItems}
          openTab={openTab}
          setOpenTab={setOpenTab}
        />
      </div>

      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="relative flex flex-col mb-6 w-full px-16 pt-4">
            <TabContent
              items={tabContents}
              openTab={openTab}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Tabs;