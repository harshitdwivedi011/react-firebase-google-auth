import Register from './Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './Register.css'
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
