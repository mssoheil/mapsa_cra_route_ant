// UI frameworks
import { Divider as AntdDivider, Space } from "antd";

const Divider = () => {
  return (
    <div>
      <AntdDivider
        orientation="left"
        orientationMargin={100}
        dashed
        plain
        style={{ borderColor: "red " }}
      >
        my divider
      </AntdDivider>
      <Space>
        <span>link1</span>
        <AntdDivider type="vertical" style={{ borderColor: "red " }} />
        <span>link2</span>
        <AntdDivider type="vertical" />
        <span>link3</span>
        <AntdDivider type="vertical" />
        <span>link4</span>
      </Space>
    </div>
  );
};

export default Divider;
