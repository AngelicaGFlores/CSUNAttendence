import React, { Component } from "react";
import { Button } from "reactstrap";

export class FacultyProfile extends Component {
  render() {
    return (
      <div>
        {
          // -- Image Tag --
        }
        <image>Image goes here</image>
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
        <h2>FULL Name</h2>
        <h3>Faculty ID</h3>
      </div>
    );
  }
}

export default FacultyProfile;
