// components/LoginModal.js

import { Modal, Form, Input, Button, Checkbox } from "antd";
import React from "react";

interface Props {
  visible: boolean,
  loading: boolean,
  onCancel: () => void,
  onOke: () => void,
}

const LoginModal: React.FC<Props> = ({ visible, onCancel, onOke, loading }) => {

  return (
    <Modal
      title="Login"
      visible={visible}
      onCancel={onCancel}
      footer={null}
    >
      <Form name="login" initialValues={{ remember: true }}>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button
            block
            type="primary"
            loading={loading}
            onClick={onOke}
          >
            Log In
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default LoginModal;
