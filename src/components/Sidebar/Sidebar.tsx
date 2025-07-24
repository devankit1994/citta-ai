import "./Sidebar.css";
import { Nav, NavItem } from "@fluentui/react-components";
import { navItems, LineHorizontal324Regular } from "./navItems";
import { ChevronUpRegular, ChevronDownRegular } from "@fluentui/react-icons";
import type { SidebarProps } from "./Sidebar.types";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Sidebar: React.FC<SidebarProps> = ({
  collapsed,
  setCollapsed,
}) => {
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({});
  const location = useLocation();
  const navigate = useNavigate();

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

    let activeSectionKey: string | null = null;
    navItems.forEach((item) => {
      if (item.isSection && Array.isArray(item.items)) {
        if (
          item.items.some(
            (subItem) => subItem.url && subItem.url === location.pathname
          )
        ) {
          activeSectionKey = item.key;
        }
      }
    });

    if (collapsed) {
      const collapsedSections: Record<string, boolean> = {};
      sectionKeys.forEach((key) => {
        collapsedSections[key] = false;
      });
      setExpandedSections(collapsedSections);
    } else if (activeSectionKey) {
      const expandedSections: Record<string, boolean> = {};
      sectionKeys.forEach((key) => {
        expandedSections[key] = key === activeSectionKey;
      });
      setExpandedSections(expandedSections);
    } else {
      const firstExpandableSection = navItems.find(
        (item) =>
          item.isSection && Array.isArray(item.items) && item.items.length > 0
      );
      if (firstExpandableSection) {
        const expandedSections: Record<string, boolean> = {};
        sectionKeys.forEach((key) => {
          expandedSections[key] = key === firstExpandableSection.key;
        });
        setExpandedSections(expandedSections);
      }
    }
  }, [collapsed, location.pathname]);

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
                  <div
                    className="sidebar__nav-item--indented"
                    key={subItem.key}
                  >
                    <NavItem
                      as="button"
                      key={subItem.key}
                      value={subItem.key}
                      className={`sidebar__nav-item${
                        collapsed ? " sidebar__nav-item--collapsed" : ""
                      } ${
                        subItem.url === location.pathname
                          ? " sidebar__nav-item--active"
                          : ""
                      }`}
                      onClick={
                        subItem.url ? () => navigate(subItem.url) : undefined
                      }
                    >
                      {!collapsed && subItem.text}
                    </NavItem>
                  </div>
                ))}
            </div>
          ) : (
            (() => {
              let url: string | undefined = undefined;
              if ("url" in item && typeof item.url === "string") url = item.url;
              return (
                <NavItem
                  as="button"
                  key={item.key}
                  value={item.key}
                  className={`sidebar__nav-item${
                    collapsed ? " sidebar__nav-item--collapsed" : ""
                  }${
                    url && url === location.pathname
                      ? " sidebar__nav-item--active"
                      : ""
                  }`}
                  onClick={url ? () => navigate(url) : undefined}
                >
                  {!collapsed && item.text}
                </NavItem>
              );
            })()
          )
        )}
      </Nav>
    </aside>
  );
};
