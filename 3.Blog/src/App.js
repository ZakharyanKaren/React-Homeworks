import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Blog from './components/blog/Blog';
import Posts from "./components/posts/Posts";
import Authentication from "./components/authentication/Authentication";
import Navbar from "./components/navbar/Navbar";
import { createTheme, ThemeProvider } from '@material-ui/core';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3191ff',
    },
    secondary: {
      main: '#f44336',
    },
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: localStorage.getItem('users'),
    };

    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(e) {
    e.preventDefault();

    this.setState((prevState) => ({
      users: [...prevState.users, { name: e.target[0].value, pass: e.target[1].value, isOnline: true }]
    }))
    localStorage.setItem('users', [...this.state.users, { name: e.target[0].value, pass: e.target[1].value, isOnline: true }])
  }

  render() {
    let users = this.state.users;
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Blog} />
            <Route path="/posts" component={Posts} />
            <Route path="/auth">
              <Authentication formSubmitHandler={this.submitForm} />
            </Route>
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
