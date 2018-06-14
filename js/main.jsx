import React from 'react';
import ReactDOM from 'react-dom';

import {
    HashRouter,
    Route,
    Link,
    Switch
} from 'react-router-dom';

import '../styles/main.scss';

import App from './components/App/App.jsx';
import Home from './components/Home/Home.jsx';
import Nav from './components/Nav/Nav.jsx';
import Results from './components/Results/Results.jsx';


document.addEventListener('DOMContentLoaded', function(){
      ReactDOM.render(
          <HashRouter>
              <div>
                  <Nav/>
                  <Switch>
                      <Route exact path="/" component={Home}/>
                      <Route path="/quiz" component={App}/>
                      <Route path="/results/:score" component={Results}/>
                  </Switch>
              </div>
          </HashRouter>,
          document.getElementById('app')
      );
});
