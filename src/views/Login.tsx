import React, { useContext } from 'react';
import {
  Input, Form, Button, Card,
} from 'antd';
import { FormComponentProps } from 'antd/lib/form/Form';

import { StoreContext } from '../contexts';

interface Props extends FormComponentProps {
  username: string;
  password: string;
}

const Login = (props: Props) => {
  const rootStore = useContext(StoreContext);

  const { getFieldDecorator } = props.form;

  const onSubmit = (e: React.FormEvent<any>) => {
    e.preventDefault();
    props.form.validateFields(async (err: any, values: string[]) => {
      if (!err) {
        await rootStore.authStore.login({
          body: values,
          success: () => {},
          error: () => {},
          finally: () => {},
        });
      }
    });
  };

  return (
    <Card style={{ width: 500, margin: '250 auto' }}>
      <Form onSubmit={onSubmit}>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(<Input placeholder="Username" />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(<Input type="password" placeholder="Password" />)}
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Log in
        </Button>
      </Form>
    </Card>
  );
};

export default Form.create<Props>()(Login);
