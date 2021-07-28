import React from 'react';

export default class Task extends React.Component {
  render() {
    return (
        <li>
          <input value={this.props.value} />
          <span>
            <button onClick={() => this.props.editTask(this.props.taskIndex)}>Edit</button>
            <button onClick={() => this.props.deleteTask(this.props.taskIndex)}>remove</button>
          </span>
        </li>
    );
  }
}
