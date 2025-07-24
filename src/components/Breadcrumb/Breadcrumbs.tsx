import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbDivider,
} from "@fluentui/react-components";
import type { BreadcrumbsProps } from "./Breadcrumbs.types";
import "./Breadcrumbs.css";

console.log("Breadcrumbs rendered");

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => (
  <Breadcrumb className="custom-breadcrumb">
    {items.map((item, idx) => (
      <React.Fragment key={item}>
        <BreadcrumbItem>{item}</BreadcrumbItem>
        {idx < items.length - 1 && <BreadcrumbDivider />}
      </React.Fragment>
    ))}
  </Breadcrumb>
);

export default Breadcrumbs;
