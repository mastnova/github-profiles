import React, { Component } from 'react';

class Search extends Component {
  onSubmit(e) {
    e.preventDefault();
    const username = this.refs.username.value.trim();
    if(!username) {
      return;
    }
    this.props.onFormSubmit(username);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <label>Search Github users</label>
        <input type="text" ref="username" className="form-control" />
      </form>
    )
  }
}

export default Search;
