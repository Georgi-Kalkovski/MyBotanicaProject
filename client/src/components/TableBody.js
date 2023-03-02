import React from 'react';

function TableBody({ plants }) {
  return (
    <tbody>
      {plants.map((plant) => (
        <tr key={plant.id}>
          <td>{plant.scientific_name}</td>
          <td>{plant.common_name}</td>
          <td>{plant.family}</td>
          <td>{plant.family_common_name}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;