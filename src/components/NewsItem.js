import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from "react-router-dom";
import './Style.css';

class NewsItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding:'10px',
      marginBottom:'10px',
      height: '250px'
    }
  }
  
  render() {
    const { title, description, urlToImage } = this.props.thenews;

    return (
      <div style={this.getStyle()}>
        <div>
          <h2 className="title" onClick={() => {this.props.changeSelectedIndex(this.props.index); this.props.history.push('/detail');}}>
            <strong>{ title }</strong><br/>
          </h2>
          <p style={descStyle}>
            <img src={urlToImage} style={imgStyle} alt="img" />
            { description }
          </p>
          
        </div>
      </div>
    )
  }
}

const imgStyle = {
  width:'30%',
  float:'left',
  marginRight:'10px'
}

const descStyle = {
  marginTop: '20px'
}

// PropTypes
NewsItem.propTypes = {
  thenews: PropTypes.object.isRequired,
  changeSelectedIndex: PropTypes.func.isRequired
}

export default withRouter(NewsItem)
