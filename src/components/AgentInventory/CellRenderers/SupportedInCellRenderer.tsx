import React from "react";
import type { ICellRendererParams } from "ag-grid-community";
import {
  copilotIcon,
  ms365Icon,
  outlookIcon,
  teamsIcon,
} from "../../Common/brandIcons";

const ICON_MAP: Record<string, { src: string; alt: string }> = {
  Copilot: { src: copilotIcon, alt: "Copilot" },
  Outlook: { src: outlookIcon, alt: "Outlook" },
  Teams: { src: teamsIcon, alt: "Teams" },
  "Microsoft 365": { src: ms365Icon, alt: "Microsoft 365" },
};

const iconOrder = ["Copilot", "Microsoft 365", "Outlook", "Teams"];

const SupportedInCellRenderer: React.FC<ICellRendererParams> = (params) => {
  const supportedIn: string = params.value || "";
  const platforms = supportedIn
    .split(",")
    .map((p) => p.trim())
    .filter(Boolean);

  const orderedPlatforms = iconOrder.filter((name) => platforms.includes(name));

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        lineHeight: 0,
      }}
    >
      {orderedPlatforms.map((platform) => {
        const icon = ICON_MAP[platform];
        if (!icon) return null;
        return (
          <span
            key={platform}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 2,
              marginRight: 8,
              marginBottom: 4,
            }}
          >
            <img
              src={icon.src}
              alt={icon.alt}
              title={icon.alt}
              style={{ width: 14, height: 14, objectFit: "contain" }}
            />
            <span>{platform}</span>
          </span>
        );
      })}
    </div>
  );
};

export default SupportedInCellRenderer;
