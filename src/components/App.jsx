import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'username',
      userData: [],
      userRepos: [],
      perPage: 5
    }
  }

  render() {
    return (
      <div>{this.state.username}</div>
    )
  }
}

App.propTypes = {
  clientId: React.PropTypes.string,
  clientSecret: React.PropTypes.string
};

App.defaultProps = {
  clientId: 'a95f639f81a85d56c5a7',
  clientSecret: 'd61a5b37eb1429a357b23549cd32904cf22e562d'
}

export default App;
