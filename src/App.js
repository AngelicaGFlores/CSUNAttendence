import "./App.css";
//Ipmport All Components
import FacultyGenerateQr from "./components/Faculty/FacultyGenerateQr";
import FacultyProfile from "./components/FacultyProfile";
import FacultyRequests from "./components/FacultyRequests";
import HomePage from "./components/HomePage";
import StudentApprovals from "./components/StudentApprovals";
import StudentProfile from "./components/StudentProfile";
import StudentRequest from "./components/Student/StudentRequest";
//

function App() {
  return (
    <div className="App">
      <FacultyRequests/>
    </div>
  );
}

export default App;
