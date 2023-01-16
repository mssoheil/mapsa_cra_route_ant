import React from "react";

import { Route, Routes, useNavigate } from "react-router-dom";
// Pages
import X from "./pages/x";
import Y from "./pages/y";
import DropDown from "./pages/dropdown";
import { Layout, Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Steps from "./pages/steps";
import Paginations from "./pages/pagination";

// const LandingPage = React.lazy(
//   () => import(/* webpackChunkName: "LandingPage" */ "@root/pages/Landing")
// );

const items = [
  {
    label: "X",
    key: "X",
    icon: <AppstoreOutlined />,
    disabled: false,
    children: [
      {
        type: "group",
        label: "Item 1",
        theme: "light",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
            children: [
              {
                label: "Option 1",
                key: "setting:12",
              },
              {
                label: "Option 2",
                key: "setting:22",
              },
            ],
          },
          {
            label: "Option 2",
            key: "setting:22",
          },
        ],
      },
    ],
  },
  {
    label: "Y",
    key: "Y",
  },
  {
    label: "Drop Down",
    key: "DropDown",
  },
  {
    label: "Steps",
    key: "Steps",
  },
  {
    label: "Paginations",
    key: "Paginations",
  },
];

function App() {
  const navigate = useNavigate();

  function handleClick(event) {
    console.log("DEBUG -> handleClick -> event.key", event.key);

    const { key } = event;
    switch (key) {
      case "X":
        navigate("/x");
        break;
      case "Y":
        navigate("/y");
        break;
      case "DropDown":
        navigate("/drop-down");
        break;
      case "Steps":
        navigate("/steps");
        break;
      case "Paginations":
        navigate("/paginations");
        break;

      default:
        break;
    }
  }

  // const rootSubmenuKeys = ["sub1", "sub2", "sub4"];

  // const [openKeys, setOpenKeys] = React.useState(["sub1"]);

  // const onOpenChange = (keys) => {
  //   const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
  //   if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
  //     setOpenKeys(keys);
  //   } else {
  //     setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
  //   }
  // };

  return (
    <div className="App">
      {/* layouts */}
      {/* <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>

      <Layout>
        <Header>Header</Header>
        <Layout>
          <Sider>Sider</Sider>
          <Content>Content</Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>

      <Layout>
        <Header>Header</Header>
        <Layout>
          <Content>Content</Content>
          <Sider>Sider</Sider>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>

      <Layout>
        <Sider>Sider</Sider>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout> */}
      <Layout>
        <Layout.Header>
          <Menu
            theme="dark"
            mode="horizontal"
            onClick={handleClick}
            items={items}
            defaultSelectedKeys={["Y"]}
          />
          {/* inline collapsed */}
          {/* <Button
            type="primary"
            onClick={toggleCollapsed}
            style={{ marginBottom: 16 }}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            theme="dark"
            inlineCollapsed={collapsed}
            items={items}
          /> */}
        </Layout.Header>
        <Layout.Content>
          <Routes>
            <Route path="/x" element={<X />} />
            <Route path="/y" element={<Y />} />
            <Route path="/drop-down" element={<DropDown />} />
            <Route path="/steps" element={<Steps />} />
            <Route path="/paginations" element={<Paginations />} />
          </Routes>
        </Layout.Content>
        <Layout.Footer>footer</Layout.Footer>
      </Layout>
    </div>
  );
}

export default App;
