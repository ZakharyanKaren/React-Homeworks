import React from "react";
import { withRouter, Route } from 'react-router-dom';
import './App.css';
import Blog from './components/blog/Blog';
import Posts from './components/posts/Posts';
import Authentication from './components/authentication/Authentication';
import Navbar from './components/navbar/Navbar';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      posts: [],
      isLoggedIn: localStorage.getItem('isLoggedIn')
        ? localStorage.getItem('isLoggedIn')
        : false,
    };

    this.submitForm = this.submitForm.bind(this);
    this.logInBtn = this.logInBtn.bind(this);
    this.addPost = this.addPost.bind(this);
  }

  componentDidMount() {
    let usersJson = localStorage.getItem('users');
    let users = JSON.parse(usersJson);

    this.setState({
      users: users ? users : [],
    });
  }

  submitForm(e) {
    e.preventDefault();

    this.setState((prevState) => ({
      users: [
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
      posts: [...prevState.posts, { title, description }],
    }));
    localStorage.setItem(
      'posts',
      JSON.stringify([...this.state.posts, { title, description }])
    );

    this.props.history.push('/');
  }

  render() {
    return (
      <div className="App">
        <Navbar isLoggedIn={this.state.isLoggedIn} logInBtn={this.logInBtn} />
        <Route exact path="/">
          <Blog isLoggedIn={this.state.isLoggedIn} posts={this.state.posts} />
        </Route>
        <Route path="/posts">
          <Posts addPost={this.addPost} />
        </Route>
        <Route path="/auth">
          <Authentication formSubmitHandler={this.submitForm} />
        </Route>
      </div>
    );
  }
}
const wrappedApp = withRouter(App);

export default wrappedApp;
