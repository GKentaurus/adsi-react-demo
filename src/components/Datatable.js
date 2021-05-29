import React from "react";

function Datatable(props) {
  const localJson = [];
  const registries = props.datasource.registries;
  let counter = 1;
  for (const registry of registries) {
    localJson.push(
      <tr>
        <th scope="row">{counter++}</th>
        <td>{registry.firstname}</td>
        <td>{registry.lastname}</td>
        <td>{registry.document}</td>
      </tr>
    );
  }
  return (
    <>
      <h1>{props.saludo}</h1>
      <table className="table">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Document</th>
        </tr>
        </thead>
        <tbody>
        {localJson}
        </tbody>
      </table>
      <h6>{props.mensaje}</h6>
    </>
  );
}

export default Datatable;
