import React from 'react';
import NewsItem from './NewsItem';
// import PropTypes from 'prop-types';

const News = (props) => {
  console.log(props);
  return props.news.map((thenews, index) => (
    <NewsItem
      key={thenews.title}
      index={index}
      thenews={thenews}
      changeSelectedIndex={props.onChangeIndex}
    />
  ));
};

// News.propTypes = {
//   news: PropTypes.array.isRequired,
//   onChangeIndex: PropTypes.func.isRequired
// }

export default News;
