import React, { Component } from "react";

export class Bascket extends Component {
  doSomething() { alert('SOMETHING') };
  render() {
    return (
      <div>
        <button type="button" onClick={this.doSomething}>
          Bascket
          <span className="badge badge-dark float-right ml-3">
            {this.props.bascketContent.length}
          </span>
        </button>
        <table className="table">
          { this.props.bascketContent.map( (item) => {
            return <tr>
              <td>{item.ID}</td>
              <td>{item.FN}</td>
              <td>
                <button
                  onClick={this.props.deleteProduct.bind(this,item)}
                  className="btn btn-danger">
                  x
                </button>
              </td>
            </tr>;
          })}
        </table>
      </div>
    );
  }
}

export default Bascket;
