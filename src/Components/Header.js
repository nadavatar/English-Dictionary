import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

// keeps the header further from the icon
const HeaderContent = "  English Dictionary";

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="col-md-6 m-auto">
          <h1 className="text-center mb-3">
            <FontAwesomeIcon icon={faBookOpen} />
            {HeaderContent}
          </h1>
        </div>
      </div>
    );
  }
}
