import React, { Component } from "react";
import { Button } from "reactstrap";

export class StudentProfile extends Component {
  render() {
    return (
      <div>
        {
          // -- Image Tag --
        }
        <image>Image goes here </image>

        {
          // -- Navigation Buttons 3 : Approvals/Request - Read QR Code - Check Attendence --
        }
        <Button>Approvals/Request</Button>
        <br />
        <Button>Read QR Code</Button>
        <br />
        <Button>Check Attendence</Button>
        <br />

        {
          // -- Student Information : Name - Id --
        }
        <h2>FULL Name</h2>
        <h3>Student ID</h3>
      </div>
    );
  }
}

export default StudentProfile;
