// UI frameworks
import { Steps as AntdSteps } from "antd";
import { HeartFilled } from "@ant-design/icons";

const items = [
  {
    title: "Step1",
    subTitle: "sub1",
    description: "desc1",
    // icon: <HeartFilled />,
  },
  {
    title: "Step1",
    subTitle: "sub1",
    description: "desc2",
  },
  {
    title: "Step1",
    subTitle: "sub1",
    description: "desc3",
  },
];

const dot = (dot) => {
  return <div>{dot}</div>;
};

const Steps = () => {
  return (
    <div>
      <AntdSteps
        current={1}
        // percent={67}
        // type="inline"
        items={items}
        labelPlacement="vertical"
        size="small"
        // progressDot={dot}
        direction="vertical"
      />
    </div>
  );
};

export default Steps;
