import React, { Component } from "react";
import QRCode from "qrcode.react";
import { Button } from "reactstrap";
export class FacultyGenerateQr extends Component {
  state = {
    professorInfo: {},
    isQrGenerated: false,
    studentId: null,
    currentDate : null,
    qrValue : null,
    fullName : "Loading"

  };
  genPass() {
    var pass = "";
    var possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

    for (var i = 0; i < 10; i++)
      pass += possible.charAt(Math.floor(Math.random() * possible.length));

    return pass;
  }
  generateDate() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear();

    let fullDate = mm + "/" + dd + "/" + yyyy;
    return fullDate;
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
  async componentDidMount() {
    let props = this.props;
    console.log("Prof Info : " + props.location.state.professorInfo);
    console.log("Student ID Info : " + props.location.state.studentId);


    var pass = "";
    var possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

    for (var i = 0; i < 10; i++)
      pass += possible.charAt(Math.floor(Math.random() * possible.length));

    let qr = pass;

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear();

    let fullDate = mm + "/" + dd + "/" + yyyy;
    this.setState({
      professorInfo: props.location.state.professorInfo,
      isQrGenerated: true,
      studentId: props.location.state.studentId,
      currentDate : fullDate,
      qrValue : qr,
      fullName : props.location.state.professorInfo.firstName + " " + props.location.state.professorInfo.lastName

    });
  }
  async generateClass(qrValue) {
    //Create a URL base to connect to lambda
    console.log();
    let pBaseUrl =
      "https://dx22mkw8qa.execute-api.us-west-1.amazonaws.com/Prod";
    let pQuery1 = "?professorId=" + this.state.professorInfo.professorId;
    let pQuery2 =
      "&courseId=" + 16983;
    let pQuery3 = "&date=" + this.state.currentDate;
    let pQuery4 = "&qrCodeId=" + this.state.qrValue;
    let pURL =
      pBaseUrl + pQuery1 + pQuery2 + pQuery3 + pQuery4;
    console.log(pURL);

    const pResponse = await fetch(pURL);
    console.log(pURL);
    alert("Class Was Generated : " +  16983 );
  }
  render() {
    let professorFullName = this.state.fullName;
    if (this.state.isQrGenerated) {
      return (
        <div>
          <div>
            <h1>Image Goes Here</h1>
            <h2>Generate Qr Code</h2>
            <h4>Class :</h4>
            {this.state.professorInfo.courses[16983].className}
            <h4>Date </h4>
            {this.state.currentDate}
            <h1>{this.state.qrValue}</h1>
            <QRCode value={this.state.qrValue} /> <br/>
            <Button  onClick={() => this.generateClass(this.state.qrValue)}>
              Create
            </Button>
          </div>
          <h1>{professorFullName}</h1>
        <h3>{this.state.professorInfo.professorId}</h3>
        </div>
      );
    } else {
      return (
        <div>
          <div>
            <h1>Image Goes Here</h1>
            <h2>Generate Qr Code</h2>
            <h4>Class :</h4>
            <h1>Loading...</h1>
            <h4>Date </h4>
            {this.state.currentDate}
          </div>
          <h1>{professorFullName}</h1>
        <h3>{this.state.professorInfo.professorId}</h3>
        </div>
      );
    }
  }
}
export default FacultyGenerateQr;
