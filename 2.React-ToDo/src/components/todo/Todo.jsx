import React from 'react';
import Form from '../form/Form';
import TaskSection from '../taskSection/TaskSection';

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
  }

  createTask(e) {
    e.preventDefault();
    const value = e.target[0].value;
    if(value === '') {
      return false;
    }
    this.setState((prevState) => ({
      allTasks: [{value, isEdit: 'false'}, ...prevState.allTasks],
      inputValue: '',
    }));
  }

  handleChange(e) {
    this.setState({
        inputValue: e.target.value,
    })
  }

  deleteTask(taskIndex) {
    let spliced = this.state.allTasks;
    spliced.splice(taskIndex, 1);

    this.setState({
      allTasks: spliced,
    })
  }

  editTask(taskIndex) {
    let allTasks = [...this.state.allTasks];
    let task = {...allTasks[taskIndex]};
    task.isEdit = 'true';
    allTasks[taskIndex] = task;

    this.setState({allTasks})
  }

  saveTask(taskIndex, currentTaskValue) {
    let allTasks = [...this.state.allTasks];
    let task = {...allTasks[taskIndex]};
    task.isEdit = 'false';
    task.value = currentTaskValue;
    allTasks[taskIndex] = task;

    this.setState({allTasks})
  }

  render() {
    return (
      <div>
        <Form formSubmitHandler={this.createTask} inputValueChange={this.handleChange} inputValue={this.state.inputValue} />
        <TaskSection allTasks={this.state.allTasks} deleteTask={this.deleteTask} editTask={this.editTask} saveTask={this.saveTask} />
      </div>
    );
  }
}

export default Todo;
