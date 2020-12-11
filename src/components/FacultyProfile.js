import React, { Component } from "react";
import { Button } from "reactstrap";

export class FacultyProfile extends Component {
  state =  {
    currentUserName : null,
    currentUserId : null,

    faculties : [
      {
          "proffesorId": "1",
          "firstName": "Adam",
          "lastName": "Kaplan",
          "coursesId": "16884"
      },
      {
          "proffesorId": "2",
          "firstName": "Adrian",
          "lastName": "Gonzalez",
          "coursesId": "16332"
      },
      {
          "proffesorId": "3",
          "firstName": "Aaron",
          "lastName": "Alvarez",
          "coursesId": "16756"
      },
      {
          "proffesorId": "4",
          "firstName": "Angelica",
          "lastName": "Flores",
          "coursesId": "16983",
          "requests": "2-01/25/2021-16983-Me Wanna Party,3-01/27/2021-16983-Me Hate School"
      },
      {
          "proffesorId": "5",
          "firstName": "Kat",
          "lastName": "Lee",
          "coursesId": "20896",
          "requests": "1-01/27/2021-20896-Me feel Bad"
      },
      {
          "proffesorId": "6",
          "firstName": "Chi",
          "lastName": "Leong",
          "coursesId": "17137"
      }
    ]
  }
  render() {
    //Receive Passed Information
      // ID  : 1 
    //Update the Component with the User information
      // Update the State currentUserName, currentUserId
    
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
