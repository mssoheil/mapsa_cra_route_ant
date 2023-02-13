import { Select } from 'antd'
import React from 'react'

const optionValues = [
    {
        value: "select", label: "select an item..."
    },
    {
        value: "1", label: "opt1",
        disabled: true,
    },
    {
        value: "2", label: "opt2"
    }
]

const Selects = () => {

    const [options, setOptions] = React.useState(optionValues)

    const [value, setValue] = React.useState("select");
    const [values, setValues] = React.useState(["select"]);

    function handleChange(value) {
        console.log("Debug ~ handleChange ~ value", value)
        setValues(value)
        
    }

    function handleSearch(value) {
        setOptions(optionValues.filter(item => item.label.includes(value)))
    }

   

    function handleSelect(value) {
        setValue(value);
        console.log("Debug ~ handleSelect ~ value", value)
        
    }

    function handleClear() {
        setValues([])
    }

    

  return (
    <React.Fragment>
        {/* <Select style={{width: "100px"}} value="select">
            <Select.Option value="select">select an option</Select.Option>
            <Select.Option disabled value="1">option 1</Select.Option>
            <Select.Option value="2">option 2</Select.Option>
        </Select> */}
        <Select style={{width: "400px"}}
        onSearch={handleSearch} filterOption={false} 
         options={options} 
        mode="multiple"
         showSearch
         value={values}
         allowClear
         onClear={handleClear}
         onChange={handleChange}
         listHeight={2000}
         tagRender={(props) => <span style={{background: "green"}}>{props.label}</span>} 
         />
        <Select style={{width: "400px"}}
        onSearch={handleSearch} filterOption={false} 
         options={options} 
         showSearch
         listHeight={2000}
         onSelect={handleSelect}
         value={value}
         />
    </React.Fragment>
  )
}

export default Selects