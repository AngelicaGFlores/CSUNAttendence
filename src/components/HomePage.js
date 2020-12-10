import React, { Component } from "react";
import { Button } from "reactstrap";
export class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="Logo">
          CSUN
          <br />
          California
          <br />
          State University
          <br />
          Northrige
        </div>
        <div className="Image">
          <h1>Image goes here</h1>
        </div>
        <div className="Navigation-Buttons">
          <Button>Faculty</Button> <br/>
          <Button>Student</Button>
        </div>
      </div>
    );
  }
}

export default HomePage;
