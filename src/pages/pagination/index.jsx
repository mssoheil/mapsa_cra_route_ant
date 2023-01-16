import React from "react";
import { SmileOutlined } from "@ant-design/icons";
import { Pagination, Popover } from "antd";

const description = "This is a description.";

const Paginations = () => {
  const [current, setCurrent] = React.useState(3);

  const onChange = (page) => {
    setCurrent(page);
  };

  const itemRender = (_, type, originalElement) => {
    if (type === "prev") {
      return <a>Previous</a>;
    }
    if (type === "next") {
      return <a>Next</a>;
    }
    return originalElement;
  };

  return (
    <React.Fragment>
      <br />
      <Pagination
        defaultCurrent={1}
        total={500}
        showSizeChanger
        showQuickJumper
        onChange={onChange}
        size="small"
        simple
        showTotal={(total, range) =>
          `${range[0]}-${range[1]} of ${total} items`
        }
        itemRender={itemRender}
      />
      <Pagination defaultCurrent={1} total={500} disabled current={current} />
    </React.Fragment>
  );
};

export default Paginations;
