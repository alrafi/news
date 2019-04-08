import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from "react-router-dom";

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
        <div>
          <p onClick={() => {this.props.changeSelectedIndex(this.props.index); this.props.history.push('/detail');}}>
            <strong>{ title }</strong><br/>
          </p>
          { description }
        </div>
      </div>
    )
  }
}

// PropTypes
NewsItem.propTypes = {
  thenews: PropTypes.object.isRequired,
  changeSelectedIndex: PropTypes.func.isRequired
}

export default withRouter(NewsItem)
