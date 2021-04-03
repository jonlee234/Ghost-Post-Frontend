import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import HighestLiked from "./components/HIghestLiked";
import Nav from "./components/Nav";
import AllBoasts from "./components/AllBoasts";
import AllRoasts from "./components/AllRoasts";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/most_voted" component={HighestLiked} />
        <Route path="/all_boasts" component={AllBoasts} />
        <Route path="/all_roasts" component={AllRoasts} />

        <Route path="/create_post" component={CreatePost} />
      </Switch>
    </Router>
  );
}

export default App;
