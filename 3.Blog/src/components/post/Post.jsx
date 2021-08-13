import React from 'react';
import styles from './post.module.css';
import { Button } from '@material-ui/core';
import { withRouter } from "react-router-dom";
class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: '',
      id: this.props.match.params.id,
    }
    this.onEditChange = this.onEditChange.bind(this);
  }

  componentDidMount() {
    const posts = JSON.parse(localStorage.getItem('posts'));
    const post = posts[this.state.id];

    this.setState({
      description: post.description,
    })
  }

  onEditChange(e) {
    this.setState({
      description: e.target.value,
    })
  }

  render() {
    const id = Number(this.state.id);
    const posts = JSON.parse(localStorage.getItem('posts'));
    const post = posts[id];

    const user = JSON.parse(localStorage.getItem('isLoggedIn'));
console.log(post.userId, user.id);
    return (
      <div className={styles.postSection}>
        <h1>Post</h1>
        <div className={styles.postWrapper}>
          <div className={styles.postWrapper2}>
            <div>
              <div className={styles.title}>
                <p>{post.title}</p>
              </div>
              <div className={styles.description}>
                {post.isEdit === true ? (
                  <input
                    onChange={this.onEditChange}
                    value={this.state.description}
                  />
                ) : (<p>{post.description}</p>)}
                
                </div>
              <div className={styles.buttons}>
                <Button
                  onClick={() => this.props.editTask(post, id)}
                  className={styles.editBtn}
                  disabled={post.userId === user.id ? false : true}
                >
                  Edit
                </Button>
                <Button onClick={() => this.props.removePost(post, id)} className={styles.removeBtn} disabled={post.userId === user.id ? false : true}>Remove</Button>
                <Button onClick={() => this.props.savePost(post, id, this.state.description)} className={styles.saveBtn} disabled={post.userId === user.id ? false : true}>Save</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Post);
