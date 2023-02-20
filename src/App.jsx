import React from "react";
// UI frameworks
import { Button, Layout, Menu, Spin } from "antd";
import { HeartFilled } from "@ant-design/icons";
import { Route, Routes } from "react-router";
import { ThemeProvider } from "styled-components";
// Components
import BreadCrumbs from "./components/BreadCrumbs";
// Utilities
import { Provider } from "react-redux";
// Hooks
import { useApp } from "./App.hooks";
// Pages
import DropDown from "./page/DropDown";
import Paginations from "./page/Paginations";
import Steps from "./page/Steps";
import Divider from "./page/Divider";
import ListWithPagination from "./page/ListWithPagination";
import AutoComplete from "./page/AutoComplete";
import CheckBox from "./page/CheckBox";
import Users from "./page/Users";
import Animations from "./page/Animations";
import Inputs from "./page/Inputs";
import Form from "./page/Form";
import Selects from "./page/Selects";
import Radios from "./page/Radios";
import CardPayment from "./page/CardPayment";
// Styles
import "./app-style.css";
// Store
import rootStore from "./store";
// Styles
import { GlobalStyle } from "./index.styles";
// Themes
import { appTheme } from "./theme";

const CodeSplitting = React.lazy(async () => {
  const module = await import("./page/CodeSplitting");
  return module
})


const App = () => {
  
  const { theme, toggleTheme, menuItems, handleClickItem, pathname } = useApp()  


  return (
    <Provider store={rootStore}>

      <ThemeProvider theme={theme === "light" ? appTheme.lightTheme : appTheme.darkTheme}>
        <GlobalStyle />
        
        <Layout className="app-layout">
          
          <Layout.Header style={{ color: "#fff", textAlign: "center" }}>
            My Awesome website
            <Button onClick={toggleTheme}>Toggle Theme</Button>
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
                  <Route path="/users" element={<Users />} />
                  <Route path="/animations" element={<Animations />} />
                  <Route path="/inputs" element={<Inputs />} />
                  <Route path="/form" element={<Form />} />
                  <Route path="/selects" element={<Selects />} />
                  <Route path="/radios" element={<Radios />} />
                  <Route path="/card-payment" element={<CardPayment />} />
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
      </ThemeProvider>
    </Provider>
  );
};

export default App;
