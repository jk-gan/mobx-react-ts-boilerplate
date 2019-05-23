import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import styled from 'styled-components';

import SideMenu from './components/SideMenu';

const { Content } = Layout;

const Header = styled(Layout.Header)`
  background: #fff;
  z-index: 100;
  box-shadow: 0 2px 8px #f0f1f2;
`;

const Portal = ({ children }: { children: any }) => (
  <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px', float: 'right' }}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Layout>
      <SideMenu />
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  </Layout>
);

export default Portal;
