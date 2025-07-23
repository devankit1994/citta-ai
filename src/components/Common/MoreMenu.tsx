import React, { useRef, useState } from "react";
import { MoreVertical24Regular } from "@fluentui/react-icons";
import {
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
} from "@fluentui/react-components";
import type { MoreMenuProps } from "./MoreMenu.types";
import "./MoreMenu.css";

const MoreMenu: React.FC<MoreMenuProps> = ({
  children,
  iconClassName,
  triggerAriaLabel = "More options",
  ...menuProps
}) => {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLSpanElement>(null);

  return (
    <Menu
      open={open}
      onOpenChange={(_, data) => setOpen(data.open)}
      {...menuProps}
    >
      <MenuTrigger disableButtonEnhancement>
        <span
          tabIndex={0}
          aria-label={triggerAriaLabel}
          ref={menuButtonRef}
          onClick={() => setOpen((v) => !v)}
          role="button"
          className="more-menu__trigger"
        >
          <MoreVertical24Regular className={iconClassName} aria-hidden="true" />
        </span>
      </MenuTrigger>
      <MenuPopover className="more-menu__popover">
        <MenuList>{children}</MenuList>
      </MenuPopover>
    </Menu>
  );
};

export default MoreMenu;
