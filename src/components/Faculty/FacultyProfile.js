import React, { Component } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

export class FacultyProfile extends Component {
  state = {
    professorInfo: {},
    studentId : '1', // Simulate a specific student click
    fullName : "Loading"
  };
  async componentDidMount() {
    let props = this.props;
    console.log(props.location.state.professorInfo);
    this.setState({
      professorInfo: props.location.state.professorInfo,
      fullName : props.location.state.professorInfo.firstName + " " + props.location.state.professorInfo.lastName
    });
  }
  render() {
    let propss = this.props;

    //Faculty Information
    let professorFullName = this.state.fullName
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
        <Link
          to={{
            pathname: "/faculty/profile/select/requests",
            state: { 
              professorInfo: this.state.professorInfo,
              studentId : this.state.studentId
             }
          }}
        >
          <Button>Approvals</Button>
        </Link>
        <br />
        <Link
          to={{
            pathname: "/faculty/generate",
            state: { 
              professorInfo: this.state.professorInfo,
              studentId : this.state.studentId
             }
          }}
        >
        <Button>Generate QR Code</Button>
        </Link>
        <br />
        <Button>Check Attendence</Button>
        <br />

        {
          // -- Faculty Information : Name - Id --
        }
        <h1>{professorFullName}</h1>
        <h3>{this.state.professorInfo.professorId}</h3>
      </div>
    );
  }
}

export default FacultyProfile;
