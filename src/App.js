import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:8080/api/auth",
});



function App() {
  return (
    <div className="App">
      <Router>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
        
      
    </div>
  );
}
export default App;
