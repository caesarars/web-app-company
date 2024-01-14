import './App.css';
import Homepage from './pages/Homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" component={Homepage} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
