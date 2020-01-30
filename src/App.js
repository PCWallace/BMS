import React from 'react';
import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import Header from './Components/Shared/Header';
import Footer from './Components/Shared/Footer';
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory, BrowserRouterProps} from 'react-router-dom';

function App() {

  return (
    <Router >
      <div>
        <Header />
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Login path="/home">
            <Home/>
          </Login>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
