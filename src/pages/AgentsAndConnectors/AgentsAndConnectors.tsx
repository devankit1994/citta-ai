import React from "react";
import Breadcrumbs from "../../components/Breadcrumb/Breadcrumbs";
import AgentInventory from "../../components/AgentInventory/AgentInventory";
import { Tab } from "../../components/Tab/Tab";
import { WeatherMoon24Regular } from "@fluentui/react-icons";
import "./AgentsAndConnectors.css";
import IconWithLabel from "../../components/Common/IconWithLabel/IconWithLabel";

const AgentsAndConnectors: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const tabs = [
    {
      label: "Agent inventory",
      content: <AgentInventory />,
    },
    {
      label: "Requested agents",
      content: <>Requested agents content goes here...</>,
    },
  ];

  return (
    <>
      <div className="page1__header-row">
        <Breadcrumbs items={["Home", "Agents & connectors"]} />
        <IconWithLabel
          icon={<WeatherMoon24Regular />}
          label="Enable dark mode"
        />
      </div>
      <div className="page2__container">
        <h1>Agents & connectors</h1>
        <p className="page2__description">
          Agents are AI assistants that can help answer questions, create
          content, automate tasks, and more. Control how your organization
          interacts with agents. You can also create connections to your
          organization’s knowledge sources so agents can reference them.
        </p>
        <a href="#" className="page2__link">
          Learn more about managing agents
        </a>
      </div>
      <Tab
        tabs={tabs}
        selectedIndex={selectedIndex}
        onTabSelect={setSelectedIndex}
      />
    </>
  );
};

export default AgentsAndConnectors;
