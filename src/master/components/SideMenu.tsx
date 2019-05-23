import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Layout } from 'antd';

const { Sider } = Layout;

const MENU = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    path: '/dashboard',
  },
];

const SideMenu = () => (
  <Sider width={250} style={{ background: '#fff' }}>
    <Menu
      mode="inline"
      defaultSelectedKeys={['seeBothWays']}
      style={{ height: '100%', borderRight: 0 }}
    >
      {MENU.map(each => (
        <Menu.Item key={each.key}>
          <Link to={each.path}>{each.label}</Link>
        </Menu.Item>
      ))}
    </Menu>
  </Sider>
);

export default SideMenu;
