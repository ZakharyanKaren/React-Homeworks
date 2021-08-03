import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Authentication from '../Authentication/Authentication';
import Navbar from '../navbar/Navbar';
import Posts from '../Posts/Posts';
// import styles from './blog.module.css';

class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Router>
        <Navbar />

        <Switch>
          <Route path="/posts" component={Posts} />
          <Route path="/authentication" component={Authentication} />
        </Switch>
      </Router>
    );
  }
}

export default Blog;
