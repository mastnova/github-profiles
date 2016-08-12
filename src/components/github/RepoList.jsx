import React, { Component } from 'react';
import Repo from './Repo.jsx';

class RepoList extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <h4>Repos List</h4>
          <ul className="list-group">
            {
              this.props.userRepos.map( repo =>
                <Repo repo={repo} key={repo.id} />
              )
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default RepoList;
