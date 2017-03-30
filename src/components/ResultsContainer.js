import React from 'react';

import ResultsView from './ResultsView';
import Pagination from './Pagination';
import Client from '../utils/Client';

export default class ResultsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      issues: [],
      page: 1,
      limit: 10
    }
  }

  componentDidMount() {
    Client.get('https://api.github.com/repos/WhiteHouse/petitions/issues')
      .then(issues => {
        this.setState(() => ({
          issues
        }))
      })
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
            {issues.length ? (
              <div>
                <ResultsView issues={issues} />
                <Pagination page={page} maxNoPages={maxNoPages} />
              </div>
            ) : (
              <div>
                <p className="lead">There are no issues at this time.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
