import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "./Table.css";
import {
  ModuleRegistry,
  AllCommunityModule,
  type DomLayoutType,
} from "ag-grid-community";
ModuleRegistry.registerModules([AllCommunityModule]);

import type { TableProps } from "./Table.types";

export const Table: React.FC<TableProps> = ({
  className = "",
  style = {},
  ...agGridProps
}) => {
  const defaultColDef = {
    resizable: false,
    suppressMovable: true,
    suppressSizeToFit: true,
  };

  return (
    <div
      className={`ag-theme-alpine ${className}`}
      style={{ width: "100%", ...style }}
    >
      <AgGridReact
        theme="legacy"
        defaultColDef={defaultColDef}
        domLayout={"autoHeight" as DomLayoutType}
        {...agGridProps}
      />
    </div>
  );
};

export default Table;
