import React, {Component} from 'react';

export default class Saved extends Component {
  state : {}

  componentDidMount() {
    this
      .props
      .handlePageChange("Saved");
  }

  render() {
    return (
      <div>
      <h2>Hey it's the Saved page</h2>
     
      </div>
    )
  }
}