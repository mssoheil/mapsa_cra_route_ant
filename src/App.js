import React from "react";
// UI frameworks
import { Layout, Menu } from "antd";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import { Route, Routes, useNavigate } from "react-router";
// Pages
import DropDown from "./page/DropDown";
import Paginations from "./page/Paginations";
import Steps from "./page/Steps";

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

  return (
    <div>
      {/* <Layout> */}
      {/* header/content/footer */}
      {/* <Layout.Header style={{ background: "green" }}>header</Layout.Header>
        <Layout.Content style={{ background: "blue" }}>content</Layout.Content>
        <Layout.Footer style={{ background: "red" }}>footer</Layout.Footer> */}
      {/* header/sider-content/footer */}
      {/* <Layout.Sider style={{ background: "blue" }}>sider</Layout.Sider>
        <Layout>
          <Layout.Header style={{ background: "green" }}>header</Layout.Header>
          <Layout.Content style={{ background: "red" }}>content</Layout.Content>
          <Layout.Footer style={{ background: "orange" }}>footer</Layout.Footer>
        </Layout> */}
      {/* </Layout> */}

      <Layout>
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
    </div>
  );
};

export default App;
