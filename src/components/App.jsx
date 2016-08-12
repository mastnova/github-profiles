import React, { Component } from 'react';
import Profile from './github/Profile.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'mastnova',
      userData: [],
      userRepos: [],
      perPage: 5
    }
  }

  //get user data from github
  getUserData() {
    $.ajax({
      url: 'https://api.github.com/users/'+this.state.username
        +'?client_id='+this.props.clientId
        +'&client_secret='+this.props.clientSecret,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({userData: data});
        console.log(data);
      }.bind(this),
      error: function(xhr, status, err) {
        console.log('error');
      }
    });
  }

  componentDidMount() {
    this.getUserData();
  }

  render() {
    return (
      <Profile userData={this.state.userData}/>
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
