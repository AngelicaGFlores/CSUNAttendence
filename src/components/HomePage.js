import React, { Component } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

export class HomePage extends Component {
  state = {
    isLoading: true,
    professorInfo: {},
    studentInfo: {},
  };
  async componentDidMount() {
    //Professor You want to log into
    let professorUniqueID = "4";
    //Create a URL base to connect to lambda
    let pBaseUrl = "https://ueh4c7vk4l.execute-api.us-west-1.amazonaws.com/Prod";
    let pQuery1 = "?professorId=" + professorUniqueID;
    let pURL = pBaseUrl + pQuery1;
    //Fetch the API JSON
    const pResponse = await fetch(pURL);
    const professorBody = await pResponse.json();
    console.log(professorBody);
    //Student You want to log into
    let studentUniqueID = "1";
    //Create a URL base to connect to lambda
    let sBaseUrl = "https://7fvcppihv3.execute-api.us-west-1.amazonaws.com/Prod";
    let sQuery1 = "?studentId=" + studentUniqueID;
    let sURL = sBaseUrl + sQuery1;
    //Fetch the API JSON
    const sResponse = await fetch(sURL);
    const studentBody = await sResponse.json();
    console.log(studentBody);

    //Reload the state
    this.setState({
      professorInfo : professorBody,
      studentInfo: studentBody,
      isLoading: false,
    });
  }
  render() {

    let isLoading = this.state.isLoading;
    let professorFullName = this.state.professorInfo.firstName + " " + this.state.professorInfo.lastName;
    let studentFullName = this.state.studentInfo.firstName +  " " + this.state.studentInfo.lastName;

    //if its still fetching disable the buttons Else enable and pass data
    if (isLoading) {
      return (
        <div>
          <div className="Logo">
            CSUN
            <br />
            California
            <br />
            State University
            <br />
            Northrige
          </div>
          <div className="Image">
            <h1>Image goes here</h1>
          </div>
          <div className="Navigation-Buttons">
            <Button disabled>Faculty</Button> <br />
            <Button disabled>Student</Button> <br />
            <h1>Loggin In ... Please Wait</h1>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="Logo">
            CSUN
            <br />
            California
            <br />
            State University
            <br />
            Northrige
          </div>
          <div className="Image">
            <h1>Image goes here</h1>
          </div>
          <div className="Navigation-Buttons">
            <h4>
              Log in as :{" "}
              {professorFullName}
            </h4>
            
            <Link
              to={{
                pathname: "/faculty/profile",
                state: { professorInfo: this.state.professorInfo },
              }}
            >
              <Button>Faculty</Button> <br />
            </Link>
            <h4>
              Log in as :{" "}
              {studentFullName}
            </h4>
            <Link
              to={{
                pathname: "/student/profile",
                state: { studentInfo: this.studentInfo },
              }}
            >
              <Button>Student</Button>
            </Link>
            {/* {this.state.isLoading ? this.renderButtons() : null} */}
          </div>
        </div>
      );
    }
  }
}

export default HomePage;