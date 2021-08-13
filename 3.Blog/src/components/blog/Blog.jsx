import React from 'react';
import styles from './blog.module.css';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

class Blog extends React.Component {
  render() {
    return (
      <div className={styles.blogWrapper}>
        {this.props.posts?.length ? (
          <div>
            <h1>POSTS:</h1>
            <div className={styles.postsWrapper}>
              {this.props.posts.map((post, index) => {
                return (
                  <div className={styles.postWrapper} key={index}>
                    <div>
                      <div className={styles.title}>
                        <p>{post.title}</p>
                      </div>
                      <div className={styles.description}>
                        {post.description}
                      </div>
                      <div className={styles.learnMore}>
                        <Button onClick={() => this.props.learnMore(index)}>
                          LEARN MORE
                        </Button>
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
