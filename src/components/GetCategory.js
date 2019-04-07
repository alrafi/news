import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export class GetCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.getCategory = this.getCategory.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  getCategory(event) {
    event.preventDefault();
    if(this.props.onSubmit && typeof this.props.onSubmit === "function"){
      this.props.onSubmit(this.state.value);
    }
  }

  render() {
    return (
        <form onSubmit={this.getCategory}>
        <label>
          Name:
          <input className="movieName" type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        <h1>{this.state.value}</h1>
        </form>
    )
  }
}

export default GetCategory
