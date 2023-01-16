import React from "react";
// UI frameworks
import { Layout, Menu } from "antd";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import { Route, Routes, useNavigate } from "react-router";
// Pages
import DropDown from "./page/DropDown";
import Paginations from "./page/Paginations";
import Steps from "./page/Steps";
// Styles
import "./app-style.css";

const menuItems = [
  {
    key: "DROP_DOWN",
    label: "Drop down",
    theme: "light",
    icon: <MenuUnfoldOutlined />,
  },
  {
    key: "STEPS",
    label: "Steps",
  },
  {
    key: "PAGINATION",
    label: "Pagination",
  },
];
const App = () => {
  const navigate = useNavigate();

  // const [collapsed, setCollapsed] = React.useState(false);

  function handleClickItem(event) {
    const { key } = event;
    switch (key) {
      case "DROP_DOWN":
        navigate("/drop-down");
        break;
      case "PAGINATION":
        navigate("/paginations");
        break;
      case "STEPS":
        navigate("/steps");
        break;
      default:
        break;
    }
  }

  // custom collapse
  // function handleToggleCollapse() {
  //   setCollapsed((collapsed) => !collapsed);
  // }

  return (
    <Layout className="app-layout">
      {/* <Layout style={{ height: "100vh" }}>
        <Layout.Header style={{ background: "green" }}>header</Layout.Header>
        <Layout.Content style={{ background: "blue" }}>content</Layout.Content>
        <Layout.Footer style={{ background: "red" }}>footer</Layout.Footer>

        <Layout.Sider
          collapsible
          collapsed={collapsed}
          style={{ background: "blue" }}
          trigger={<span>close</span>}
        >
          sider
        </Layout.Sider>
        <Layout>
          <Layout.Header style={{ background: "green" }}>
            header
            <Button onClick={handleToggleCollapse}>Toggle Collapse</Button>
          </Layout.Header>
          <Layout.Content style={{ background: "red" }}>content</Layout.Content>
          <Layout.Footer style={{ background: "orange" }}>footer</Layout.Footer>
        </Layout>
      </Layout> */}

      <Layout.Header>
        <Menu
          items={menuItems}
          mode="horizontal"
          theme="dark"
          defaultSelectedKeys={[]}
          onClick={handleClickItem}
        />
      </Layout.Header>
      <Layout.Content>
        <Routes>
          <Route path="/drop-down" element={<DropDown />} />
          <Route path="/paginations" element={<Paginations />} />
          <Route path="/steps" element={<Steps />} />
        </Routes>
      </Layout.Content>
      <Layout.Footer>footer</Layout.Footer>
    </Layout>
  );
};

export default App;
