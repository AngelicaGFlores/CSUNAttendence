import React, { Component } from "react";
import { Button } from "reactstrap";

export class StudentProfile extends Component {
  state = {
    studentData: {},
  };
  async componentDidMount(){
    let props = this.props;
    console.log(props.location.state.studentInfo)
    this.setState({
      studentData : props.location.state.studentInfo
    });
  }
  render() {
    let studentFullName = this.state.studentData.firstName +  " " + this.state.studentData.lastName;
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
        <h1>{studentFullName}</h1>
        <h3>{this.state.studentData.studentId}</h3>
      </div>
    );
  }
}

export default StudentProfile;
