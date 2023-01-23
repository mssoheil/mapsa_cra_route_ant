import React from "react";
// UI frameworks
import { AutoComplete as AntdAutoComplete } from "antd";

const styles = {
  autoComplete: {
    width: "200px",
  },
};

const options = [
  {
    label: "Jane Doe",
    value: "Jane Doe",
  },
  {
    label: "John Doe",
    value: "John Doe",
  },
  {
    label: "George Smith",
    value: "George Smith",
  },
];

const AutoComplete = () => {
  const [value, setValue] = React.useState("");

  function handleFilter(inputValue, option) {
    return option.label.toLowerCase().includes(inputValue.toLowerCase());
  }

  function onSelect(value) {
    setValue(`User:${value}`);
  }

  function handleSearch(value) {}

  return (
    <div>
      <AntdAutoComplete
        style={styles.autoComplete}
        options={options}
        filterOption={handleFilter}
        onSelect={onSelect}
        value={value}
        onSearch={handleSearch}
        mode="multiple"
        status={value ? null : "error"}
      >
        {/* <input placeholder="type here" /> */}
      </AntdAutoComplete>
    </div>
  );
};

export default AutoComplete;
