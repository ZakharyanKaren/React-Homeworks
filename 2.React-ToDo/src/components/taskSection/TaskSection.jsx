import React from 'react';
import Task from '../task/Task';
import styles from './taskSection.module.css';
export default class TaskSection extends React.Component {
  render() {
    return (
      <div>
      <ul className={styles.listItems}>
        {this.props.allTasks.map((task, index) => {
          return <Task key={`task${index}`} taskIndex={index} task={task} deleteTask={this.props.deleteTask} editTask={this.props.editTask} saveTask={this.props.saveTask} />;
        })}
      </ul>
      </div>
    );
  }
}
