import React, { Component } from 'react'
import PropTypes from 'prop-types'

class NewsItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding:'10px',
      marginBottom:'10px'
    }
  }
  
  render() {
    const { title, description } = this.props.thenews;

    return (
      <div style={this.getStyle()}>
        <p>
          <strong>{ title }</strong><br/>
          { description }
        </p>
      </div>
    )
  }
}

// PropTypes
NewsItem.propTypes = {
  thenews: PropTypes.object.isRequired
}

export default NewsItem
