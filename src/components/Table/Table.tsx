import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "./Table.css";
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";
ModuleRegistry.registerModules([AllCommunityModule]);

import type { TableProps } from "./Table.types";

export const Table: React.FC<TableProps> = ({
  className = "",
  style = {},
  defaultColDef,
  ...agGridProps
}) => {
  const mergedDefaultColDef = { resizable: false, ...(defaultColDef || {}) };

  return (
    <div
      className={`ag-theme-alpine ${className}`}
      style={{ width: "100%", ...style }}
    >
      <AgGridReact
        theme="legacy"
        defaultColDef={mergedDefaultColDef}
        {...agGridProps}
      />
    </div>
  );
};

export default Table;
