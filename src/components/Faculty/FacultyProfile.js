import React, { Component } from "react";
import { Button } from "reactstrap";
export class FacultyProfile extends Component {
  state = {
    professorData : {}
  };
  async componentDidMount(){
    let props = this.props;
    console.log(props.location.state.professorInfo)
    this.setState({
      professorData : props.location.state.professorInfo
    });
  }
  render() {
    //Faculty Information
    let professorFullName = this.state.professorData.firstName + " " + this.state.professorData.lastName;
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
        <h1>{professorFullName}</h1>
        <h3>{this.state.professorData.professorId}</h3>
      </div>
    );
  }
}

export default FacultyProfile;
