import React, { Component } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';

class News extends Component {
  render() {
    return this.props.news.map((thenews, index) => (
      <NewsItem 
        key={thenews.title} index={index} thenews={thenews} 
        changeSelectedIndex={this.props.onChangeIndex} 
      />
    ));
  }
}

News.propTypes = {
  news: PropTypes.array.isRequired,
  onChangeIndex: PropTypes.func.isRequired
}

export default News
