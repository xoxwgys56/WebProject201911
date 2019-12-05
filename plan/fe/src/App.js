import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {getAllStudents} from './query'

class App extends Component {

  state = {
    students: []
  }

  componentDidMount() {
    this.fetchStudent();
  }

  fetchStudent = () => {
    getAllStudents().then(res => res.json().then(students => {
      console.log(students);
      this.setState({
        students
      });
    }));
  }

  render() {

    const { students } = this.state;

    if (students && students.length) {

      students.map((student, index) => {
        console.log("student " + index)
        console.log(student);
      })

      return students.map((student, index) => {
        return (
          <div key={index}>
            Index is {index}
            <p>HI {student.id}</p>
            <p>HI {student.name}</p>
          </div>
        );
      });

    }

    return (
      <h1>No Students found</h1>
    );
  }
}

export default App;
