import React, { Component, Fragment } from "react";

class FilterCollapse extends Component {
  render() {
    console.log(this.props.list);

    //// CREATE CHECKBOXES FROM LIST AND PASS ID TO FILTERS
    return (
      <Fragment>
          <div>
  <h1>{this.props.title ? this.props.title : "load"}</h1>
        </div>
      <div className="checkedItems">
    
      
        <div className="checkedItem">C</div>
        <div className="checkedItem">C</div>

        <div className="checkedItem">C</div>
        <div className="checkedItem">C</div>
        <div className="checkedItem">C</div>

        <div className="checkedItem">C</div>
      </div>
      </Fragment>
    );
  }
}

export default FilterCollapse;
