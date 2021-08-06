import './App.css';
import Blog from './components/blog/Blog';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Posts from "./components/Posts/Posts";
import Authentication from "./components/Authentication/Authentication";
import React from "react";
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    <Router>
      <div className="App">
          <Navbar />
        <Route exact path="/" component={Blog} />
        <Route path="/posts" component={Posts} />
        <Route path="/auth" component={Authentication} />
      </div>
    </Router>
  );
}

export default App;
