import {
  Add24Regular,
  CloudArrowDown24Regular,
  ArrowClockwise24Regular,
  Filter24Regular,
} from "@fluentui/react-icons";
import { MoreVertical24Regular } from "@fluentui/react-icons";
import React from "react";
import "./TeamsAndMicrosoft365Groups.css";
import Table from "./Table/Table";

const NameCellRenderer: React.FC<any> = (params) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <span>{params.value}</span>
      <MoreVertical24Regular style={{ cursor: "pointer", marginLeft: 8 }} />
    </div>
  );
};

const TeamsAndMicrosoft365Groups: React.FC = () => {
  return (
    <>
      <div className="teams-groups__tabs-row">
        <div className="teams-groups__flex-row">
          <div className="teams-groups__icon-label">
            <Add24Regular className="teams-groups__icon teams-groups__icon--brand" />
            <span>Add a team</span>
          </div>
          <div className="teams-groups__icon-label">
            <Add24Regular className="teams-groups__icon teams-groups__icon--brand" />
            <span>Add a Microsoft 365 group</span>
          </div>
          <div className="teams-groups__icon-label">
            <CloudArrowDown24Regular className="teams-groups__icon teams-groups__icon--brand" />
            <span>Export</span>
          </div>
          <div className="teams-groups__icon-label">
            <ArrowClockwise24Regular className="teams-groups__icon teams-groups__icon--brand" />
            <span>Refresh</span>
          </div>
        </div>
        <div className="teams-groups__flex-row">
          <span className="teams-groups__items-count">8 items</span>
          <div className="teams-groups__icon-label">
            {/* Filter icon */}
            <Filter24Regular className="teams-groups__icon teams-groups__icon--brand" />
            <span>Filter</span>
          </div>
        </div>
      </div>
      <Table
        columnDefs={[
          {
            headerName: "",
            checkboxSelection: true,
            width: 40,
            headerCheckboxSelection: true,
            suppressMovable: true,
            suppressSizeToFit: true,
          },
          {
            headerName: "Name",
            field: "name",
            flex: 1,
            sort: "asc",
            cellRenderer: NameCellRenderer,
          },
          { headerName: "Email", field: "email", flex: 1.5 },
          { headerName: "Sync status", field: "syncStatus", width: 110 },
          { headerName: "Teams status", field: "teamsStatus", width: 110 },
          {
            headerName: "Membership type",
            field: "membershipType",
            width: 140,
          },
          { headerName: "Privacy", field: "privacy", width: 90 },
          { headerName: "Created on", field: "createdOn", flex: 1.2 },
        ]}
        rowData={[
          {
            name: "All Company",
            email: "allcompany@domain.com",
            syncStatus: "⭮",
            teamsStatus: "",
            membershipType: "Assigned",
            privacy: "Public",
            createdOn: "February 1, 2020 at 10:41 PM",
          },
          {
            name: "docs",
            email: "docs@domain.com",
            syncStatus: "⭮",
            teamsStatus: "",
            membershipType: "Assigned",
            privacy: "Private",
            createdOn: "August 20, 2020 at 4:09 PM",
          },
          {
            name: "Documents",
            email: "documents@domain.com",
            syncStatus: "⭮",
            teamsStatus: "",
            membershipType: "Assigned",
            privacy: "Private",
            createdOn: "July 18, 2021 at 11:12 AM",
          },
          {
            name: "Licensing",
            email: "licensing@domain.com",
            syncStatus: "⭮",
            teamsStatus: "",
            membershipType: "Assigned",
            privacy: "Private",
            createdOn: "January 23, 2024 at 2:08 PM",
          },
          {
            name: "Professional Services",
            email: "proservices@domain.com",
            syncStatus: "⭮",
            teamsStatus: "",
            membershipType: "Assigned",
            privacy: "Public",
            createdOn: "October 8, 2024 at 12:45 AM",
          },
          {
            name: "team",
            email: "team@domain.com",
            syncStatus: "⭮",
            teamsStatus: "",
            membershipType: "Assigned",
            privacy: "Private",
            createdOn: "February 14, 2020 at 7:07 PM",
          },
        ]}
        domLayout="autoHeight"
      />
    </>
  );
};

export default TeamsAndMicrosoft365Groups;
