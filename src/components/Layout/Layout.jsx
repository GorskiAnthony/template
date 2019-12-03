import React, { useState } from "react"
import { Link } from "gatsby"
import { Layout, Menu, Icon, Switch } from "antd"
import ItemsNav from "../ItemsNav"
import "antd/dist/antd.css"
import "./layout.css"

const { Header, Sider, Content } = Layout

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1526076_l8u2hmk2oc.js",
})

const SiderLayout = ({ children }) => {
  const [theme, setTheme] = useState("ligth")
  const [collapsed, setCollapsed] = useState(false)


  const handleTheme = (checked) => {
    if (!checked) {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  const handleToggle = () => {
    setCollapsed(!collapsed)
  }

  return (
    <Layout className="layout">
      <Sider theme={theme} trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme={theme} mode="inline" defaultSelectedKeys={["1"]}>
          {ItemsNav.map(item => (
            <Menu.Item key={item.id}>
              <Link to={`/${item.link}`} />
              {/** J'appel les icons qui se trouve sur le site https://www.iconfont.cn/
               * Je creer un projet avec les icon que je veux et les imports dans le dossier concerné */}
              <IconFont className="icon" type={`icon-${item.icon}`} />
              <span> {item.label}</span>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: "#fff", padding: 0 }}>
          <Icon
            className="trigger"
            type={collapsed ? "menu-unfold" : "menu-fold"}
            onClick={handleToggle}
          />
          <Switch
            checkedChildren={<Icon type="check" />}
            unCheckedChildren={<Icon type="close" />}
            defaultChecked
            onChange={handleTheme}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default SiderLayout
