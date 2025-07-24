import React, { useState } from "react";
import {
  asanaIcon,
  meetingIcon,
  vivaGoalsIcon,
  nowIcon,
  onePageIcon,
  confluenceIcon,
} from "./icons";
import {
  ArrowClockwise24Regular,
  CloudArrowDown24Regular,
  Search24Regular,
  Filter24Regular,
} from "@fluentui/react-icons";
import Table from "../Table/Table";
import NameCellRenderer from "./NameCellRenderer";
import HeaderWithIcon from "../Table/HeaderWithIcon";
import AvailabilityCellRenderer from "./AvailabilityCellRenderer";
import SupportedInCellRenderer from "./SupportedInCellRenderer";
import type { SortDirection } from "ag-grid-community";
import "./AgentInventory.css";
import { CittaInput } from "../Input/Input";

const columnDefs = [
  {
    headerName: "Name",
    field: "name",
    cellRenderer: NameCellRenderer,
    flex: 1,
  },
  {
    headerName: "Type",
    field: "type",
    headerComponent: HeaderWithIcon,
    maxWidth: 100,
  },
  {
    headerName: "Availability",
    field: "availability",
    headerComponent: HeaderWithIcon,
    cellRenderer: AvailabilityCellRenderer,
    maxWidth: 120,
  },
  {
    headerName: "Supported in",
    field: "supportedIn",
    cellRenderer: SupportedInCellRenderer,
  },
  {
    headerName: "Date created",
    field: "dateCreated",
    sort: "desc" as SortDirection,
    maxWidth: 140,
  },
  { headerName: "Publisher", field: "publisher", maxWidth: 160 },
];

const rowData = [
  {
    nameTitle: "Asana",
    nameDescription:
      "Turn conversations into action items in Asana to keep work on track",
    type: "External",
    availability: "All users",
    supportedIn: "Copilot, Outlook, Teams",
    dateCreated: "July 20, 2025",
    publisher: "Asana",
    icon: asanaIcon,
  },
  {
    nameTitle: "Viva Goals",
    nameDescription: "Achieve purpose and alignment with Microsoft Viva Goals",
    type: "Microsoft",
    availability: "All users",
    supportedIn: "Copilot, Microsoft 365, Outlook, Teams",
    dateCreated: "July 17, 2025",
    publisher: "Microsoft Corporation",
    icon: vivaGoalsIcon,
  },
  {
    nameTitle: "AI Meeting Notes TeamsMaestro",
    nameDescription:
      "Free 📝 AI note taker for Microsoft Teams. Every word, task, and decision captured!",
    type: "External",
    availability: "All users",
    supportedIn: "Copilot, Outlook, Teams",
    dateCreated: "July 17, 2025",
    publisher: "MaliMaestro",
    icon: meetingIcon,
  },
  {
    nameTitle: "Now Virtual Agent",
    nameDescription:
      "Find answers, file requests and complete routine ServiceNow tasks within chat!",
    type: "External",
    availability: "All users",
    supportedIn: "Copilot, Outlook, Teams",
    dateCreated: "July 17, 2025",
    publisher: "ServiceNow",
    icon: nowIcon,
  },
  {
    nameTitle: "1Page",
    nameDescription:
      "Supercharge your meetings with 1Page summary & conversation starters!",
    type: "External",
    availability: "All users",
    supportedIn: "Copilot, Outlook, Teams",
    dateCreated: "July 17, 2025",
    publisher: "DAYAW, Inc.",
    icon: onePageIcon,
  },
  {
    nameTitle: "Confluence Cloud",
    nameDescription: "Confluence - Where Knowledge and Collaboration Thrive",
    type: "External",
    availability: "All users",
    supportedIn: "Copilot, Outlook, Teams",
    dateCreated: "July 17, 2025",
    publisher: "Atlassian.com",
    icon: confluenceIcon,
  },
];

const filterLabels = ["Type", "Agent type", "Availability", "Supported in"];

const AgentInventory: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <div className="agent-inventory__actions-bar">
        <div className="agent-inventory__flex-row">
          <div className="agent-inventory__icon-label agent-inventory__action-btn">
            <ArrowClockwise24Regular className="agent-inventory__icon agent-inventory__icon--brand" />
            <span>Refresh</span>
          </div>
          <div className="agent-inventory__icon-label agent-inventory__action-btn">
            <CloudArrowDown24Regular className="agent-inventory__icon agent-inventory__icon--brand" />
            <span>Export to Excel</span>
          </div>
        </div>
        <div className="agent-inventory__flex-row">
          <span className="agent-inventory__items-count">
            {rowData.length} items
          </span>
          <CittaInput
            className="agent-inventory__search-input"
            value={searchValue}
            onChange={setSearchValue}
            placeholder="Search"
            aria-label="Search agents"
            icon={
              <span className="agent-inventory__icon--flipped">
                <Search24Regular />
              </span>
            }
          />
          <span className="agent-inventory__filter-icon" title="Filter">
            <Filter24Regular />
          </span>
        </div>
      </div>
      <div className="agent-inventory__filter-bar">
        <span className="agent-inventory__filter-label">Filters:</span>
        {filterLabels.map((label) => (
          <button key={label} className="agent-inventory__pill">
            {label}
          </button>
        ))}
      </div>
      <Table columnDefs={columnDefs} rowData={rowData} rowHeight={64} />
    </>
  );
};

export default AgentInventory;
