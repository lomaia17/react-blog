import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div style={{ marginTop: "75px", textAlign: "center" }}>
      {pageNumbers.map((number) => (
        <a
          onClick={() => paginate(number)}
          className="page-link"
          key={number}
          style={{
            color: "black",
            padding: "5px 12px",
            textDecoration: "none",
            border: "1px solid grey",
            cursor: "pointer",
            marginLeft: "5px",
            borderRadius: "10px",
          }}
        >
          {number}
        </a>
      ))}
    </div>
  );
};

export default Pagination;
