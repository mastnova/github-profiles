import React from 'react';

export default props =>
  <li className="list-group-item">
    <a href={props.repo.html_url}>
      {props.repo.name}
    </a>
    : {props.repo.description}
  </li>
