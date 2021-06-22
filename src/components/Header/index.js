import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import './styles.less';

const Header = () => {
    const { Header } = Layout;
    return (
        <Header style={{background: 'none'}} className="header">
            <div className="logo" >
                <h1>SR</h1>
            </div>
            <Menu mode="horizontal" className="headerMenu">
                <Menu.Item><Link to="/">Home</Link></Menu.Item>
                <Menu.Item><Link to="/skills">Skills</Link></Menu.Item>
                <Menu.Item><Link to="/login">Login</Link></Menu.Item>
                <Menu.Item><Link to="/register">Register</Link></Menu.Item>
            </Menu>
        </Header>
    )
};

export default Header;