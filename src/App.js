import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Header from './components/Header';
import About from './pages/About';
import './assets/sass/style.scss';

class App extends Component {
  render() {
    return (
      <>
        <div className="container">
          <Router>
            <Header />
            <p>
              Available Category: Business | Sports | Entertainment | Politics |
              Health | Technology | Science
            </p>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/detail" component={Detail} />
              <Route path="/about" component={About} />
            </Switch>
          </Router>
        </div>
      </>
    );
  }
}

export default App;
