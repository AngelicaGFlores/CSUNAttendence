import React, { Component } from "react";
import { Form, Button , Label, Input} from "reactstrap";

export class StudentRequest extends Component {
  state = {
    userId: 1,
    courseId: 16884,
  };
  send(approvalId) {
    console.log("You Clicked Me");
  }
  date() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = today.getFullYear();
    today = mm + "/" + dd + "/" + yyyy;
    return today;
  }
  render() {
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
          approvalId: "1",
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
    //User Full Name
    let userFullName =
      thisUserInformation.firstName + " " + thisUserInformation.lastName;
    //Functionality to handle Message
    let currentDate = this.date();
    return (
      <div>
        <h1>Image Goes Here</h1>
        <h2>Request</h2>
        <Form className="block-example border border-primary">
          <div>
            <h4>{userFullName}</h4>
            <h4>{currentDate}</h4>
            <h4>{this.state.courseId}</h4>
            <Label for="exampleText">Message</Label>
        <Input type="textarea" name="message" id="message" required/>
          </div>
          <Button>Cancel</Button>
          <Button>Send</Button>
        </Form>
        <h1>{userFullName}</h1>
        <h3>{this.state.userId}</h3>
      </div>
    );
  }
}

export default StudentRequest;
