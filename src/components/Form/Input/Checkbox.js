import React, { Component , Fragment} from 'react';

class Checkbox extends Component {
  render() {
    console.log(this.props.type)
    return (
 <div className="checkboxitem">
     <label htmlFor="type">{this.props.type}</label>
  <input type="checkbox" onChange={() =>  this.props.handleFilters(this.props.id) }id={this.props.id}   checked={this.props.checked}/>

    </div>
    )
     
  }
}

export default Checkbox;
