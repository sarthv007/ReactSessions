import React, { useState } from "react";
import TableWrapper from "./Components/TableWrapper";

function HookFetchApi() {
  const [json, setJson] = useState([]);
  const [columns, setColumns] = useState([
    "#ID",
    "FirstName",
    "LastName",
    "Country",
  ]);

  // const [rows, setRows] = useState([
  //   { id: 1, firstName: "Mark", lastName: "Waa", country: "india" },
  //   { id: 2, firstName: "john", lastName: "Waa", country: "usa" },
  //   { id: 3, firstName: "mike", lastName: "Waa", country: "austria" },
  // ]);

  const addToJsonArray = (formData) => {
    setJson([...json, formData]);
  };

  return (
    <div>
      <TableWrapper
        columns={columns}
        rows={json}
        addToJsonArray={addToJsonArray}
      />
    </div>
  );
}

export default HookFetchApi;
