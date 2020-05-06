import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.less';
import { SSR } from '@/framework/app';
import { hot } from 'react-hot-loader/root';
import Layout from '@/component/layout';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from '@/framework/request';

const Login: React.FC = props => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
    axios.post('/api/user/login', values);
  };

  return (
    <Layout>
      <main className={styles['login-container']}>
        <div className={styles['filter-mask']} />
        <div className={styles['login-form-wrap']}>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="phoneNumber"
              rules={[{ required: true, message: '请输入你的手机号!' }]}
            >
              <Input size="large" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: '请输入你的密码!' }]}
            >
              <Input
                size="large"
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="密码"
              />
            </Form.Item>
            <Form.Item className={styles['login-from-actions']}>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>记住密码</Checkbox>
              </Form.Item>

              <a rel="nofollow" href="">
                忘记密码？
              </a>
            </Form.Item>

            <Form.Item>
              <Button size="large" type="primary" htmlType="submit" className={styles['login-form-button']}>
                登 录
              </Button>
              <a href="" rel="nofollow" className={styles['login-form-register']}>现在去注册</a>
            </Form.Item>
          </Form>
        </div>
      </main>
    </Layout>
  );
};

Login.propTypes = {};

export default EASY_ENV_IS_DEV ? SSR(hot(Login)) : SSR(Login);
