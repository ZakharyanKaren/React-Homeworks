import React from 'react';
import styles from './post.module.css';
import { Button } from '@material-ui/core';

class Post extends React.Component {
  render() {
    const post = this.props.post;
    console.log(this.props.post);
    return (
      <div className={styles.postSection}>
        <h2>Post</h2>
        <div className={styles.postWrapper}>
          <div className={styles.postWrapper2}>
            <div>
              <div className={styles.title}>
                <p>{post.title}</p>
              </div>
              <div className={styles.description}>{post.description}</div>
              <div className={styles.buttons}>
                <Button className={styles.editBtn}>EDIT</Button>
                <Button className={styles.removeBtn}>REMOVE</Button>
                <Button className={styles.saveBtn}>Save</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
