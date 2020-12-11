import React, { Component } from "react";
import { Button } from "reactstrap";

export class FacultyProfile extends Component {
  render() {
    return (
      <div>
        {
          // -- Image Tag --
        }
        <h1>Image goes here</h1>
        <br/>
        {
          // -- Navigation Buttons 3 : Approvals - Generate QR Code - Check Attendence --
        }
        <Button>Approvals</Button>
        <br />
        <Button>generate QR Code</Button>
        <br />
        <Button>Check Attendence</Button>
        <br />

        {
          // -- Faculty Information : Name - Id --
        }
        <h1>FULL Name</h1>
        <h3>Faculty ID</h3>
      </div>
    );
  }
}

export default FacultyProfile;
