import React from 'react';
import { Layout, Space, Row, Col, Input, Image } from 'antd';
import './styles.less';

//Components
import Header from '../../components/Header';

const Skillspage = () => {
    const { Content, Footer } = Layout;
    const { Search } = Input;

    const onSearch = (value) => {
        console.log(value)
    }
    return (
        <div className="skillsPage">
            <Layout className="layout" style={{background: 'none'}}>
                <Header/>
                <Content style={{ padding: '80px 50px' }}>
                    <div className="siteLayoutContent">
                        <Row>
                            <Col span={12} className="leftCol">
                                <Space direction="vertical">
                                    <h1 className="pageTitle">Skills. Ranked.</h1>
                                    <h4 className="pageSubTitle">How hard is it really?</h4>
                                    <Search placeholder="Search skills" onSearch={onSearch} enterButton size="large" />
                                </Space>
                            </Col>
                            <Col span={12}>
                            </Col>
                        </Row>
                    </div>
                </Content>
            </Layout>
        </div>
    )
};

export default Skillspage;