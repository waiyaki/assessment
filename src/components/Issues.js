import React from 'react';
import { connect } from 'react-redux';

import { selectors } from '../redux/modules/issues/reducer';
import ResultsView from './ResultsView';
import Pagination from './Pagination';

export class Issues extends React.Component {
  render() {
    const { issues, maxNoPages, currentPage } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col mt-2">
            <h1 className="text-center display-4">WhiteHouse Issues</h1>
            {issues.length ? (
              <div>
                <ResultsView issues={issues} />
                <div className="d-flex justify-content-center">
                  <Pagination
                    page={currentPage}
                    maxNoPages={maxNoPages}
                    onChangePage={f => f => f}
                  />
                </div>
              </div>
            ) : (
              <div>
                <hr />
                <p className="lead text-center">
                  There are no issues at this time.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

const { getCurrentPage, getMaxNoPages, getVisibleIssues } = selectors;
export default connect(
  state => ({
    issues: getVisibleIssues(state),
    maxNoPages: getMaxNoPages(state),
    currentPage: getCurrentPage(state)
  })
)(Issues);
