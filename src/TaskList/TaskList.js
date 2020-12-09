import React, { Component } from 'react';
import Task from '../Task/Task';

class TaskList extends Component {
  constructor(props) {
    super(props);
  }

  drawTasks() {
    return this.props.tasks.map((task, index) =>
      <Task key={index} text={task.text} />
    )
  }
  
  render() {
    return (
      <section>
        {this.drawTasks()}
      </section>
    );
  }
}

export default TaskList;
