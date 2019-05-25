import React, { Component } from "react";
import Header from "./Components/Header";
import Input from "./Components/Input";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      word: ""
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Input />
      </div>
    );
  }
}
