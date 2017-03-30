import React from 'react';

import data from './data';
import ResultsView from './ResultsView';

export default class ResultsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      issues: data,
      page: 1,
      limit: 10
    }
  }

  render() {
    const {
      issues,
      page,
      limit
    } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Issues</h1>
            <ResultsView issues={issues} page={page} limit={limit} />
          </div>
        </div>
      </div>
    )
  }
}
