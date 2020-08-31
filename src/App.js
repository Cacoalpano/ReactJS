import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Main from "./components/main/main";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    );
  }
}
