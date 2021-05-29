import React from "react";

function DataRest(props) {
  const remoteJson = [];
  const registries = props.dataImported;
  if (registries !== undefined) {
    for (const registry of registries) {
      remoteJson.push(
        <tr>
          <th scope="row">{registry.id}</th>
          <td>{registry.userId}</td>
          <td>{registry.title}</td>
          <td>{registry.completed ? "yes" : "no"}</td>
        </tr>
      );
    }
  }
  return (
    <>
      <table className="table">
        <thead>
        <tr>
          <th scope="col">ID #</th>
          <th scope="col">User ID</th>
          <th scope="col">Title</th>
          <th scope="col">Completed</th>
        </tr>
        </thead>
        <tbody>
        {remoteJson}
        </tbody>
      </table>
    </>
  );
}

export default DataRest;
