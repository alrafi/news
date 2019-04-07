import React, { Component } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';

class News extends Component {
  render() {
    return this.props.news.map((thenews) => (
      <NewsItem key={thenews.title} thenews ={thenews} />
    ));
  }
}

News.propTypes = {
  news: PropTypes.array.isRequired
}

export default News
