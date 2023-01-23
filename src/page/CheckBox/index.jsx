import React from "react";
// UI frameworks
import { Checkbox } from "antd";

const options = [
  {
    label: "option 1",
    value: "x",
  },
  { label: "option 2", value: "y" },
  { label: "option 3", value: "z" },
];

const CheckBox = () => {
  const [checkedValues, setCheckedValues] = React.useState([]);
  const [checked, setChecked] = React.useState(false);

  function handleChange(event) {
    setChecked(event.target.checked);
  }

  function handleGroupChange(value) {
    console.log("DEBUG -> handleGroupChange -> value", value);
    setCheckedValues(value);
  }

  return (
    <div>
      <div>
        <Checkbox
          style={{ marginRight: 10 }}
          onChange={handleChange}
          checked={checkedValues.length === options.length}
          indeterminate={
            checkedValues.length === options.length
              ? false
              : checkedValues.length > 0
          }
        />
        All
      </div>
      <Checkbox.Group
        options={options}
        value={checkedValues}
        onChange={handleGroupChange}
      />

      {/* <br />
      {checked ? "Cool" : "please aggree to terms"} */}
    </div>
  );
};

export default CheckBox;
