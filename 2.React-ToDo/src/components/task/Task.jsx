import React from 'react';
import styles from './task.module.css';
export default class Task extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTaskValue: this.props.task.value,
    };

    this.editTaskValue = this.editTaskValue.bind(this);
  }

  editTaskValue(e) {
    this.setState({
      currentTaskValue: e.target.value,
    })
  }

  render() {
    let taskValue;
    let editTask;
    if (this.props.task.isEdit === 'true') {
      taskValue = <input onChange={this.editTaskValue} value={this.state.currentTaskValue} />
      editTask = <button onClick={() => this.props.saveTask(this.props.taskIndex, this.state.currentTaskValue)}>Save</button>;
    } else {
      taskValue = this.props.task.value;
      editTask = <button onClick={() => this.props.editTask(this.props.taskIndex)}>Edit</button>;
    }
    return (
        <li>
          {taskValue}
          <span className={styles.buttonSection}>
            {editTask}
            <button onClick={() => this.props.deleteTask(this.props.taskIndex)}>remove</button>
          </span>
        </li>
    );
  }
}
