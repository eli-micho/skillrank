import React, { useState } from 'react';
import { Form, Input, Button, Radio, Space } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons'
import './styles.less';

//Components
import Header from './../../components/Header';

const Registerpage = () => {
    return (
        <div className="registerPage">
            <Header />
            <div className="formWrap">
                <Space direction="vertical" className="pageTitle">
                    <h1>Create Account</h1>
                    <p>Already have an account? <a href="#">Sign in</a></p>
                </Space>
                <Form
                    layout="vertical"
                >
                    <Form.Item label="Name">
                        <Input placeholder="John Smith"/>
                    </Form.Item>

                    <Form.Item label="Email">
                        <Input placeholder="john@example.com" />
                    </Form.Item>

                    <Form.Item label="Password">
                        <Input 
                            placeholder="Password" 
                            type="password"
                        />
                    </Form.Item>

                    <Form.Item label="Confirm Password">
                        <Input 
                            placeholder="Confirm Password" 
                            type="password"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button 
                            type="primary"
                        >
                            Sign Up
                            <ArrowRightOutlined />
                        </Button>
                    </Form.Item>
                </Form>

            </div>
        </div>
    )
};

export default Registerpage;