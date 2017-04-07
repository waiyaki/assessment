import R, { prop, compose, curry, converge } from 'ramda';

/**
 * computeSliceIndices(currentPage<Int>, paginationLimit<Int>) -> [Int, Int]
 *
 * Given the current page and pagination limit, return an array with the
 * start and stop indices of the next slice.
 */
const computeSliceIndices = curry((currentPage, paginationLimit) => {
  let startIndex;
  if (currentPage === 1) {
    startIndex = 0;
  } else {
    startIndex = (currentPage - 1) * paginationLimit
  }

  const stopIndex = startIndex + paginationLimit;

  return [startIndex, stopIndex];
});

// Extract the issues store from the general store derived from reducers.
const getIssuesStore = prop('issuesStore');

// Extract the issues array from the issuesStore.
const getIssues = compose(prop('issues'), getIssuesStore);

// Extract the current page from the issuesStore.
const getCurrentPage = compose(prop('currentPage'), getIssuesStore);

// Extract the pagination limit from the issuesStore.
const getPaginationLimit = compose(prop('paginationLimit'), getIssuesStore);

/**
 * Compute the maximum number of pages that can be shown given the number of
 * issues in the store and the pagination limit.
 *
 * Default to 1.
 */
const getMaxNoPages = compose(
  R.ifElse(
    R.equals(0),
    R.always(1),
    R.identity
  ),
  Math.floor,
  converge(R.divide, [compose(R.length, getIssues), getPaginationLimit])
);

/**
 * Get a slice of issues to show in the UI given the current page and
 * the pagination limit.
 *
 * Defer to `computeSliceIndices` to get the values of the start and stop index.
 */
const getVisibleSlice = compose(R.apply(R.slice), computeSliceIndices);

/**
 * Extract a slice of issues to show in the UI derived from the current page
 * and the pagination limit.
 *
 * Defer to `getVisibleSlice` to compute the actual slice to show.
 */
const getVisibleIssues = converge(
  R.call,
  [converge(getVisibleSlice, [getCurrentPage, getPaginationLimit]), getIssues]
);

export default {
  getCurrentPage,
  getMaxNoPages,
  getVisibleIssues,
};
