import React from 'react';
import InputField from '../inputField/InputField';
import TaskSection from '../taskSection/TaskSection';

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTask: '',
      allTasks: [],
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  onInputChange(e) {
    this.setState({
      currentTask: e.target.value,
    });
  }

  onKeyUp(e) {
    if (e.keyCode === 13) {
      const newTask = this.state.currentTask;

      this.setState((prevState) => ({
        currentTask: '',
        allTasks: [...prevState.allTasks, newTask],
      }));
    }
  }

  render() {
    console.log(this.state.allTasks);
    return (
      <div>
        <InputField
          onInputChange={this.onInputChange}
          onKeyUp={this.onKeyUp}
          value={this.state.currentTask}
        />
        <TaskSection allTasks={this.state.allTasks} />
      </div>
    );
  }
}

export default Todo;
