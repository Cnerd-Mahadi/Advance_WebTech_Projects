import React from "react";

export const Table = () => {
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Country</th>
          <th scope="col">Gender</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
};
