import React from 'react';
import styles from './authentication.module.css';
import { Button, TextField } from '@material-ui/core';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class Authentication extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: '',
      pass: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.headerText}>Log In</h1>

        <div className={styles.formWrapper}>
        <form onSubmit={this.props.formSubmitHandler} className={styles.form}>
          <TextField onChange={this.handleChange} margin='normal' name='login' label="Name" value={this.state.login} type="text" />
          <TextField onChange={this.handleChange} margin='normal' name='pass' label="Password" value={this.state.pass} type="password" />

          <Button type="submit" variant="contained" color='primary'>
            Log in
          </Button>
        </form>
      </div>
      </div>
    )
  }
}

export default Authentication;
