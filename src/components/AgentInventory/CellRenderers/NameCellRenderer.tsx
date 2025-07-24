import React from "react";
import type { ICellRendererParams } from "ag-grid-community";
import "./NameCellRenderer.css";
import { MenuItem, MenuDivider } from "@fluentui/react-components";
import MoreMenu from "../../Common/MoreMenu/MoreMenu";

type AgentInventoryRow = {
  nameTitle: string;
  nameDescription: string;
  type: string;
  availability: string;
  supportedIn: string;
  dateCreated: string;
  publisher: string;
  icon: string;
};

const NameCellRenderer: React.FC<ICellRendererParams<AgentInventoryRow>> = (
  params
) => {
  return (
    <div className="name-cell-renderer__root">
      <img
        src={params.data?.icon}
        alt="icon"
        className="name-cell-renderer__icon"
      />
      <div className="name-cell-renderer__text">
        <h4 className="name-cell-renderer__title">
          {params.data?.nameTitle ?? ""}
        </h4>
        <p className="name-cell-renderer__description">
          {params.data?.nameDescription ?? ""}
        </p>
      </div>
      <div className="name-cell-renderer__menu">
        <MoreMenu>
          <MenuItem>Action 1</MenuItem>
          <MenuDivider />
          <MenuItem>Action 2</MenuItem>
        </MoreMenu>
      </div>
    </div>
  );
};

export default NameCellRenderer;
