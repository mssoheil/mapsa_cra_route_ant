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
        console.log("HERE")
        form.resetFields();
    }

  return (
    <React.Fragment>
        <AntdForm name="login-form" form={form} onFinish={handleFinish} onFinishFailed={handleError}>
            <AntdForm.Item label="email" rules={[
                {
                    required: true,
                    message: "Please provide email"
                }
            ]} name="email">
                <Input />
            </AntdForm.Item>
            <Button htmlType="submit">submit</Button>
            <Button onClick={handleResetForm}>reset</Button>
        </AntdForm>
    </React.Fragment>
  )
}

export default Form