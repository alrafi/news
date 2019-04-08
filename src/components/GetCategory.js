import React, { Component } from 'react'

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
          Category:
          <input placeholder="input category" className="movieName" type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Search" />
        </form>
    )
  }
}

export default GetCategory
