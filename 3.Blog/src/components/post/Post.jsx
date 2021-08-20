import React from 'react';
import styles from './post.module.css';
import { Button } from '@material-ui/core';
import { withRouter } from "react-router-dom";
class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      postDesc: '',
      commentDesc: '',
      id: this.props.match.params.id,
      postComments: [],
    }
    
    this.onEditChange = this.onEditChange.bind(this);
  }

  componentDidMount() {
    const posts = JSON.parse(localStorage.getItem('posts'));
    const post = posts[this.state.id];
    
    this.setState({
      postDesc: post.description,
      commentDesc: post.commentDesc,
    })
  }

  onEditChange(e) {
    const name = e.target.name;

    this.setState({
      [name]: e.target.value,
    })
  }

  render() {
    const id = Number(this.state.id);
    const posts = JSON.parse(localStorage.getItem('posts'));
    const post = posts[id];

    const user = JSON.parse(localStorage.getItem('isLoggedIn'));

    const postObject = this.props.comments.find((comment) => {
      return comment.postId === post.id;
    });

    let postComments = '';
    
    if(postObject) {
      postComments = postObject.comments.map((comment) => {
        return (
          <li>
           {comment}
          </li>
        )
      })
    }

    return (
      <div className={styles.postSection}>
        <h1 className={styles.postHeader}>Post</h1>
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
                    value={this.state.postDesc}
                    name='postDesc'
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

        <h2 className={styles.comments}>Comments</h2>
        <div className={styles.commentsWrapper}>
          <div>
            <input onChange={this.onEditChange} value={this.state.commentDesc} name='commentDesc' />
            <button onClick={() => this.props.addComment(this.state.commentDesc, post.id)} className={styles.submitComm}>Submit</button>
          </div>
          <ul className={styles.commentUl}>
            {postComments}
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(Post);
