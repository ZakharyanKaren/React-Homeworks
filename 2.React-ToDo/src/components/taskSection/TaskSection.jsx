import React from 'react';
import Task from '../task/Task';

export default class TaskSection extends React.Component {
  render() {
    return (
      <ul>
        {this.props.allTasks.map((task, index) => {
          return <Task key={`task${index}`} taskIndex={index} value={task} deleteTask={this.props.deleteTask} />;
        })}
      </ul>
    );
  }
}
