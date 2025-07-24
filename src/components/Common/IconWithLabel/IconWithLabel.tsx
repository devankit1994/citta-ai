import React from "react";
import "./IconWithLabel.css";

type IconWithLabelProps = {
  icon: React.ReactElement;
  label: string;
};

const IconWithLabel: React.FC<IconWithLabelProps> = ({ icon, label }) => (
  <div className="icon-with-label__container">
    <span className="icon-with-label__icon icon-with-label__icon--brand">
      {icon}
    </span>
    <span>{label}</span>
  </div>
);

export default IconWithLabel;
