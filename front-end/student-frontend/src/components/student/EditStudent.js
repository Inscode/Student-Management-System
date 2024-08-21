import {React, useState, useEffect} from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditStudent = () => {
    const [student, setStudent] = useState({
        firstName: "",
        lastName: "",
        email: "",
        department: "",
      });

      useEffect(()=>{
        loadStudent();
    },[]);

    const {id} = useParams();

    const loadStudent = async () => {
        const result =  await axios.get(
            `http://localhost:8080/students/student/${id}`
        );
        setStudent(result.data);
        
    }
    
      const { firstName, lastName, email, department } = student;
     
      const handleInputChange = (e) => {
        setStudent({
          ...student,
          [e.target.name]: e.target.value,
        });
      };
    
      const navigator = useNavigate();

      const editStudent = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/students/update/${id}`,student);
        navigator("/all-students");
      }
    
      return (
        <div className="col-sm-8 py-2 px-5 offset-2 shadow">
          <form onSubmit={(e) => editStudent(e)}>
            <div className="form-group mb-5">
              <label className="col-form-label" htmlFor="firstName">
                First Name
              </label>
              <input
                className="form-control col-sm-6"
                type="text"
                name="firstName"
                id="firstName"
                required
                value={firstName}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
    
            <div className="form-group mb-5">
              <label className="col-form-label" htmlFor="lastName">
                Last Name
              </label>
              <input
                className="form-control col-sm-6"
                type="text"
                name="lastName"
                id="lastName"
                required
                value={lastName}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
    
            <div className="form-group mb-5">
              <label className="col-form-label" htmlFor="email">
                Email
              </label>
              <input
                className="form-control col-sm-6"
                type="email"
                name="email"
                id="email"
                required
                value={email}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
    
            <div className="form-group mb-5">
              <label className="col-form-label" htmlFor="department">
                Department
              </label>
              <input
                className="form-control col-sm-6"
                type="text"
                name="department"
                id="department"
                required
                value={department}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
    
            <div className="row mb-5">
              <div className="col-sm-2">
                <button type="submit" className="btn btn-outline-success btn-lg">
                  update
                </button>
              </div>
              <div className="col-sm-2">
                <Link to="/all-students" type="submit" className="btn btn-outline-warning btn-lg">
                  Cancel
                </Link>
              </div>    
            </div>
          </form>
        </div>
      );
}

export default EditStudent
