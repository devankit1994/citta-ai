import * as React from "react";
import { Input } from "@fluentui/react-components";
import type { InputProps } from "@fluentui/react-components";

import "./Input.css";

export interface CittaInputProps
  extends Omit<InputProps, "onChange" | "value"> {
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  icon?: React.ReactElement;
  className?: string;
}

export const CittaInput: React.FC<CittaInputProps> = ({
  value,
  onChange,
  required,
  icon,
  className,
  ...inputProps
}) => {
  const handleChange: InputProps["onChange"] = (_ev, data) => {
    onChange(data.value);
  };

  return (
    <Input
      value={value}
      onChange={handleChange}
      required={required}
      contentBefore={
        icon ? <span className="citta-input__icon">{icon}</span> : undefined
      }
      className={`citta-input__field${className ? " " + className : ""}`}
      {...inputProps}
    />
  );
};
