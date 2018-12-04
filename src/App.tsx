import * as React from 'react'
import {
  NavLink
} from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import StockQuery from './containers/pages/stock-query'
import StockAdjust from './containers/pages/stock-adjust'
// import { Dispatch } from 'redux';
// import { connect } from 'react-redux';
// import { addTodo } from './containers/home/modules/actions';
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
const { SubMenu } = Menu
const { Header, Content, Sider } = Layout
import './App.less';

class App extends React.Component {
  constructor(props: any) {
    super(props)
  }
  render() {
      return (
        <Layout>
          <Header className="header">
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
          <Router>
          <Layout>
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['0']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
              >
                <Menu.Item key="0">报表中心</Menu.Item>
                <SubMenu key="sub1" title={<span><Icon type="user" />库存调整管理</span>}>
                  <Menu.Item key="1">
                    <NavLink key="1" to={{pathname: '/home/stock-adjust?step=1'}}>库存调整</NavLink>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <NavLink key="1" to={{pathname: '/home/stock-adjust?step=2'}}>库存审核</NavLink>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <NavLink key="1" to={{pathname: '/home/stock-query'}}>库存查询</NavLink>
                  </Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="laptop" />项目</span>}>
                  <Menu.Item key="5">好东西</Menu.Item>
                  <Menu.Item key="6">option6</Menu.Item>
                  <Menu.Item key="7">option7</Menu.Item>
                  <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                  <Menu.Item key="9">option9</Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                  <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                <Route render={({location}) => {
                    return (
                        <Switch key={location.pathname}>
                            <Route location={location} path="/home/stock-adjust:step" component={StockAdjust}/>
                            <Route location={location} path="/home/stock-query" component={StockQuery}/>
                        </Switch>
                    )
                }}/>
              </Content>
            </Layout>
          </Layout>
          </Router>
        </Layout>
      )
  }
}

export default App
