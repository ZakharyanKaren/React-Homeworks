import React from 'react';
import styles from './post.module.css';
import { Button } from '@material-ui/core';

class Post extends React.Component {
  render() {
    const post = JSON.parse(localStorage.getItem('post'));
    return (
      <div className={styles.postSection}>
        <h1>Post</h1>
        <div className={styles.postWrapper}>
          <div className={styles.postWrapper2}>
            <div>
              <div className={styles.title}>
                {this.props.isEdit === true ? (
                  <input
                    onEditChange={(e) => this.props.onEditChange(e, post.id)}
                    value={post.description}
                  />
                ) : (
                  <p>{post.title}</p>
                )}
              </div>
              <div className={styles.description}>{post.description}</div>
              <div className={styles.buttons}>
                <Button
                  onClick={() => this.props.editTask(post.id)}
                  className={styles.editBtn}
                >
                  Edit
                </Button>
                <Button className={styles.removeBtn}>Remove</Button>
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
