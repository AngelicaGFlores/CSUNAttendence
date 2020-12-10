import React, { Component } from "react";
import { Button } from "reactstrap";

export class SelectFaculty extends Component {
  render() {
    return (
      <div>
        <div className="Faculty-ID">
          <Button>ID:FacultyName</Button>
        </div>
      </div>
    );
  }
}

export default SelectFaculty;
