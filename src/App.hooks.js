import React from "react";
// UI frameworks
import { MenuUnfoldOutlined } from "@ant-design/icons";
// Hooks
import { useNavigate, useLocation } from "react-router";

const menuItems = [
  {
    key: "drop-down",
    label: "Drop down",
    theme: "light",
    icon: <MenuUnfoldOutlined />,
  },
  {
    key: "steps",
    label: "Steps",
  },
  {
    key: "paginations",
    label: "Pagination",
  },
  {
    key: "divider",
    label: "divider",
  },
  {
    key: "listWithPagination",
    label: "List with pagination",
  },
  {
    key: "autoComplete",
    label: "Auto Complete",
  },
  {
    key: "checkbox",
    label: "Checkbox",
  },
  {
    key: "codeSplitting",
    label: "Code Splitting",
  },
  {
    key: "users",
    label: "Users",
  },
  {
    key: "animations",
    label: "Animations",
  },
  {
    key: "inputs",
    label: "Inputs",
  },
  {
    key: "form",
    label: "Form",
  },
];

export function useApp() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [theme, setTheme] = React.useState("light");

  function handleClickItem(event) {
    const { key } = event;
    switch (key) {
      case "drop-down":
        navigate("/drop-down");
        break;
      case "paginations":
        navigate("/paginations");
        break;
      case "steps":
        navigate("/steps");
        break;
      case "divider":
        navigate("/divider");
        break;
      case "listWithPagination":
        navigate("/list-with-pagination");
        break;
      case "autoComplete":
        navigate("/auto-complete");
        break;
      case "checkbox":
        navigate("/checkbox");
        break;
      case "codeSplitting":
        navigate("/code-splitting");
        break;
      case "users":
        navigate("/users");
        break;
      case "animations":
        navigate("/animations");
        break;
      case "inputs":
        navigate("/inputs");
        break;
      case "form":
        navigate("/form");
        break;
      default:
        break;
    }
  }

  function toggleTheme() {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  }

  return { theme, toggleTheme, menuItems, handleClickItem, pathname };
}
