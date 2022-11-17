import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Counter } from './features/counter/Counter';
import './App.css';
import LoginScreen from './screens/LoginScreen';
import Hello from './screens/Hello';
import Signup from './screens/Signup';

function App() {
  const user = false;
  return (
    <div className="App">
      <Router>
        
          {!user?(
            <LoginScreen /> 
            
          ):(
            <Routes>
            <Route exact path="/" element={<Hello /> } />
            </Routes>
          )}
          
            {/* <Route exact path="/login" element={<LoginScreen /> } /> */}
            {/* <Routes>
            </Routes> */}

          
       
      </Router>
    </div>
  );
}

export default App;
