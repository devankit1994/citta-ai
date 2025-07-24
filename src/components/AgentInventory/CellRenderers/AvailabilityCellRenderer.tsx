import React from "react";
import { CheckmarkCircle24Filled } from "@fluentui/react-icons";

const AvailabilityCellRenderer: React.FC<{ value: string }> = ({ value }) => (
  <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
    <CheckmarkCircle24Filled
      color="green"
      style={{ fontSize: 16, width: 16, height: 16 }}
    />
    <span>{value}</span>
  </span>
);

export default AvailabilityCellRenderer;
