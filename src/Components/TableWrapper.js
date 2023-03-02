import React from "react";
import { Button, Table } from "reactstrap";
import FormComponent from "./FormComponent";
import "./TableWrapper.scss";

function TableWrapper({
  rows,
  columns,
  addToJsonArray,
  showForm,
  setShowForm,
}) {
  return (
    <div className="wrapper">
      {showForm ? <FormComponent addToJsonArray={addToJsonArray} /> : null}
      <br />

      <Button color="primary" onClick={() => setShowForm(true)}>
        Add New User
      </Button>
      <br />
      <br />
      <Table hover className="tableWrapper">
        <thead>
          <tr>{columns && columns.map((col) => <th>{col}</th>)}</tr>
        </thead>

        <tbody>
          {rows &&
            rows.map((row, index) => {
              return (
                <>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{row.firstName}</td>
                    <td>{row.lastName}</td>
                    <td>{row.country}</td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
}

export default TableWrapper;
