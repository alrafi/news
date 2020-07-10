import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import './Style.css';

const NewsItem = (props) => {
  const { title, description, urlToImage } = props.thenews;
  // console.log(props);
  return (
    <div style={containerStyle}>
      <div>
        <Link to={{ pathname: '/detail', state: { item: props.thenews } }}>
          <h2
            className="title"
            // onClick={() => {
            //   this.props.changeSelectedIndex(this.props.index);
            //   this.props.history.push('/detail');
            // }}
          >
            <strong>{title}</strong>
            <br />
          </h2>
        </Link>
        <p style={descStyle}>
          <img src={urlToImage} style={imgStyle} alt="img" />
          {description}
        </p>
      </div>
    </div>
  );
};

const containerStyle = {
  background: '#f4f4f4',
  padding: '10px',
  marginBottom: '10px',
  height: '250px',
};

const imgStyle = {
  width: '30%',
  float: 'left',
  marginRight: '10px',
};

const descStyle = {
  marginTop: '20px',
};

// PropTypes
NewsItem.propTypes = {
  thenews: PropTypes.object.isRequired,
  changeSelectedIndex: PropTypes.func.isRequired,
};

export default withRouter(NewsItem);
