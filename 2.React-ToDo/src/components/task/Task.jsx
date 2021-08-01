import React from 'react';
import styles from './task.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

export default class Task extends React.Component {
  render() {
    let taskValue = this.props.task.title;
    let editTask;
    if (this.props.task.isEdit) {
      taskValue = <input onChange={(e) => this.props.onEditChange(e, this.props.taskIndex)} value={taskValue} className={styles.input} autoFocus />
      editTask = <button onClick={() => this.props.saveTask(this.props.taskIndex)}>Save</button>;
    } else {
      editTask = <button onClick={() => this.props.editTask(this.props.taskIndex)}>Edit</button>;
    }
    
    return (
        <li className={styles.task}>
          <span onClick={() => this.props.completedToggle(this.props.taskIndex)} className={`${styles.taskSection} ${this.props.task.isCompleted ? styles.addLine : ''}`}>{taskValue}</span>
          <span className={styles.buttonSection}>
            {editTask}
            <button onClick={() => this.props.deleteTask(this.props.taskIndex)}><FontAwesomeIcon icon={faTimes} className={styles.removeIcon} /></button>
          </span>
        </li>
    );
  }
}

Task.propTypes = {
  task: PropTypes.object,
  deleteTask: PropTypes.func,
  EditTask: PropTypes.func,
  onEditChange: PropTypes.func,
  saveTask: PropTypes.func,
  completedToggle: PropTypes.func,
  taskIndex: PropTypes.number,
}