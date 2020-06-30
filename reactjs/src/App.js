import React, { Component } from "react";
import "./styles.css";
import Routes from "./routes";

import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Routes></Routes>
      </div>
    );
  }
}

export default App;
