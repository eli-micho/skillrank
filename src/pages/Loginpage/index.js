import React from 'react';
import { Form, Space, Input, Button } from 'antd';
import './styles.less';

//Components
import Header from '../../components/Header';

const Loginpage = () => {
    return (
        <div className="loginPage">
            <Header />
            <div className="loginFormWrap">
                <Space>
                    <h1>Sign in</h1>
                </Space>
                <Form
                    layout="vertical"
                >
                    <Form.Item label="Email">
                        <Input placeholder="Email"/>
                    </Form.Item>

                    <Form.Item label="Password">
                        <Input placeholder="Password"/>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary">Sign In</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>    
    )
};

export default Loginpage;