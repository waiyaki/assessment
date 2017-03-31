import { actionTypes } from './actions';

const INITIAL_STATE = {
  issues: [],
  currentPage: 1,
  paginationLimit: 10,
  hasNext: false
};

// Couple selectors to the reducer by reexporting them as a named export.
export { default as selectors } from './selectors';

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.FETCH_ISSUES_SUCCESS:
      return Object.assign({}, state, {
        issues: action.payload
      });

    case actionTypes.CHANGE_CURRENT_PAGE:
      return Object.assign({}, state, {
        currentPage: action.payload
      });

    default:
      return state;
  }
}
