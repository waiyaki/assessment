import React from 'react';

import data from './data';
import ResultsView from './ResultsView';
import Pagination from './Pagination';

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

    const maxNoPages = Math.floor(issues.length / limit) || 1;

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Issues</h1>
            <ResultsView issues={issues} />
            <Pagination page={page} maxNoPages={maxNoPages} />
          </div>
        </div>
      </div>
    )
  }
}
