import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <header className={styles.header}>
        <div className={styles.div}>
          <h2>
            <Link>Blog</Link>
          </h2>
          <span>
            <Link to="/posts">Create post</Link>
          </span>
          <span className={styles.auth}>
            <Link to="/auth">Log In</Link>
          </span>
        </div>
      </header>
    );
  }
}

export default Navbar;
