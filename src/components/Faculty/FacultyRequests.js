import React, { Component } from "react";
import {Table, Button} from 'reactstrap';

export class FacultyRequests extends Component {
  state = {
    professorData : {}
  };
  componentDidMount(){
    let props = this.props;
    console.log(props.location.state.professorInfo)
    this.setState({
      professorData : props.location.state.professorInfo
    });
  }
  render() {

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
        </Table>
      </div>
    );
  }
}

export default FacultyRequests;
