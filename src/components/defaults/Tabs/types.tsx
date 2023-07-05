import { ReactNode } from "react";

export interface ITabSelection {
  text: string;
  id: number;
}

export interface ITabContent {
  id: number;
  content: ReactNode;
}