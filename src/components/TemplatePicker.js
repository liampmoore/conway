import React from "react";
import { Dropdown } from "@bit/lekanmedia.shared-ui.dropdown";

function TemplatePicker({ setCurrentTemplate }) {
  const Glider = new Map();
  const Star = new Map();
  const templates = { Glider, Star };
  return (
    <Dropdown
      placeholder="Set a template."
      onSelect={(e) => setCurrentTemplate(templates[e])}
    >
      <option value="Glider">Glider</option>
      <option value="Star">Star</option>
    </Dropdown>
  );
}

export default TemplatePicker;
