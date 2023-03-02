import React, { useState } from "react";
import TableWrapper from "./Components/TableWrapper";

function HookFetchApi() {
  const [showForm, setShowForm] = useState(false);
  const [json, setJson] = useState([]);
  const [columns, setColumns] = useState([
    "#ID",
    "FirstName",
    "LastName",
    "Country",
  ]);

  const addToJsonArray = (formData) => {
    setShowForm(false);
    setJson([...json, formData]);
  };

  return (
    <div>
      <TableWrapper
        showForm={showForm}
        setShowForm={setShowForm}
        columns={columns}
        rows={json}
        addToJsonArray={addToJsonArray}
      />
    </div>
  );
}

export default HookFetchApi;
