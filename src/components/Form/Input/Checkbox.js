import React, { Component } from 'react';

class Checkbox extends Component {
  render() {
    return (
 <div>
  <input type="checkbox" onChange={() =>  this.props.handleFilters(this.props.id) }id={this.props.id}   checked={this.props.checked}/>

    </div>
    )
     
  }
}

export default Checkbox;
