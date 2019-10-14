import React, { Component } from "react";

export class EditStudent extends Component {
    constructor(props){
        super(props);
        this.state = {
            ID: this.props.original.ID,
            FN: this.props.original.FN
        }
    }

  //handle change
  handleChange = event => {
    const fnValue = event.target.value;
    const fnName = event.target.name;
    this.setState({
      ID: this.props.original.ID,
      [fnName]: fnValue
    });
  };

  render() {
    return (
      <div>
        <form
          onSubmit={ event => {
            event.preventDefault();
            this.props.changeStudent(this.props.original,this.state);
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
            value="Save"
            className="btn btn-primary ml-2"
          />
        </form>
      </div>
    );
  }
}

export default EditStudent;
