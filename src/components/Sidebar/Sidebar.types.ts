import type { Dispatch, SetStateAction } from "react";

export interface SidebarProps {
  collapsed: boolean;
  setCollapsed: Dispatch<SetStateAction<boolean>>;
}
