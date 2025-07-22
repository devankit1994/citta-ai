import "./Header.css";
import {
  Toolbar,
  ToolbarButton,
  type ToolbarProps,
} from "@fluentui/react-components";
import {
  GridDotsFilled,
  Search24Regular,
  Question24Regular,
  Settings24Regular,
  Alert24Regular,
} from "@fluentui/react-icons";
import * as React from "react";
import { CittaInput } from "../Input/Input";

export const Header: React.FC = (props: Partial<ToolbarProps>) => {
  const [inputValue, setInputValue] = React.useState("");

  return (
    <Toolbar className="header__toolbar" aria-label="Toolbar" {...props}>
      <div className="header__section header__section--left">
        <ToolbarButton
          icon={
            <span className="header__icon-wrapper">
              <GridDotsFilled className="header__icon" />
            </span>
          }
          aria-label="Grid"
        />
        <h3 className="header__title">Microsoft 365 admin center</h3>
      </div>
      <div className="header__section header__section--middle">
        <CittaInput
          value={inputValue}
          onChange={setInputValue}
          placeholder="Search"
          icon={
            <span className="header__icon--flipped">
              <Search24Regular />
            </span>
          }
        />
      </div>
      <div className="header__section header__section--right">
        <span className="header-icon">
          <Alert24Regular />
        </span>
        <span className="header-icon">
          <Settings24Regular />
        </span>
        <span className="header-icon">
          <Question24Regular />
        </span>
        <div className="header__user-circle">A</div>
      </div>
    </Toolbar>
  );
};
