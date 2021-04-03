import { Layout, Menu, Breadcrumb } from "antd";
import { Link } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
function Nav() {
  return (
    <Layout>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">
            Home
            <Link to="/"></Link>
          </Menu.Item>
          <Menu.Item key="2">
            Create Post
            <Link to="/create_post"></Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/most_voted"></Link>
            Most Voted
          </Menu.Item>
          <Menu.Item key="4">
            View Boasts
            <Link to="/all_boasts"></Link>
          </Menu.Item>
          <Menu.Item key="5">
            View Roasts
            <Link to="/all_roasts"></Link>
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
}

export default Nav;
