const INITIAL_STATE = {
  issues: [],
  currentPage: 1,
  paginationLimit: 10,
  hasNext: false
};

// Couple selectors to the reducer by reexporting them as a named export.
export { default as selectors } from './selectors';

export default function reducer(state = INITIAL_STATE, action) {
  return state;
}
