import React, { Component } from "react";
import styled from "styled-components";

const InputStyle = styled.div`
  #input {
    text-align: left;
  }
`;

export default class Input extends Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }

  updateInput = e => {
    console.log(e.keyCode);
    if (e.keyCode === 13) {
      console.log("Enter");
    } else {
      this.setState({
        input: e.target.value
      });
    }
  };

  render() {
    return (
      <div className="form-group has-feedback">
        <InputStyle>
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search for a word..."
            id="input"
            value={this.state.input}
            onChange={this.updateInput}
          />
          <i className="glyphicon glyphicon-search" />
        </InputStyle>
      </div>
    );
  }
}
