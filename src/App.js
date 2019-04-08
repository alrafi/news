import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import News from './components/News';
import Detail from './components/pages/Detail';
import GetCategory from './components/GetCategory';
import Header from './components/layout/Header';
import About from './components/pages/About';
import './App.css';
import Axios from 'axios';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <GetCategory onSubmit={this.props.getCategory} />
        <News 
          news={this.props.news} 
          onSubmit={this.props.getCategory} 
          onChangeIndex={this.props.changeSelectedIndex} 
        />
      </React.Fragment>              
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news:[],
      selectedIndex: 0
    };
    this.getCategory = this.getCategory.bind(this);
    this.changeSelectedIndex = this.changeSelectedIndex.bind(this)
  }

  componentDidMount() {
    Axios.get('https://newsapi.org/v2/top-headlines?country=us&pageSize=15&apiKey=1d5278d48fb74542922ba3c7dc6c7d56')
    .then(res => {
      this.setState({
        news: res.data.articles
      })
    })
  }

  getCategory(value) {
    let category = value;
    let requestUrl = 'https://newsapi.org/v2/top-headlines?country=us&pageSize=15&apiKey=1d5278d48fb74542922ba3c7dc6c7d56&category=' + category;

    Axios.get(requestUrl)
    .then(res => {
      this.setState({ news: res.data.articles })
    });
  }
  
  changeSelectedIndex(index) {
    this.setState({ selectedIndex: index })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Router>
          <Header />
          <p>Available Category: Business | Sports | Entertainment | Politics | Health | Technology | Science</p>
            <Switch>
              <Route exact path="/" component={(props) => 
                <Home 
                  {...props} 
                  changeSelectedIndex={this.changeSelectedIndex} 
                  getCategory={this.getCategory}
                  news={this.state.news}
                  />} 
                />
              <Route 
                path="/detail" 
                component={(props) => <Detail {...props} news={this.state.news[this.state.selectedIndex]} />} 
              />
              <Route
                path="/about"
                component={About}
              />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
