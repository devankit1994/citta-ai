import {
  bundleIcon,
  Home24Regular,
  Home24Filled,
  Settings24Regular,
  Settings24Filled,
  LineHorizontal324Regular,
  MoreHorizontal24Filled,
  MoreHorizontal24Regular,
  People24Regular,
  People24Filled,
  Person24Regular,
  Person24Filled,
  Briefcase24Regular,
  Briefcase24Filled,
  Wallet24Regular,
  Wallet24Filled,
  Heart24Regular,
  Heart24Filled,
  Edit24Regular,
  Edit24Filled,
} from "@fluentui/react-icons";
import CopilotIcon from "../../assets/copilot.svg?react";

const navItems = [
  {
    key: "home",
    text: "Home",
    isSection: true,
    icon: bundleIcon(Home24Filled, Home24Regular),
  },
  {
    key: "copilot",
    text: "Copilot",
    isSection: true,
    icon: CopilotIcon,
    items: [
      {
        key: "copilot-overview",
        text: "Overview",
      },
      {
        key: "copilot-agents",
        text: "Agents & connectors",
        url: "/agents-and-connectors",
      },
      {
        key: "copilot-billing",
        text: "Billing & usage",
      },
      {
        key: "copilot-settings",
        text: "Settings",
      },
    ],
  },
  {
    key: "users",
    text: "Users",
    isSection: true,
    icon: bundleIcon(Person24Filled, Person24Regular),
    items: [
      {
        key: "users-active",
        text: "Active users",
      },
      {
        key: "users-contacts",
        text: "Contacts",
      },
      {
        key: "users-guest",
        text: "Guest users",
      },
      {
        key: "users-deleted",
        text: "Deleted users",
      },
    ],
  },
  {
    key: "teams",
    text: "Teams & groups",
    isSection: true,
    icon: bundleIcon(People24Filled, People24Regular),
    items: [
      {
        key: "teams-active",
        text: "Active teams & groups",
        url: "/active-teams-and-groups",
      },
      {
        key: "teams-policies",
        text: "Policies",
      },
      {
        key: "teams-deleted",
        text: "Deleted groups",
      },
      {
        key: "teams-mailboxes",
        text: "Shared mailboxes",
      },
    ],
  },
  {
    key: "marketplace",
    text: "Marketplace",
    isSection: true,
    icon: bundleIcon(Briefcase24Filled, Briefcase24Regular),
  },
  {
    key: "billing",
    text: "Billing",
    isSection: true,
    icon: bundleIcon(Wallet24Filled, Wallet24Regular),
    items: [
      {
        key: "billing-products",
        text: "Your products",
      },
      {
        key: "billing-licenses",
        text: "Licenses",
      },
      {
        key: "billing-bills",
        text: "Bills & payments",
      },
      {
        key: "billing-accounts",
        text: "Billing accounts",
      },
      {
        key: "billing-methods",
        text: "Payment methods",
      },
      {
        key: "billing-notifications",
        text: "Billing notifications",
      },
    ],
  },
  {
    key: "setup",
    text: "Setup",
    isSection: true,
    icon: bundleIcon(Settings24Filled, Settings24Regular),
  },
  {
    key: "health",
    text: "Health",
    isSection: true,
    icon: bundleIcon(Heart24Filled, Heart24Regular),
    items: [
      {
        key: "health-service",
        text: "Service health",
      },
      {
        key: "health-message",
        text: "Message center",
      },
      {
        key: "health-feedback",
        text: "Product feedback",
      },
      {
        key: "health-network",
        text: "Network connectivity",
      },
      {
        key: "health-updates",
        text: "Software updates",
      },
    ],
  },
  {
    key: "divider-1",
    type: "divider",
  },
  {
    key: "customize",
    text: "Customize navigation",
    isSection: true,
    icon: bundleIcon(Edit24Filled, Edit24Regular),
  },
  {
    key: "showall",
    text: "Show all",
    isSection: true,
    icon: bundleIcon(MoreHorizontal24Filled, MoreHorizontal24Regular),
  },
];

export { navItems, LineHorizontal324Regular };
