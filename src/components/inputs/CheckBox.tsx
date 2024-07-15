import React from "react";

interface CheckboxProps {
  id: string;
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ id, label }) => (
  <fieldset>
    <legend>약관동의</legend>
    <label>
      <input id={id} type="checkbox" />
      {label}
    </label>
  </fieldset>
);

export default Checkbox;
