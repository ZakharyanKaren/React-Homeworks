import React from 'react';
import Form from '../form/Form';
import TaskSection from '../taskSection/TaskSection';
import styles from './todo.module.css';
class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      allTasks: [],
    };

    this.createTask = this.createTask.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.saveTask = this.saveTask.bind(this);
    this.onEditChange = this.onEditChange.bind(this);
    this.completedToggle = this.completedToggle.bind(this);
  }

  componentDidMount() {
    this.setState({
      allTasks: JSON.parse(localStorage.getItem('tasks'))
        ? JSON.parse(localStorage.getItem('tasks'))
        : [],
    });
  }

  createTask(e) {
    e.preventDefault();
    const value = this.state.inputValue;
    if (value === '') {
      return false;
    }
    this.setState((prevState) => ({
      allTasks: [
        { title: value, isEdit: false, isActive: true, isCompleted: false },
        ...prevState.allTasks,
      ],
      inputValue: '',
    }));

    localStorage.setItem(
      'tasks',
      JSON.stringify([
        { title: value, isEdit: false, isActive: true, isCompleted: false },
        ...this.state.allTasks,
      ])
    );
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }

  deleteTask(taskIndex) {
    let spliced = this.state.allTasks;
    spliced.splice(taskIndex, 1);

    this.setState({
      allTasks: spliced,
    });

    localStorage.setItem('tasks', JSON.stringify(spliced));
  }

  onEditChange(e, taskIndex) {
    let allTasks = [...this.state.allTasks];
    allTasks[taskIndex].title = e.target.value;
    this.setState({ allTasks });
  }

  editTask(taskIndex) {
    let allTasks = [...this.state.allTasks];
    allTasks.forEach((task) => {
      task.isEdit = false;
    });
    let task = { ...allTasks[taskIndex] };
    task.isEdit = true;
    allTasks[taskIndex] = task;

    this.setState({ allTasks });
  }

  saveTask(taskIndex) {
    let allTasks = [...this.state.allTasks];
    allTasks[taskIndex].isEdit = false;
    this.setState({ allTasks });
    localStorage.setItem('tasks', JSON.stringify(allTasks));
  }

  completedToggle(taskIndex) {
    let allTasks = [...this.state.allTasks];
    allTasks[taskIndex].isActive = !allTasks[taskIndex].isActive;
    allTasks[taskIndex].isCompleted = !allTasks[taskIndex].isCompleted;
    this.setState({ allTasks });
  }

  render() {
    return (
      <div className={styles.todo}>
        <Form
          formSubmitHandler={this.createTask}
          inputValueChange={this.handleChange}
          inputValue={this.state.inputValue}
        />
        <TaskSection
          allTasks={this.state.allTasks}
          deleteTask={this.deleteTask}
          editTask={this.editTask}
          saveTask={this.saveTask}
          onEditChange={this.onEditChange}
          filterTasks={this.filterTasks}
          completedToggle={this.completedToggle}
        />
      </div>
    );
  }
}

export default Todo;
