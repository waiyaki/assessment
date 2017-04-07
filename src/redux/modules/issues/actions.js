import Client from '../../utils/Client';

export const actionTypes = [
  'FETCH_ISSUES_REQUEST', 'FETCH_ISSUES_SUCCESS', 'CHANGE_CURRENT_PAGE',
].reduce((types, type) => Object.assign({}, types, {
    [type]: `issues/${type}`
}), {});

export const fetchIssues = (url) => dispatch => {
  dispatch({
    type: actionTypes.FETCH_ISSUES_REQUEST
  });

  return Client.get(url)
    .then(payload => dispatch({
      type: actionTypes.FETCH_ISSUES_SUCCESS,
      payload
    }));
}

export const changeCurrentPage = page => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  payload: page
});
