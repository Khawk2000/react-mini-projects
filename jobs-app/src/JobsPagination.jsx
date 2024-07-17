import React from "react";

const JobsPagination = ({ page, setPage }) => {
  return (
    <ul className="pagination">
      {page !== 1 && (
        <li className="page-item">
          <a className="page-link" href="#" onClick={() => setPage(page - 1)}>
            Previous
          </a>
        </li>
      )}
      {page !== 1 && (
        <li className="page-item">
          <a className="page-link" href="#" onClick={() => setPage(page - 1)}>
            {page - 1}
          </a>
        </li>
      )}

      <li className="page-item active">
        <a className="page-link" href="#">
          {page}
        </a>
      </li>
      {page !== 5 && (
        <li className="page-item">
          <a className="page-link" href="#" onClick={() => setPage(page + 1)}>
            {page + 1}
          </a>
        </li>
      )}
      {page !== 5 && (
        <li className="page-item">
          <a className="page-link" href="#" onClick={() => setPage(page + 1)}>
            Next
          </a>
        </li>
      )}
    </ul>
  );
};

export default JobsPagination;
