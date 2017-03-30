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

  handleChangePage = page => e => {
    e.preventDefault();
    this.setState(() => ({
      page
    }))
  }

  render() {
    const {
      issues,
      page,
      limit
    } = this.state;

    // If maxNoPages is 0, default to page 1.
    const maxNoPages = Math.floor(issues.length / limit) || 1;

    const startIndex = page === 1 ? 0 : (page - 1) * limit;
    const stopIndex = startIndex + limit;
    const issuesToRender = issues.slice(startIndex,  stopIndex);

    return (
      <div className="container">
        <div className="row">
          <div className="col mt-2">
            <h1 className="text-center">WhiteHouse Issues</h1>
            <hr />
            {issues.length ? (
              <div>
                <ResultsView issues={issuesToRender} />
                <Pagination
                  page={page}
                  maxNoPages={maxNoPages}
                  onChangePage={this.handleChangePage}
                />
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
