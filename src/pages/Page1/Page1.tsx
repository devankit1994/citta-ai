import React from "react";
import { Tab } from "../../components/Tab/Tab";
import Breadcrumbs from "../../components/Breadcrumb/Breadcrumbs";
import {
  Lightbulb24Regular,
  PeopleTeam24Regular,
  CloudArrowDown24Regular,
  Search24Regular,
} from "@fluentui/react-icons";
import "./Page1.css";
import { CittaInput } from "../../components/Input/Input";
import TeamsAndMicrosoft365Groups from "../../components/TeamsAndMicrosoft365Groups";

const Page1: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [searchValue, setSearchValue] = React.useState("");

  const tabs = [
    {
      label: "Teams & Microsoft 365 groups",
      content: <TeamsAndMicrosoft365Groups />,
    },
    { label: "Distribution list", content: <div>Hello from Tab 2</div> },
    {
      label: "Security groups",
      content: (
        <div>
          Tab 3 with <b>JSX</b>
        </div>
      ),
    },
  ];

  return (
    <>
      <Breadcrumbs items={["Home", "Active teams & groups"]} />
      <h1>Active teams and groups</h1>
      <div className="page1__flex-row">
        <div className="page1__icon-label">
          <Lightbulb24Regular className="page1__icon page1__icon--brand" />
          <span>About Groups</span>
        </div>
        <div className="page1__icon-label">
          <PeopleTeam24Regular className="page1__icon page1__icon--brand" />
          <span>Using Teams And SharePoint</span>
        </div>
        <div className="page1__icon-label">
          <CloudArrowDown24Regular className="page1__icon page1__icon--brand" />
          <span>Where to store files</span>
        </div>
      </div>
      <div className="page1__tabs-row">
        <Tab
          tabs={tabs}
          selectedIndex={selectedIndex}
          onTabSelect={setSelectedIndex}
        />
        <div>
          <CittaInput
            value={searchValue}
            onChange={setSearchValue}
            placeholder="Search all teams and groups"
            className="input--bordered page1__input--large"
            icon={
              <span className="header__icon--flipped">
                <Search24Regular className="page1__icon page1__icon--brand" />
              </span>
            }
          />
        </div>
      </div>
    </>
  );
};

export default Page1;
