import React, { Component } from "react";
import { Button } from "reactstrap";

export class FacultyProfile extends Component {
  state = {
    userId: 1,
  };
  render() {
    let thisUserId = this.state.userId;
    //Make a lambda Call that passes userID;
    let thisUserInformation = {
      professorId: "1",
      firstName: "Adam",
      lastName: "Kaplan",
      courses: [
        {
          courseId: "16884",
          department: "COMP",
          classNumber: "310",
          classSection: "03",
          className: "Auto Lang + Computin",
        },
      ],
    }
    // Split Information
    let userFullName =
      thisUserInformation.firstName + " " + thisUserInformation.lastName;
    return (
      <div>
        {
          // -- Image Tag --
        }
        <h1>Image goes here</h1>
        <br />
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
        <h1>{userFullName}</h1>
        <h3>{this.state.userId}</h3>
      </div>
    );
  }
}

export default FacultyProfile;
