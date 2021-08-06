import React from 'react';
import {Link} from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import styles from './blog.module.css';

class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        posts: localStorage.getItem('posts')
    };
  }

  render() {
      let postsJson = this.state.posts;
      let posts = JSON.parse(postsJson);
    return (
        <div>
            { posts?.length
                ?  <div>
                    <h1>POSTS:</h1>
                        { posts.map(post => {
                            return (
                            <div>
                                <div>
                                    <div>
                                        <div>
                                            <div>{post.title[0]}</div>
                                        </div>
                                        <div>
                                            <p>{post.title}</p>
                                            <p>{post.date}</p>
                                        </div>
                                    </div>
                                    <div>{post.content}</div>
                                    <div><Link to='/auth'>LEARN MORE</Link></div>
                                </div>
                            </div>
                            )
                        })
                        }
                </div>
                : <>
                    <h2>There is no post</h2>
                    <h1><Link to="/auth">LOG IN</Link> and be our first story teller.</h1>
                </>
            }
        </div>
            );
  }
}

export default Blog;
