import React from 'react';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './component/page/HomePage';
import LoginPage from './component/page/loginPage/login';

function App() {
  return (
    <div className="App">
    <>
    <BrowserRouter>
        <Switch>
        <Route path='/' component={HomePage} exact  />
          <Route path='/login' component={LoginPage} exact  />
        </Switch>
    </BrowserRouter>
   </>
  </div>
  );
}

export default App;
