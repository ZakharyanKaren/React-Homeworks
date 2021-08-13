import React from "react";
import './App.css';
import { withRouter, Route } from 'react-router-dom';
import Blog from './components/blog/Blog';
import Posts from './components/posts/Posts';
import Navbar from './components/navbar/Navbar';
import Authentication from './components/authentication/Authentication';
import Post from './components/post/Post';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      posts: [],
      isLoggedIn: false,
    };

    this.submitForm = this.submitForm.bind(this);
    this.logInBtn = this.logInBtn.bind(this);
    this.addPost = this.addPost.bind(this);
    this.learnMore = this.learnMore.bind(this);
    this.editTask = this.editTask.bind(this);
    this.savePost = this.savePost.bind(this);
    this.removePost = this.removePost.bind(this);
  }

  componentDidMount() {
    const users = JSON.parse(localStorage.getItem('users'));
    const posts = JSON.parse(localStorage.getItem('posts'));
    const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
    
    this.setState({
      users: users ?? [],
      posts: posts ?? [],
      isLoggedIn: isLoggedIn === null ? false : isLoggedIn,
    });
  }

  submitForm(e) {
    e.preventDefault();

    const allUsers = this.state.users;
    const name = e.target[0].value;
    const pass = e.target[1].value;

    const oldUser = allUsers.find((user) => {
      return user.name === name && user.pass === pass;
    });

    if(oldUser) {
      this.setState({
        isLoggedIn: {id: oldUser.id, name: oldUser.name, pass: oldUser.pass},
      })

      localStorage.setItem('isLoggedIn', JSON.stringify({id: oldUser.id, name: oldUser.name, pass: oldUser.pass}));
    } else {
      const id = Math.random(3) + '' + Date.now();

      this.setState((prevState) => ({
        users: [...prevState.users, { id, name, pass }],
        isLoggedIn: {id, name, pass},
      }));

      localStorage.setItem('users', JSON.stringify([...this.state.users, { id, name, pass }]));
      localStorage.setItem('isLoggedIn', JSON.stringify({id, name, pass}));
    }

    this.props.history.push('/');
  }

  logInBtn() {
    this.setState({
      isLoggedIn: false,
    });
    localStorage.setItem('isLoggedIn', false);
  }

  addPost(title, description) {
    const id = Math.random(3) + '' + Date.now();
    let user = JSON.parse(localStorage.getItem('isLoggedIn'));
    const userId = user.id;
    user = { id, title, description, isEdit: false, userId };

    this.setState((prevState) => ({
      posts: [...prevState.posts, user ],
    }));

    localStorage.setItem('posts', JSON.stringify([...this.state.posts, user]));

    this.props.history.push('/');
  }

  learnMore(index) {
    this.props.history.push(`/post/${index}`);
  }

  editTask(post, id) {
    const posts = this.state.posts;

    posts.forEach((post) => {
      post.isEdit = false;
    });

    post.isEdit = true;
    posts[id] = post;

    this.setState({ posts });

    localStorage.setItem('posts', JSON.stringify(posts));
  }

  savePost(post, id, description) {
    const posts = this.state.posts;
    post.description = description;
    post.isEdit = false;

    posts[id] = post;

    this.setState({ posts });

    localStorage.setItem('posts', JSON.stringify(posts));
  }

  removePost(post, id) {
    const posts = this.state.posts;
    posts.splice(id, 1);

    this.setState({ posts });

    localStorage.setItem('posts', JSON.stringify(posts));

    this.props.history.push('/');
  }

  render() {
    return (
      <div className="App">
        <Navbar isLoggedIn={this.state.isLoggedIn} logInBtn={this.logInBtn} />
        <Route exact path="/">
          <Blog
            isLoggedIn={this.state.isLoggedIn}
            posts={this.state.posts}
            learnMore={this.learnMore}
          />
        </Route>
        <Route exact path="/posts">
          <Posts addPost={this.addPost} />
        </Route>
        <Route exact path="/auth">
          <Authentication formSubmitHandler={this.submitForm} />
        </Route>
        <Route path={`/post/:id`}>
          <Post allPosts={this.state.posts} editTask={this.editTask} onEditChange={this.onEditChange} savePost={this.savePost} removePost={this.removePost} />
        </Route>
      </div>
    );
  }
}
const wrappedApp = withRouter(App);

export default wrappedApp;
