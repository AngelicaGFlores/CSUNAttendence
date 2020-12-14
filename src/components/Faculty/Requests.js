import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import { Link } from "react-router-dom";

export class Requests extends Component {
  state = {
    requestsData: {},
    professorInfo:{},
    isLoading: true,
    studentId: null,
  };
  async componentDidMount() {
    let props = this.props;
    console.log("Prof Info : " + props.location.state.professorInfo);
    console.log("Student ID Info : " + props.location.state.studentId);
    this.setState({
      professorInfo: props.location.state.professorInfo,
      isLoading: false,
      studentId: props.location.state.studentId,
    });
  }
  async denyRequest(approvalId) {
    //Create a URL base to connect to lambda
    let pBaseUrl =
      "https://8lgghrjt58.execute-api.us-west-1.amazonaws.com/Prod";
    let pQuery1 = "?approvalId=" + approvalId;
    let pQuery2 =
      "?courseId=" + this.state.professorInfo.requests[approvalId].courseId;
    let pQuery3 = "?date=" + this.state.professorInfo.requests[approvalId].date;
    let pQuery4 =
      "?professorId" +
      this.state.professorInfo.requests[approvalId].professorId;
    let pQuery5 = "?studentId" + this.state.studentId;
    let pQuery6 = "?approvalStatus" + "Deny";
    let pURL =
      pBaseUrl + pQuery1 + pQuery2 + pQuery3 + pQuery4 + pQuery5 + pQuery6;
    const pResponse = await fetch(pURL);
    alert(approvalId + " : Was Denied!");
  }
  async acceptRequest(approvalId) {
    //Create a URL base to connect to lambda
    let pBaseUrl =
      "https://8lgghrjt58.execute-api.us-west-1.amazonaws.com/Prod";
    let pQuery1 = "?approvalId=" + approvalId;
    let pQuery2 =
      "&courseId=" + this.state.professorInfo.requests[approvalId].courseId;
    let pQuery3 = "?date=" + this.state.professorInfo.requests[approvalId].date;
    let pQuery4 =
      "&professorId" +
      this.state.professorInfo.requests[approvalId].professorId;
    let pQuery5 = "&studentId" + this.state.studentId;
    let pQuery6 = "&approvalStatus" + "Approved";
    let pURL =
      pBaseUrl + pQuery1 + pQuery2 + pQuery3 + pQuery4 + pQuery5 + pQuery6;
    const pResponse = await fetch(pURL);
    const pBody = await pResponse.json();
    alert(approvalId + " : Was Approved!");
  }
  render() {
    if (this.state.isLoading) {
      return (
        <div>
          <h1>Requests are Loading... Please Wait</h1>
        </div>
      );
    } else {
      //Get all the keys
      /*
      let requestKeys = Object.keys(
        this.state.professorInfo.requests[this.state.studentId]
      );
      let requestKeysInts = requestKeys.map(key => (parseInt(key)));
      console.log(requestKeysInts);
      let requests = requestKeysInts.map((request) => {
        <tr>
          <tr key={request}>
            {console.log(request)}
            <td>{request}</td>
            <td>{this.state.studentId}</td>
            <td>{this.state.professorInfo.requests[request][request].date}</td>
            <td>{this.state.professorInfo.requests[request][request].courseId}</td>
            <td>{this.state.professorInfo.requests[request][request].message}</td>
            <td>
              <Button
                className="btn btn-lg btn-warning"
                onClick={() => this.denyRequest(1)}
              >
                {" "}
                Deny{" "}
              </Button>
            </td>
            <td>
              <Button
                className="btn btn-lg btn-info"
                onClick={() => this.acceptRequest(1)}
              >
                {" "}
                Accept{" "}
              </Button>
            </td>
          </tr>
        </tr>;
      });
      */
      return (
        <div className="container border border-secondary-rounded center">
          <div className="row">
            <div className="col-12">
      <h4>All Request for student : {this.state.studentId}</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 center text-center">
              <Table dark responsive striped bordered hover>
                <thead>
                  <tr>
                    <th> Approval Id </th>
                    <th> Student Id </th>
                    <th> Date </th>
                    <th> Course Id </th>
                    <th> Message </th>
                    <th> Cancel </th>
                    <th> Send </th>
                  </tr>
                </thead>
                <tbody>
                    <tr key={1}>
                      <td>{1}</td>
                      <td>{this.state.studentId}</td>
                      <td>
                        {
                          this.state.professorInfo.requests[1][1]
                            .date
                        }
                      </td>
                      <td>
                        {
                          this.state.professorInfo.requests[1][1]
                            .courseId
                        }
                      </td>
                      <td>
                        {
                          this.state.professorInfo.requests[1][1]
                            .message
                        }
                      </td>
                      <td>
                        <Button
                          className="btn btn-lg btn-warning"
                          onClick={() => this.denyRequest(1)}
                        >
                          {" "}
                          Deny{" "}
                        </Button>
                      </td>
                      <td>
                        <Button
                          className="btn btn-lg btn-info"
                          onClick={() => this.acceptRequest(1)}
                        >
                          {" "}
                          Accept{" "}
                        </Button>
                      </td>
                    </tr>
                </tbody>
              </Table>
              <Link
                to={{
                  pathname: "/faculty/profile",
                  state: { 
                    professorInfo: this.state.professorInfo,
                   }
                }}
              >
                <Button>Done : Profile</Button> <br />
              </Link>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Requests;
