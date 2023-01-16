import { Button, Dropdown } from "antd";

const items = [
  {
    key: "a",
    label: <span>hello</span>,
    danger: true,
    disabled: true,
  },
  {
    key: "b",
    label: "item b",
    children: [{ key: "b", label: "item b" }],
  },
  {
    key: "c",
    label: "item c",
  },
];

const DropDown = () => {
  return (
    <div>
      <Dropdown menu={{ items }} placement="bottomRight" arrow>
        <Button>hover</Button>
      </Dropdown>
    </div>
  );
};

export default DropDown;
