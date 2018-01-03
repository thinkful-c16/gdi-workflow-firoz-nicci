import React from "react";

export default class Input extends React.Component {
  render(){
    return (
      <div>
        <input type="text" className={this.props.name} placeholder={this.props.placeholder} />
      </div>
    )
  }
}