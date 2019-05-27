import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const InputStyle = styled.div`
  #div {
    text-align: center;
  }
`;

export default class Input extends Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }

  handleInput = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (this.state.input.length > 0) {
        this.props.handleEnterKey(this.state.input);
      }
    } else {
      this.setState({
        input: e.target.value
      });
    }
  };

  render() {
    return (
      <div className="form-group has-feedback" id="div">
        {/* <InputStyle>
          <form>
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search for a word..."
              id="input"
              value={this.state.input}
              onChange={this.handleInput}
              onKeyPress={this.handleInput}
            />
            <button type="button" className="btn btn-primary" id="btn">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
        </InputStyle> */}
        <InputStyle>
          <form className="form text-center">
            <div className="row">
              <div className="col-xs-6 col-md-4">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search for a word..."
                    id="txtSearch"
                    onChange={this.handleInput}
                    onKeyPress={this.handleInput}
                  />
                  <div className="input-group-btn">
                    <button className="btn btn-primary" type="submit" id="btn">
                      <span>
                        <FontAwesomeIcon icon={faSearch} />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </InputStyle>
      </div>
    );
  }
}
