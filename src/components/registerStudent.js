import React, { Component } from "react";
import shortid from "shortid";

export class RegisterStudent extends Component {
  state = {
    ID: "",
    FN: ""
  };

  //handle change
  handleChange = event => {
    const fnValue = event.target.value;
    const fnName = event.target.name;
    this.setState({
      ID: shortid.generate(),
      [fnName]: fnValue
    });
  };

  /*     addStu = (event) => {
        event.preventDefault();   //prevent from refreshing the page after clicking on register button
        this.props.addStudent(this.state)
    } */

  render() {
    return (
      <div>
        <form
          onSubmit={ event => {
            event.preventDefault();
            this.props.addStudent(this.state);
            this.setState({ ID: "", FN: "" });
          }}
        >
          <label className="text-dark form-element">First Name:</label>
          <input
            type="text"
            name="FN"
            className="form-element ml-2"
            value={this.state.FN}
            onChange={this.handleChange}
          />
          <input
            type="submit"
            value="Register"
            className="btn btn-primary ml-2"
          />
        </form>
      </div>
    );
  }
}

export default RegisterStudent;
