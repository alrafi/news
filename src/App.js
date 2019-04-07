import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import News from './components/News';
import './App.css';
import Axios from 'axios';

class App extends Component {
  state = {
    news: []
  }

  componentDidMount() {
    Axios.get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=1d5278d48fb74542922ba3c7dc6c7d56')
    .then(res => {
      this.setState({
        news: res.data.articles
      })
    })
  }


  render() {
    return (
      <Router>
        <div className="App">
        <div className="container">
          <Route exact path="/" render={props => (
              <React.Fragment>
                <News news={this.state.news}/>
              </React.Fragment>
          )} />
        </div>
        </div>
      </Router>
    );
  }
}

export default App;
