import React, { Component } from "react";
import { Button } from "reactstrap";

export class SelectStudent extends Component {
  render() {
    return (
      <div className="Student-button">
        <Button>ID:Name</Button>
      </div>
    );
  }
}

export default SelectStudent;
