import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";

import StudentView from "./components/student/StudentView";
import Nav from "./components/common/Nav";
import Home from "./Home";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import AddStudent from "./components/student/AddStudent";
import EditStudent from "./components/student/EditStudent";
import StudentProfile from "./components/student/StudentProfile";


function App() {
  return (
    <main className="container mt-5">
     <Router>
     <Nav />
      <Routes>
        <Route
          exact path = "/"
          element = {<Home />}>
        </Route>
        <Route
          exact path = "/all-students"
          element = {<StudentView />}>
        </Route>
        <Route
          exact path = "/add-student"
          element = {<AddStudent />}>
        </Route>

        <Route
          exact path = "/update-student/:id"
          element = {<EditStudent/>}>
        </Route>

        <Route
          exact path = "/student-profile/:id"
          element = {<StudentProfile/>}>
        </Route>

      </Routes>
     </Router>
    </main>
  );
}

export default App;
