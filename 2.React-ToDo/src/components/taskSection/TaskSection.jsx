import React from 'react';
import Task from '../task/Task';
import styles from './taskSection.module.css';
import PropTypes from 'prop-types';
export default class TaskSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredTasks: '',
    };

    this.filterTasks = this.filterTasks.bind(this);
  }

  filterTasks(e) {
    this.setState({
      filteredTasks: e.target.textContent,
    });
  }

  render() {
    return (
      <div>
        <ul className={styles.listItems}>
          {this.props.allTasks.map((task, index) => {
            if (this.state.filteredTasks === 'Active' && task.isActive) {
              return (
                <Task
                  key={`task${index}`}
                  taskIndex={index}
                  task={task}
                  deleteTask={this.props.deleteTask}
                  editTask={this.props.editTask}
                  saveTask={this.props.saveTask}
                  onEditChange={this.props.onEditChange}
                  completedToggle={this.props.completedToggle}
                />
              );
            }
            if (this.state.filteredTasks === 'Completed' && task.isCompleted) {
              return (
                <Task
                  key={`task${index}`}
                  taskIndex={index}
                  task={task}
                  deleteTask={this.props.deleteTask}
                  editTask={this.props.editTask}
                  saveTask={this.props.saveTask}
                  onEditChange={this.props.onEditChange}
                  completedToggle={this.props.completedToggle}
                />
              );
            }
            if (
              this.state.filteredTasks === '' ||
              this.state.filteredTasks === 'All'
            ) {
              return (
                <Task
                  key={`task${index}`}
                  taskIndex={index}
                  task={task}
                  deleteTask={this.props.deleteTask}
                  editTask={this.props.editTask}
                  saveTask={this.props.saveTask}
                  onEditChange={this.props.onEditChange}
                  completedToggle={this.props.completedToggle}
                />
              );
            }
          })}
        </ul>
        <div className={styles.filterSection}>
          <button
            onClick={this.filterTasks}
            className={`${styles.filterBtn} ${styles.active}`}
          >
            All
          </button>
          <button onClick={this.filterTasks} className={styles.filterBtn}>
            Completed
          </button>
          <button onClick={this.filterTasks} className={styles.filterBtn}>
            Active
          </button>
        </div>
      </div>
    );
  }
}

TaskSection.propTypes = {
  allTasks: PropTypes.array,
  deleteTask: PropTypes.func,
  EditTask: PropTypes.func,
  onEditChange: PropTypes.func,
  saveTask: PropTypes.func,
  completedToggle: PropTypes.func,
};
