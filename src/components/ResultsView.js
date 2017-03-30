import React from 'react';

const fields = ['title', 'created_at', 'updated_at', 'closed_at'];
const date_fields = ['created_at', 'updated_at', 'closed_at'];

export const renderFields = (issue) => {
  return fields.map(field => {
    let fieldData = issue[field];

    if (date_fields.indexOf(field) > -1) {
      fieldData = fieldData ? (new Date(fieldData)).toLocaleDateString() : fieldData;
    }
    if (field === 'closed_at') {
      return <td key={field}>{`${fieldData ? 'Closed' : 'Open' }`}</td>
    }
    return <td key={field}>{fieldData}</td>
  })
}

export default function ResultsView({ issues }) {
  return (
    <table className="table">
      <thead>
        <tr>
          {fields.map(field => (
            <th key={field}>{field}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {issues.map(issue => (
          <tr key={issue.id}>
            {renderFields(issue)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
