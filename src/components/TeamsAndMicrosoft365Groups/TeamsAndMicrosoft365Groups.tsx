import {
  Add24Regular,
  CloudArrowDown24Regular,
  Cloud24Regular,
  ArrowClockwise24Regular,
  Filter24Regular,
  Speaker224Regular,
} from "@fluentui/react-icons";
import React from "react";
import { MenuItem, MenuDivider } from "@fluentui/react-components";
import MoreMenu from "../Common/MoreMenu/MoreMenu";
import "./TeamsAndMicrosoft365Groups.css";
import "../../styles/layout.css";
import Table from "../Table/Table";
import type {
  ColDef,
  SortDirection,
  ICellRendererParams,
} from "ag-grid-community";
import IconWithLabel from "../Common/IconWithLabel/IconWithLabel";

const NameCellRenderer: React.FC<ICellRendererParams> = (params) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <strong>{params.value}</strong>
      <MoreMenu>
        <MenuItem>View</MenuItem>
        <MenuDivider />
        <MenuItem>Edit</MenuItem>
        <MenuDivider />
        <MenuItem>Delete</MenuItem>
      </MoreMenu>
    </div>
  );
};

const SyncStatusCellRenderer: React.FC<ICellRendererParams> = () => {
  return <Cloud24Regular style={{ fontSize: 16, width: 16, height: 16 }} />;
};

const TeamsStatusCellRenderer: React.FC<ICellRendererParams> = (params) => {
  if (params.value === "active") {
    return (
      <Speaker224Regular style={{ fontSize: 16, width: 16, height: 16 }} />
    );
  }
  return null;
};

const CreatedOnCellRenderer: React.FC<ICellRendererParams> = (params) => {
  if (!params.value || typeof params.value !== "string") return null;
  const [date, time] = params.value.split(" at ");
  return (
    <span style={{ lineHeight: 1.5, display: "flex", alignItems: "center" }}>
      {date} at
      <br />
      {time}
    </span>
  );
};

const TeamsAndMicrosoft365Groups: React.FC = () => {
  const columnDefs: ColDef[] = [
    {
      headerName: "",
      maxWidth: 2,
    },
    {
      headerName: "Name",
      field: "name",
      sort: "asc" as SortDirection,
      cellRenderer: NameCellRenderer,
      flex: 1,
    },
    { headerName: "Email", field: "email" },
    {
      headerName: "Sync status",
      cellRenderer: SyncStatusCellRenderer,
      maxWidth: 100,
    },
    {
      headerName: "Teams status",
      field: "teamsStatus",
      cellRenderer: TeamsStatusCellRenderer,
      maxWidth: 120,
    },
    {
      headerName: "Membership type",
      field: "membershipType",
      maxWidth: 140,
    },
    { headerName: "Privacy", field: "privacy", maxWidth: 120 },
    {
      headerName: "Created on",
      field: "createdOn",
      cellRenderer: CreatedOnCellRenderer,
      maxWidth: 140,
    },
    {
      headerName: "☰ Choose columns",
      field: "chooseColumns",
      maxWidth: 140,
    },
  ];

  const rowData = [
    {
      name: "All Company",
      email: "allcompany@domain.com",
      teamsStatus: "active",
      membershipType: "Assigned",
      privacy: "Public",
      createdOn: "February 1, 2020 at 10:41 PM",
      chooseColumns: "",
    },
    {
      name: "docs",
      email: "docs@domain.com",
      teamsStatus: "active",
      membershipType: "Assigned",
      privacy: "Private",
      createdOn: "August 20, 2020 at 4:09 PM",
      chooseColumns: "",
    },
    {
      name: "Documents",
      email: "documents@domain.com",
      teamsStatus: "",
      membershipType: "Assigned",
      privacy: "Private",
      createdOn: "July 18, 2021 at 11:12 AM",
      chooseColumns: "",
    },
    {
      name: "Licensing",
      email: "licensing@domain.com",
      teamsStatus: "active",
      membershipType: "Assigned",
      privacy: "Private",
      createdOn: "January 23, 2024 at 2:08 PM",
      chooseColumns: "",
    },
    {
      name: "Professional Services",
      email: "proservices@domain.com",
      teamsStatus: "",
      membershipType: "Assigned",
      privacy: "Public",
      createdOn: "October 8, 2024 at 12:45 AM",
      chooseColumns: "",
    },
    {
      name: "team",
      email: "team@domain.com",
      teamsStatus: "active",
      membershipType: "Assigned",
      privacy: "Private",
      createdOn: "February 14, 2020 at 7:07 PM",
      chooseColumns: "",
    },
  ];

  return (
    <>
      <div className="actions-bar">
        <div className="flex-items">
          <IconWithLabel icon={<Add24Regular />} label="Add a team" />
          <IconWithLabel
            icon={<Add24Regular />}
            label="Add a Microsoft 365 group"
          />
          <IconWithLabel icon={<CloudArrowDown24Regular />} label="Export" />
          <IconWithLabel icon={<ArrowClockwise24Regular />} label="Refresh" />
        </div>
        <div className="flex-items">
          <span className="teams-groups__items-count">8 items</span>
          <IconWithLabel icon={<Filter24Regular />} label="Filter" />
        </div>
      </div>
      <Table
        columnDefs={columnDefs}
        rowData={rowData}
        rowSelection={{
          mode: "multiRow",
          checkboxes: true,
          headerCheckbox: true,
        }}
        rowHeight={64}
      />
    </>
  );
};

export default TeamsAndMicrosoft365Groups;
