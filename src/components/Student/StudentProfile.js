import React, { Component } from "react";
import { Button } from "reactstrap";

export class StudentProfile extends Component {
  state = {
    userId: 1,
  };
  render() {
    let thisUserId = this.state.userId;
    //Make a lambda Call that passes userID;
    let thisUserInformation = {
      studentId: "1",
      firstName: "Jace",
      lastName: "Keith",
      courses: [
        {
          courseId: "16884",
          department: "COMP",
          classNumber: "310",
          classSection: "03",
          className: "Auto Lang + Computin",
        },
        {
          courseId: "16332",
          department: "COMP",
          classNumber: "424",
          classSection: "01",
          className: "Comp System Secrty",
        },
        {
          courseId: "16756",
          department: "COMP",
          classNumber: "440",
          classSection: "01",
          className: "Database Design",
        },
        {
          courseId: "16983",
          department: "COMP",
          classNumber: "482",
          classSection: "02",
          className: "Algorithm Design",
        },
        {
          courseId: "20896",
          department: "COMP",
          classNumber: "491L",
          classSection: "08",
          className: "Sr Project Lab",
        },
        {
          courseId: "17137",
          department: "COMP",
          classNumber: "542",
          classSection: "01",
          className: "Machine Learning",
        },
      ],
      approvals: [
        {
          date: "01/27/2021",
          courseId: "20896",
          status: "Approved",
        },
      ],
      attendences: [
        {
          date: "01/25/2021",
          courses: [
            {
              courseId: "16983",
              checkedIn: "05:01:20",
              anteMeridiem: "PM",
              status: "Late",
            },
            {
              courseId: "20896",
              checkedIn: "08:29:49",
              anteMeridiem: "PM",
              status: "Present",
            },
          ],
        },
        {
          date: "01/26/2021",
          courses: [
            {
              courseId: "16884",
              checkedIn: "10:59:12",
              anteMeridiem: "AM",
              status: "Present",
            },
            {
              courseId: "17137",
              checkedIn: "06:49:29",
              anteMeridiem: "PM",
              status: "Present",
            },
          ],
        },
        {
          date: "01/27/2021",
          courses: [
            {
              courseId: "16983",
              checkedIn: "null",
              anteMeridiem: "null",
              status: "Absent",
            },
            {
              courseId: "20896",
              checkedIn: "null",
              anteMeridiem: "null",
              status: "Excused",
            },
          ],
        },
      ],
    };
    // Split Information
    let userFullName =
      thisUserInformation.firstName + " " + thisUserInformation.lastName;
    return (
      <div>
        {
          // -- Image Tag --
        }
        <h1>Image goes here </h1>
        <br />

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
        <h1>{userFullName}</h1>
        <h3>{this.state.userId}</h3>
      </div>
    );
  }
}

export default StudentProfile;
