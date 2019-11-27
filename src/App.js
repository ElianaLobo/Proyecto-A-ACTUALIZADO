import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Home from './Home/Home';
import Page1 from './Page1/Page1';
import Page2 from './Page2/Page2';
import Page3 from './Page3/Page3';
import PageError from './PageError/PageError';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
        

          <NavBar />
         {  <Redirect
            from="/"
            to="/home" /> }
          <Switch>
            <Route
              path="/home"
              component={Home} />
            <Route
              exact
              path="/page1"
              render={() => <Page1 name="React Medellín" />} />
             <Route     
              exact
              path="/page2"
              render={() => <Page2 />} />
             <Route
              exact
              path="/page3"
              render={() => <Page3 />} />
            <Route component={PageError} />
          </Switch>

          <div className="Footer">
            <p>Este sitio web fue creado por: Eliana Lobo. @ProyectoA</p>
                  </div>
        </div>
      </BrowserRouter>

          
    );
  }
}

export default App;