import React from "react";
// UI frameworks
import { Button, Form as AntdForm, Input } from "antd";

const Form = () => {

    const [form] = AntdForm.useForm();

    function handleFinish(values) {
        console.log("values", values);
    }

    function handleError(error) {
        console.log("Error", error);

    }

    function handleResetForm() {
        form.resetFields();
    }

    function handleChangeEmail(event) {
        const {value} = event.target;
        if(isNaN(value)) {
            form.setFieldValue("email", value.replace(/\w/g, ""))
        } else {
            form.setFieldValue("email", value)
        }
        
    }

    async function emailValidator(_, value) {
        if(value.length <= 5) {
            return Promise.reject("the email should at least have 5 characters")
        }
        return Promise.resolve();
       

    } 

  return (
    <React.Fragment>
        <AntdForm name="login-form" form={form} size="large"
        layout="inline"
        onFinish={handleFinish} onFinishFailed={handleError}
        validateTrigger="onChange" colon={false} requiredMark={false}
        // disabled
        >
            <AntdForm.Item label="email"  name="email" onChange={handleChangeEmail}>
                <Input />
            </AntdForm.Item>
            <AntdForm.Item label="validated" name="validated" rules={[
                {validator: emailValidator}
            ]} >
                <Input />
            </AntdForm.Item>
            
            <Button htmlType="submit">submit</Button>
            <Button onClick={handleResetForm}>reset</Button>
        </AntdForm>
    </React.Fragment>
  )
}

export default Form