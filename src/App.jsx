// import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Login from './views/Login';
import Home from './views/Home';
import Register from './views/Reg';
import Profile from './views/Profile'
import Properties from './views/Properties';
import About from './views/About'
import Users from './views/Users'
import Digital_Register from './views/R_digital';
import Appointments from './views/Appointments';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                <Route path='/home' element={<Home />}/>
                <Route path='/profile' element={<Profile />}/>
                <Route path='/properties' element={<Properties />} />
                <Route path='/about' element={<About />}/>
                <Route path='/users' element={<Users />}/>
                <Route path='/digital-register' element={<Digital_Register />}/>
                <Route path='/appointments' element={<Appointments />}/>
            </Routes>
        </Router>
    );
};

export default App;
