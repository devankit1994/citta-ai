import "./Sidebar.css";
import { Nav, NavItem } from "@fluentui/react-components";
import { navItems, LineHorizontal324Regular } from "./navItems";
import { ChevronUpRegular, ChevronDownRegular } from "@fluentui/react-icons";
import type { SidebarProps } from "./Sidebar.types";
import React, { useState, useEffect } from "react";

export const Sidebar: React.FC<SidebarProps> = ({
  collapsed,
  setCollapsed,
}) => {
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({});

  const handleSectionToggle = (key: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  useEffect(() => {
    const sectionKeys = navItems
      .filter((item) => item.isSection)
      .map((item) => item.key);

    const firstExpandableSection = navItems.find(
      (item) =>
        item.isSection && Array.isArray(item.items) && item.items.length > 0
    );

    if (collapsed) {
      const collapsedSections: Record<string, boolean> = {};
      sectionKeys.forEach((key) => {
        collapsedSections[key] = false;
      });
      setExpandedSections(collapsedSections);
    } else if (firstExpandableSection) {
      const expandedSections: Record<string, boolean> = {};
      sectionKeys.forEach((key) => {
        expandedSections[key] = key === firstExpandableSection.key;
      });
      setExpandedSections(expandedSections);
    }
  }, [collapsed]);

  return (
    <aside
      className={`app__sidebar${
        collapsed ? " app__sidebar--collapsed" : " app__sidebar--expanded"
      }`}
    >
      <button
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        onClick={() => setCollapsed((c) => !c)}
        className="sidebar__toggle-btn"
      >
        <LineHorizontal324Regular />
      </button>

      <Nav aria-label="Sidebar" className="sidebar__nav">
        {navItems.map((item) =>
          item.type === "divider" ? (
            <hr key={item.key} className="sidebar__divider" />
          ) : item.isSection ? (
            <div key={item.key}>
              <div
                className={`sidebar__section-header${
                  collapsed ? " sidebar__section-header--collapsed" : ""
                } sidebar__section-header--clickable`}
                onClick={() => !collapsed && handleSectionToggle(item.key)}
                tabIndex={0}
                aria-expanded={!!expandedSections[item.key]}
                role="button"
              >
                {item.icon && <item.icon />}
                {!collapsed && (
                  <>
                    <span className="sidebar__section-header-text">
                      {item.text}
                    </span>
                    {item.items && item.items.length > 0 && (
                      <span className="sidebar__section-header-arrow">
                        {expandedSections[item.key] ? (
                          <ChevronUpRegular />
                        ) : (
                          <ChevronDownRegular />
                        )}
                      </span>
                    )}
                  </>
                )}
              </div>
              {item.items &&
                expandedSections[item.key] &&
                item.items.map((subItem) => (
                  <NavItem
                    as="button"
                    key={subItem.key}
                    value={subItem.key}
                    className={`sidebar__nav-item${
                      collapsed ? " sidebar__nav-item--collapsed" : ""
                    } sidebar__nav-item--indented`}
                  >
                    {!collapsed && subItem.text}
                  </NavItem>
                ))}
            </div>
          ) : (
            <NavItem
              as="button"
              key={item.key}
              value={item.key}
              className={`sidebar__nav-item${
                collapsed ? " sidebar__nav-item--collapsed" : ""
              }`}
            >
              {!collapsed && item.text}
            </NavItem>
          )
        )}
      </Nav>
    </aside>
  );
};
