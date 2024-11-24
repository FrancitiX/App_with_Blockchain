import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Login from './views/Login';
import Home from './views/Home';
import Register from './views/Reg';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                <Route path='/home' element={<Home />}/>
            </Routes>
        </Router>
    );
};

export default App;
