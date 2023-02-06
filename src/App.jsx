import React from "react";
// UI frameworks
import { Layout, Menu, Spin } from "antd";
import { MenuUnfoldOutlined, HeartFilled } from "@ant-design/icons";
import { Route, Routes } from "react-router";
// Components
import BreadCrumbs from "./components/BreadCrumbs";
// Hooks
import { useNavigate, useLocation } from "react-router";
// Pages
import DropDown from "./page/DropDown";
import Paginations from "./page/Paginations";
import Steps from "./page/Steps";
import Divider from "./page/Divider";
import ListWithPagination from "./page/ListWithPagination";
import AutoComplete from "./page/AutoComplete";
import CheckBox from "./page/CheckBox";
// Styles
import "./app-style.css";
// import CodeSplitting from "./page/CodeSplitting";
const CodeSplitting = React.lazy(async () => {
  const module = await import("./page/CodeSplitting");
  console.log("🚀 ~ file: App.jsx:23 ~ CodeSplitting ~ module", module)
  return module
})


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
];
const App = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  // const [collapsed, setCollapsed] = React.useState(false);


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

      {/* <Layout.Header>
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
      <Layout.Footer>footer</Layout.Footer> */}
      <Layout.Header style={{ color: "#fff", textAlign: "center" }}>
        My Awesome website
      </Layout.Header>
      <Layout>
        <Layout.Sider>
          <Menu
            items={menuItems}
            theme="dark"
            onClick={handleClickItem}
            defaultSelectedKeys={[pathname.slice(1)]}
          />
        </Layout.Sider>
        <Layout.Content style={{ padding: 10 }}>
          <BreadCrumbs />
          <React.Suspense fallback={<div><Spin /> loading...</div>}>
            <Routes>
              <Route path="/drop-down" element={<DropDown />} />
              <Route path="/paginations" element={<Paginations />} />
              <Route path="/steps" element={<Steps />} />
              <Route path="/divider" element={<Divider />} />
              <Route path="/auto-complete" element={<AutoComplete />} />
              <Route path="/checkbox" element={<CheckBox />} />
              <Route path="/code-splitting" element={<CodeSplitting />} />
              <Route
                path="/list-with-pagination"
                element={<ListWithPagination />}
              />
            </Routes>

          </React.Suspense>
        </Layout.Content>
      </Layout>
      <Layout.Footer>
        This website is powered by <HeartFilled style={{ color: "pink" }} />{" "}
        <span>&copy;</span> 2022
      </Layout.Footer>
    </Layout>
  );
};

export default App;
