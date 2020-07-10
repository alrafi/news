import React, { Component } from 'react';
import GetCategory from '../components/GetCategory';
import News from '../components/News';
import Axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      selectedIndex: 0,
    };
    this.getCategory = this.getCategory.bind(this);
    this.changeSelectedIndex = this.changeSelectedIndex.bind(this);
  }

  componentDidMount() {
    Axios.get(
      'https://newsapi.org/v2/top-headlines?country=us&pageSize=15&apiKey=1d5278d48fb74542922ba3c7dc6c7d56'
    ).then((res) => {
      this.setState({
        news: res.data.articles,
      });
    });
  }

  getCategory(value) {
    let category = value;
    let requestUrl =
      'https://newsapi.org/v2/top-headlines?country=us&pageSize=15&apiKey=1d5278d48fb74542922ba3c7dc6c7d56&category=' +
      category;
    Axios.get(requestUrl).then((res) => {
      this.setState({ news: res.data.articles });
    });
  }

  changeSelectedIndex(index) {
    this.setState({ selectedIndex: index });
  }

  render() {
    console.log(this.state.news);
    return (
      <>
        <GetCategory onSubmit={this.getCategory} />
        <News
          news={this.state.news}
          onSubmit={this.getCategory}
          onChangeIndex={this.changeSelectedIndex}
        />
      </>
    );
  }
}

export default Home;
