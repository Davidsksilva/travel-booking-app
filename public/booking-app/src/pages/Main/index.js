import React, { Component } from 'react'

import { Layout, Menu, Breadcrumb, Row, Col, Input, Button, Icon, Form  } from 'antd';
import "antd/dist/antd.css";
import "./styles.css"
const { Header, Content, Footer } = Layout;

// App's Main Page
export default class Main extends Component {


  onChange = (e) => {
    console.log(e);
  };
  render() {

    return (
      <Layout className="layout">
        <Header id="Header">
          <div className="logo" />
          <Menu
            id = "Menu"
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px'}}
          >
            <Menu.Item className="Menu-Item" key="1">Reservas</Menu.Item>
          </Menu>
        </Header>
        <Content id = "Main-Container">
          <div style={{ background: '#F0F2F5', padding: 24, minHeight: 815 }} >
         
            <Row className = "Search-Outter-Container" type="flex" justify="center" gutter={8}>

             
                  <Col className = "Col-Container" spawn={4}>
                    Local
                  </Col>
                  <Col className = "Col-Container" spawn={4}>
                    <Input placeholder="input with clear icon" allowClear onChange={this.onChange} />
                  </Col>
                  <Col className = "Col-Container" spawn={4}>
                    <Button type="dashed" icon="search">Search</Button>
                  </Col>
             
            </Row>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Booking App ©2019 Created by David
        </Footer>
      </Layout>
    )
  }
}

