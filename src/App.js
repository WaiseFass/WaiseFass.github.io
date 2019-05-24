import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Link } from "react-router-dom";
import Main from "./components/main";
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Header className="header-color" scroll>
            <Navigation>
              <Link to="/">Home</Link>
            </Navigation>
            <Navigation>
              <Link to="/projects">Projects</Link>
              <Link to="/aboutMe">About me</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/resume">Resume</Link>
            </Navigation>
          </Header>
          <Drawer title="Title">
            <Navigation>
              <a href="#">Link</a>
              <a href="#">Link</a>
              <a href="#">Link</a>
              <a href="#">Link</a>
            </Navigation>
          </Drawer>
          <Content>
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
