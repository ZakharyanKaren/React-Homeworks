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
      id: 0,
      editPost: {},
    };

    this.submitForm = this.submitForm.bind(this);
    this.logInBtn = this.logInBtn.bind(this);
    this.addPost = this.addPost.bind(this);
    this.onHandleEdit = this.onHandleEdit.bind(this);
  }

  componentDidMount() {
    const users = JSON.parse(localStorage.getItem('users'));
    const posts = JSON.parse(localStorage.getItem('posts'));
    const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
    const id = JSON.parse(localStorage.getItem('id'));

    this.setState({
      users: users ?? [],
      posts: posts ?? [],
      isLoggedIn: isLoggedIn === null ? false : isLoggedIn,
      id: id && id,
    });
  }

  submitForm(e) {
    e.preventDefault();

    this.setState((prevState) => ({
      users: prevState.users && [
        ...prevState.users,
        { name: e.target[0].value, pass: e.target[1].value },
      ],
      isLoggedIn: true,
    }));

    localStorage.setItem(
      'users',
      JSON.stringify([
        ...this.state.users,
        { name: e.target[0].value, pass: e.target[1].value },
      ])
    );

    localStorage.setItem('isLoggedIn', 'true');

    this.props.history.push('/');
  }

  logInBtn() {
    this.setState({
      isLoggedIn: false,
    });
    localStorage.setItem('isLoggedIn', false);
  }

  addPost(title, description) {
    this.setState((prevState) => ({
      posts: [...prevState.posts, { title, description, id: prevState.id + 1 }],
      id: prevState.id + 1,
    }));

    localStorage.setItem(
      'posts',
      JSON.stringify([
        ...this.state.posts,
        { title, description, id: this.state.id + 1 },
      ])
    );

    localStorage.setItem('id', JSON.stringify(this.state.id + 1));

    this.props.history.push('/');
  }

  onHandleEdit(index) {
    const post = this.state.posts.find((el) => el.id === index);

    this.setState({
      editPost: post,
    });

    this.props.history.push(`/post/:${index}`);
  }

  render() {
    return (
      <div className="App">
        <Navbar isLoggedIn={this.state.isLoggedIn} logInBtn={this.logInBtn} />
        <Route exact path="/">
          <Blog
            isLoggedIn={this.state.isLoggedIn}
            posts={this.state.posts}
            onHandleEdit={this.onHandleEdit}
          />
        </Route>
        <Route path="/posts">
          <Posts addPost={this.addPost} />
        </Route>
        <Route path="/auth">
          <Authentication formSubmitHandler={this.submitForm} />
        </Route>
        <Route path="/post/:id">
          <Post post={this.state.editPost} />
        </Route>
      </div>
    );
  }
}
const wrappedApp = withRouter(App);

export default wrappedApp;
