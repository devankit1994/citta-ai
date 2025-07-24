import React from "react";
import { Info16Regular } from "@fluentui/react-icons";
import "./HeaderWithIcon.css";

interface HeaderWithIconProps {
  displayName?: string;
}

const HeaderWithIcon: React.FC<HeaderWithIconProps> = ({ displayName }) => (
  <div>
    {displayName}
    <Info16Regular className="header-with-icon" />
  </div>
);

export default HeaderWithIcon;
