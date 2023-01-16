// UI frameworks
import { Breadcrumb } from "antd";
// Hooks
import { useLocation } from "react-router";

const BreadCrumbs = () => {
  const { pathname } = useLocation();

  return (
    <Breadcrumb>
      <Breadcrumb.Item>My Website</Breadcrumb.Item>
      <Breadcrumb.Item>{pathname.slice(1)}</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadCrumbs;
