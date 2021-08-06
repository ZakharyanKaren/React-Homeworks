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
    return (
      <header className={styles.header}>
        <div className={styles.div}>
          <Link to='/'>
            <h2>Blog</h2>
          </Link>
          <Link to="/posts">
            <span color="primary">Create post</span>
          </Link>
          <Link to='/auth' className={styles.auth}>
            <Button color="primary">Log In</Button>
          </Link>
        </div>
      </header>
    );
  }
}

export default Navbar;
