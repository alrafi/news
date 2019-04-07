import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import News from './components/News';
import './App.css';
import Axios from 'axios';
import GetCategory from './components/GetCategory';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news:[]
    };
    this.getCategory = this.getCategory.bind(this);
  }

  componentDidMount() {
    Axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=1d5278d48fb74542922ba3c7dc6c7d56')
    .then(res => {
      this.setState({
        news: res.data.articles
      })
    })
  }

  getCategory(value) {
    let category = value;
    let requestUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=1d5278d48fb74542922ba3c7dc6c7d56&category=' + category;

    Axios.get(requestUrl)
    .then(res => {
      this.setState({ news: res.data.articles })
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
        <div className="container">
          <Route exact path="/" render={props => (
              <React.Fragment>
                <GetCategory onSubmit={this.getCategory} />
                <News news={this.state.news} onSubmit={this.getCategory} />
              </React.Fragment>              
          )} />
        </div>
        </div>
      </Router>
    );
  }
}

export default App;
