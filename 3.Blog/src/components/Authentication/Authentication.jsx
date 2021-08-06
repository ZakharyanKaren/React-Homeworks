import React from 'react';
import styles from './authentication.module.css';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class Authentication extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.headerText}>Log In</h1>
      </div>
    )
  }
}

export default Authentication;
