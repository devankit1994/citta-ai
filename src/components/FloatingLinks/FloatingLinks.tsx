import React, { useState } from "react";
import "./FloatingLinks.css";
import { Lightbulb24Regular, Chat24Regular } from "@fluentui/react-icons";

export const FloatingLinks: React.FC = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="floating-links-container">
      <button
        className="floating-links-close"
        onClick={() => setVisible(false)}
        aria-label="Close"
      >
        ×
      </button>
      <a href="#" className="floating-link help-support">
        <Lightbulb24Regular
          style={{ verticalAlign: "middle" }}
          aria-label="Help"
        />
        Help & support
      </a>
      <a href="#" className="floating-link give-feedback">
        <Chat24Regular
          style={{ verticalAlign: "middle" }}
          aria-label="Feedback"
        />
        Give Feedback
      </a>
    </div>
  );
};
