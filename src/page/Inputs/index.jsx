import React from 'react';
// UI frameworks
import { Input } from 'antd';
import { UserOutlined, ClockCircleOutlined } from "@ant-design/icons"

const Inputs = () => {
    const [value, setValue] = React.useState("");

    function handleChange(event) {
        setValue(event.target.value)
    }
  return (
    <React.Fragment>
        <Input value={value} onChange={handleChange}/>
        <Input value={value} onChange={handleChange} addonBefore={<span>hello</span>}
        addonAfter={<span>$</span>}/>
        <Input.Search value={value} onChange={handleChange} disabled/>
        <Input.Search value={value} onChange={handleChange} loading/>
        <Input maxLength={5} size="large" type='number' />
        <Input.Group compact >
            <Input style={{width: "10px"}} />
            <Input style={{width: "100px"}}/>
        </Input.Group>
        <Input.Password  />
        <Input.TextArea  />
        <Input maxLength={5} size="large" type='number' suffix={<UserOutlined />} prefix={<ClockCircleOutlined />}/>
    </React.Fragment>
  )
}

export default Inputs