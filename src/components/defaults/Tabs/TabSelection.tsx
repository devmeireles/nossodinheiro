"use client";

import React from "react";
import { ITabSelection } from "./types";

export interface ITabSelectionProps {
  items: ITabSelection[],
  openTab: number;
  setOpenTab: (tab: number) => void;
}

const TabSelection: React.FC<ITabSelectionProps> = ({ items, openTab, setOpenTab }) => {
  return (
    <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row" role="tablist">
      {items.map((item) => (
        <li
          className={`mr-8 cursor-pointer ${item.id === openTab ? "text-white underline underline-offset-2" : "text-gray-100"} text-center`}
          key={item.id}
        >
          <a
            className="hover:text-white"
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(item.id);
            }}
            href={`#${item.id}`}
            role="tab"
          >
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default TabSelection;