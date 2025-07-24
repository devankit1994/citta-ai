import type { ReactNode } from "react";
import type { MenuProps } from "@fluentui/react-components";

export interface MoreMenuProps extends Omit<MenuProps, "children"> {
  children?: ReactNode;
  iconClassName?: string;
  triggerAriaLabel?: string;
}
