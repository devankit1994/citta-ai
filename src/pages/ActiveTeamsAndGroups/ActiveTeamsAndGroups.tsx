import React from "react";
import { Tab } from "../../components/Tab/Tab";
import Breadcrumbs from "../../components/Breadcrumb/Breadcrumbs";
import {
  Lightbulb24Regular,
  PeopleTeam24Regular,
  CloudArrowDown24Regular,
  Search24Regular,
  WeatherMoon24Regular,
} from "@fluentui/react-icons";
import "./ActiveTeamsAndGroups.css";
import { CittaInput } from "../../components/Input/Input";
import TeamsAndMicrosoft365Groups from "../../components/TeamsAndMicrosoft365Groups/TeamsAndMicrosoft365Groups";
import IconWithLabel from "../../components/Common/IconWithLabel/IconWithLabel";

const ActiveTeamsAndGroups: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [searchValue, setSearchValue] = React.useState("");

  const tabs = [
    {
      label: "Teams & Microsoft 365 groups",
      content: <TeamsAndMicrosoft365Groups />,
    },
    {
      label: "Distribution list",
      content: <>Distribution list content goes here...</>,
    },
    {
      label: "Security groups",
      content: <>Security groups content goes here...</>,
    },
  ];

  return (
    <>
      <div className="page1__header-row">
        <Breadcrumbs items={["Home", "Active teams & groups"]} />
        <IconWithLabel
          icon={<WeatherMoon24Regular />}
          label="Enable dark mode"
        />
      </div>
      <h1>Active teams and groups</h1>
      <div className="page1__flex-row flex-items">
        <IconWithLabel icon={<Lightbulb24Regular />} label="About Groups" />
        <IconWithLabel
          icon={<PeopleTeam24Regular />}
          label="Using Teams And SharePoint"
        />
        <IconWithLabel
          icon={<CloudArrowDown24Regular />}
          label="Where to store files"
        />
      </div>
      <div className="page1__relative">
        <Tab
          tabs={tabs}
          selectedIndex={selectedIndex}
          onTabSelect={setSelectedIndex}
        />
        {selectedIndex === 0 && (
          <CittaInput
            value={searchValue}
            onChange={setSearchValue}
            placeholder="Search all teams and groups"
            className="input--bordered page1__input--large page1__input-absolute"
            icon={
              <span className="header__icon--flipped">
                <Search24Regular />
              </span>
            }
          />
        )}
      </div>
    </>
  );
};

export default ActiveTeamsAndGroups;
