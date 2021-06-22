import React from 'react';
import './styles.less';
import { Layout, Space, Row, Col, Input, Image } from 'antd';

//Components
import Header from './../../components/Header';

//Images
import illustration from './../../assets/skills.svg';

const Homepage = () => {
    const { Content, Footer } = Layout;
    const { Search } = Input;

    const onSearch = (value) => {
        console.log(value)
    }
    return (
        <div className="homepage">
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
                                <Image 
                                    src={illustration}
                                    preview={false}
                                />
                            </Col>
                        </Row>
                    </div>
                </Content>
            </Layout>
        </div>   
    )
};

export default Homepage;