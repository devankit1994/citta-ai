import type { ReactNode } from "react";

export interface TabItem {
  label: string;
  content: ReactNode;
}

export interface TabProps {
  tabs: TabItem[];
  selectedIndex: number;
  onTabSelect: (index: number) => void;
  className?: string;
}