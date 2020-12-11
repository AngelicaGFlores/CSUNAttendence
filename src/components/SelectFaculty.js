import React, { Component } from "react";
import { Button } from "reactstrap";

export class SelectFaculty extends Component {
  state = {
    faculties: [
      {
        proffesorId: "1",
        firstName: "Adam",
        lastName: "Kaplan",
        coursesId: "16884",
      },
      {
        proffesorId: "2",
        firstName: "Adrian",
        lastName: "Gonzalez",
        coursesId: "16332",
      },
      {
        proffesorId: "3",
        firstName: "Aaron",
        lastName: "Alvarez",
        coursesId: "16756",
      },
      {
        proffesorId: "4",
        firstName: "Angelica",
        lastName: "Flores",
        coursesId: "16983",
        requests:
          "2-01/25/2021-16983-Me Wanna Party,3-01/27/2021-16983-Me Hate School",
      },
      {
        proffesorId: "5",
        firstName: "Kat",
        lastName: "Lee",
        coursesId: "20896",
        requests: "1-01/27/2021-20896-Me feel Bad",
      },
      {
        proffesorId: "6",
        firstName: "Chi",
        lastName: "Leong",
        coursesId: "17137",
      },
    ],
  };
  
  render() {
    //Get all Faculties from the Database
    let allFaculties = this.state.faculties;
    //Create a bunch of buttons with each facultie in it.
    let facultyButtons = allFaculties.map((faculty) => (
      <div key={faculty.proffesorId}>
        <Button>
          {faculty.proffesorId} : {faculty.firstName} {faculty.lastName}
        </Button>
        <br />
      </div>
    ));
    console.log(allFaculties);

    return (
      <div>
        <div className="Faculty-ID">{facultyButtons}</div>
      </div>
    );
  }
}
export default SelectFaculty;
