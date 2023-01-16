import React from "react";
import { SmileOutlined } from "@ant-design/icons";
import { Steps as AntdSteps, Popover } from "antd";

const description = "This is a description.";

const customDot = (dot, { status, index }) => (
  <Popover
    content={
      <span>
        step {index} status: {status}
      </span>
    }
  >
    {dot}
  </Popover>
);

const Steps = () => {
  return (
    <React.Fragment>
      <br />
      <AntdSteps
        type="navigation"
        // type="inline"
        percent={60}
        // size="small"
        current={1}
        // direction="vertical"
        status="error"
        labelPlacement="vertical"
        progressDot={customDot}
        // onChange={onChange}
        items={[
          {
            title: "Finished",
            description,
            icon: <SmileOutlined />,
          },
          {
            title: "In Progress",
            description,
            subTitle: "Left 00:00:08",
          },
          {
            title: "Waiting",
            description,
          },
        ]}
      />
    </React.Fragment>
  );
};

export default Steps;
