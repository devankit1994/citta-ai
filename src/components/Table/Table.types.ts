import type { AgGridReactProps } from "ag-grid-react";
import type { CSSProperties } from "react";

export interface TableProps extends AgGridReactProps {
  className?: string;
  style?: CSSProperties;
}
