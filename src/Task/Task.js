import React, { Component } from 'react';

class Task extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <article>
        <p>{this.props.text}</p>
      </article>
    );
  }
}

export default Task;
