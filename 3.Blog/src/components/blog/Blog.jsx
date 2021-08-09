import React from 'react';
import {Link} from 'react-router-dom';
import styles from './blog.module.css';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class Blog extends React.Component {
  render() {
    const posts = JSON.parse(localStorage.getItem('posts'));
    return (
      <div className={styles.blogWrapper}>
        {posts?.length ? (
          <div>
            <h1>POSTS:</h1>
            <div className={styles.postsWrapper}>
              {posts.map((post) => {
                return (
                  <div className={styles.postWrapper}>
                    <div>
                      <div>
                        <p>{post.title}</p>
                      </div>
                      <div>{post.description}</div>
                      <div>
                        <Link to="/auth">LEARN MORE</Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : this.props.isLoggedIn ? (
          <>
            <h2 className={styles.h2}>There is no post on web-site.</h2>
            <h1 className={styles.h1}>
              You've logged in, <Link to="/posts">share your story!</Link>
            </h1>
          </>
        ) : (
          <>
            <h2 className={styles.h2}>There is no post</h2>
            <h1 className={styles.h1}>
              <Link to="/auth">LOG IN</Link> and be our first story teller.
            </h1>
          </>
        )}
      </div>
    );
  }
}

export default Blog;
