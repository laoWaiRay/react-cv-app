import React, { Component } from "react";
import Header from "./components/Header"
import Resume from "./components/Resume";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header/>
        <Resume/>
      </div>
    )
  }
}

export default App