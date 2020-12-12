import React, { Component } from "react";
import {Table, Button} from 'reactstrap';

export class FacultyRequests extends Component {
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
      requests: [
        {
          requestId : "1", 
          studentId : "1",
          date: "01/27/2021",
          courseId: "20896",
          message: "Me Feel Bad",
        },
      ],
    };
    // Split Information
    let userFullName =
      thisUserInformation.firstName + " " + thisUserInformation.lastName;
    let allRequests = thisUserInformation.requests.map((request) => (
      <tr key={request.requestId}>
        <td>{request.studentId}</td>
        <td>{request.date}</td>
        <td>{request.courseId}</td>
        <td>{request.message}</td>
        <td><Button>Deny</Button></td>
        <td><Button>Approve</Button></td>

      </tr>
    ));
    return (
      <div>
        <Table dark responsive striped bordered hover>
          <thead>
            <tr>
              <th> Student Id </th>
              <th> Date </th>
              <th> Course Id </th>
              <th> Message </th>
              <th> Submit </th>
              <th> Submit </th>
            </tr>
          </thead>
          <tbody>{allRequests}</tbody>
        </Table>
      </div>
    );
  }
}

export default FacultyRequests;
