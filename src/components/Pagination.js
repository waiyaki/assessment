import React from 'react';

export default function Pagination({page, maxNoPages}) {
  return (
    <nav>
      <ul className="pagination">
        {Array.from({length: maxNoPages}, (v, i) => ++i).map(pageIndex => (
          <li
            key={pageIndex}
            className={`page-item ${page === pageIndex ? 'active' : ''}`}
          >
            <a href="#" className="page-link">{pageIndex}</a>
          </li>
        ))
        }
      </ul>
    </nav>
  )
}
