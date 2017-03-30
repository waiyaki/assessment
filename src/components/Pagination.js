import React from 'react';

export default function Pagination({page, maxNoPages, onChangePage }) {
  return (
    <nav>
      <ul className="pagination">
        {Array.from({length: maxNoPages}, (v, i) => i).map(pageIndex => (
          <li
            key={pageIndex}
            className={`page-item ${page === pageIndex + 1 ? 'active' : ''}`}
          >
            <a
              className="page-link"
              onClick={onChangePage(pageIndex + 1)}
            >{pageIndex + 1}</a>
          </li>
        ))
        }
      </ul>
    </nav>
  )
}
