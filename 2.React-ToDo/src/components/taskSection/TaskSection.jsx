import React from 'react';
import Task from '../task/Task';

export default class TaskSection extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.allTasks.map((task) => {
          return <Task value={task} />;
        })}
      </div>
    );
  }
}
