import { Layout, Menu, Breadcrumb } from "antd";
import Posts from "./Posts";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HighestLiked from "./HIghestLiked";
import CreatePost from "./CreatePost";

const { Header, Content, Footer } = Layout;

function Home() {
  return (
    <Layout>
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">Content</div>
        <Posts />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Created by Jonathane Leavell
      </Footer>
    </Layout>
  );
}

export default Home;
