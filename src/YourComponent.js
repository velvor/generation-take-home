import React, { Component } from 'react';

/*
* Use this component as a launching-pad to build your functionality.
*
*/
export default class YourComponent extends Component {

  render() {
    return (
      <div style={divStyle}>
		  <h1> Mi solución</h1>
      <div className = "row">
        <div className = "col-md-12">
          Hola perros
        </div>
      </div>
      </div>
    );
  }
}

var divStyle = {
  border: 'blue',
  borderWidth: 2,
  borderStyle: 'solid',
  padding: 20
};
