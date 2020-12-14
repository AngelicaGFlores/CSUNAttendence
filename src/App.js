import "./App.css";
//Ipmport All Components
/*
  Home Page Imports
*/
import HomePage from "./components/HomePage";
/*
  Faculty Imports
*/
import FacultyProfile from "./components/Faculty/FacultyProfile";
import FacultyRequests from "./components/Faculty/FacultyRequests";
import FacultyGenerateQr from "./components/Faculty/FacultyGenerateQr";
/*
  Student Imports
*/
import StudentProfile from "./components/Student/StudentProfile";
import StudentApprovals from "./components/Student/StudentApprovals";
import StudentRequest from "./components/Student/StudentRequest";
//Import Routes
import { Route, BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <Route path="/" exact component={HomePage} />
        <Route path="/faculty/profile" component={FacultyProfile} />
        <Route path="/faculty/requests" component={FacultyRequests} />
        <Route path="/faculty/generate" component={FacultyGenerateQr} />
      <Route path="/student/profile" component={StudentProfile} />
      <Route path="/student/approvals" component={StudentApprovals} />
      <Route path="/student/request" component={StudentRequest} />
    </Router>
  );
}

export default App;
