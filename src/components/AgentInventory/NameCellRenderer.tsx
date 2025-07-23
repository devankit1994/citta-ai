import React from "react";
import type { ICellRendererParams } from "ag-grid-community";
import type { AgentInventoryRow } from "./AgentInventory.types";
import "./NameCellRenderer.css";
import MoreMenu from "../Common/MoreMenu";

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
        <MoreMenu iconClassName="name-cell-renderer__menu-icon">
          <div className="name-cell-renderer__menu-item">Action 1</div>
          <div className="name-cell-renderer__menu-item">Action 2</div>
        </MoreMenu>
      </div>
    </div>
  );
};

export default NameCellRenderer;
