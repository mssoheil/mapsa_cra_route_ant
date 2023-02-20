import React from "react";
// UI frameworks
import { Radio } from "antd";

const Radios = () => {
    const [selectedGender, setSelectedGender] = React.useState("M");
    function handleChangeGender(event) {
        setSelectedGender(event.target.value)
    }
  return <div>
    {/* my radio <Radio /> */}
    <Radio.Group onChange={handleChangeGender} value={selectedGender} name="gender" buttonStyle="outline" optionType="button">
        <Radio value="F">female</Radio>
        <Radio value="M">male</Radio>
    </Radio.Group>
  </div>;
};

export default Radios;
