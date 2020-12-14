import React, { Component } from "react";
import QRCode from "qrcode.react";
import { Button } from "reactstrap";
export class FacultyGenerateQr extends Component {
  state = {
    isQrGenerated: false,
    qrValue: null,
    userId: 1,
    courseId: "16884",
    userMonth: "12",
    userDay: "24",
  };
  genPass() {
    var pass = "";
    var possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

    for (var i = 0; i < 10; i++)
      pass += possible.charAt(Math.floor(Math.random() * possible.length));

    return pass;
  }
  generateQrCode() {
    //Generate Pass and convert it to a QR Code
    let generatedPass = this.genPass();
    //Set Qr Code Data
    this.setState({
      isQrGenerated: true,
      qrValue: generatedPass,
    });
  }
  render() {
    console.log(this.isQrGenerated);
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
    };
    // Split Information
    let userFullName =
      thisUserInformation.firstName + " " + thisUserInformation.lastName;
    
    if (this.state.isQrGenerated) {
      return (
        <div>
          <div>
            <h1>Image Goes Here</h1>
            <h2>Generate Qr Code</h2>
            <h4>Class :</h4>
            {this.state.courseId}
            <h4>Month :</h4>
            {this.state.userMonth}
            <h4>Day :</h4>
            {this.state.userDay}
            <h1>{this.state.qrValue}</h1>
            <QRCode value={this.state.qrValue} />
          </div>
          <h1>{userFullName}</h1>
          <h3>{this.state.userId}</h3>
        </div>
      );
    } else {
      return (
        <div>
          <div>
            <h1>Image Goes Here</h1>
            <h2>Generate Qr Code</h2>
            <h4>Class :</h4>
            {this.state.courseId}
            <h4>Month :</h4>
            {this.state.userMonth}
            <h4>Day :</h4>
            {this.state.userDay}
            <br />
            <Button onClick={() => this.generateQrCode()}>
              Generate QR Code
            </Button>
          </div>
          <h1>{userFullName}</h1>
          <h3>{this.state.userId}</h3>
        </div>
      );
    }
    
  }
}
export default FacultyGenerateQr;
