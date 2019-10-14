import React from "react";
import RegisterStudent from "./components/registerStudent";
import Bascket from "./components/bascket";
import "./App.css";

export default class App extends React.Component {
  state = {
    students: [],
    bascket : [],
  };

  //add student into state.students array
  addStudent = (stu) => {
    this.state.students.push(stu);
    this.forceUpdate();
  };

  //delete student from state.students array
  deleteStudent = event => {
    event.preventDefault();
    const studentID = event.target.value;
    const newSudentArray = this.state.students.filter(
      student => student.ID !== studentID
    );
    this.setState({ students: newSudentArray });
  };

  //add product into bascket
  addProduct = (e) => {
    e.preventDefault();
    this.state.students.map( stu =>
      stu.ID === e.target.value ? this.state.bascket.push(stu) : null
    );
    this.forceUpdate();
    window.test01 = this
  };

  // delete a product from the basket
  deleteProduct = (item)=> {
    this.state.bascket.splice(this.state.bascket.indexOf(item),1);
    this.forceUpdate();
  }

  render() {
    return (
      <div className="border border-info mb-5 container">
        <div className="d-block">
          <table className="table  ">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
              </tr>
            </thead>
            <tbody>
              {this.state.students.map( (student) => (
                <tr key={student.ID}>
                  <td>{student.ID}</td>
                  <td>{student.FN}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-info"
                      value={student.ID}
                      onClick={this.addProduct}
                    >
                      +
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      value={student.ID}
                      onClick={this.deleteStudent}
                    >
                      x
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Bascket bascketContent={this.state.bascket} deleteProduct={this.deleteProduct} />
        </div>
        <div className="d-flex justify-self-start">
          <RegisterStudent addStudent={this.addStudent} />
        </div>
      </div>
    );
  }
}
