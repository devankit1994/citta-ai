import React from "react";
import Breadcrumbs from "../../components/Breadcrumb/Breadcrumbs";
import AgentInventory from "../../components/AgentInventory/AgentInventory";
import { Tab } from "../../components/Tab/Tab";
import "./Page2.css";

const Page2: React.FC = () => {
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
      <Breadcrumbs items={["Home", "Agents & connectors"]} />
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

export default Page2;
