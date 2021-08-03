import './App.css';
import Blog from './components/blog/Blog';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Blog />
      </div>
    </Router>
  );
}

export default App;
