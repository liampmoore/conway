import React from "react";
import { Dropdown } from "@bit/lekanmedia.shared-ui.dropdown";

function TemplatePicker({ setCurrentTemplate }) {
  return (
    <Dropdown placeholder="Set a template." onSelect={(e) => console.log(e)}>
      <option value="Selected 1">Select 1</option>
      <option value="Selected 2">Select 2</option>
      <option value="Selected 3">Select 3</option>
      <option value="Selected 4">Select 4</option>
    </Dropdown>
  );
}

export default TemplatePicker;
