import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';
import Button from '@material-ui/core/Button';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const BLOG = 'BLOG';
    const CREATE_POST = 'Create post';
    const logInText = this.props.isLoggedIn ? 'LOG OUT' : 'LOG IN';
    return (
      <header className={styles.header}>
        <div className={styles.div}>
          <Link to="/">
            <h2>{BLOG}</h2>
          </Link>
          <Link to={this.props.isLoggedIn ? '/posts' : '/auth'} className={styles.createPostLink}>
            <span color="primary" className={styles.createPost}>
              {CREATE_POST}
            </span>
          </Link>
          <Link to="/auth" className={styles.auth}>
            <Button
              onClick={this.props.logInBtn}
              type="button"
              variant="contained"
              color="primary"
              className={styles.btn}
            >
              {logInText}
            </Button>
          </Link>
        </div>
      </header>
    );
  }
}

export default Navbar;
