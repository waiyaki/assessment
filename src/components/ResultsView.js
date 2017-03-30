import React from 'react';

// Map interesting issue keys to corresponding human readable format.
const fieldNamesMapper = {
  title: 'Title',
  created_at: 'Created At',
  updated_at: 'Updated At',
  closed_at: 'Closed At'
}

const date_fields = ['created_at', 'updated_at', 'closed_at'];

// Render table data for an issue.
export const renderFields = (issue) => {
  return Object.keys(fieldNamesMapper).map(field => {
    let fieldData = issue[field];

    // Render date fields in a readable format.
    if (date_fields.indexOf(field) > -1) {
      fieldData = fieldData ? (new Date(fieldData)).toDateString() : fieldData;
    }

    if (field === 'closed_at') {
      return <td key={field}>{`${fieldData ? 'Closed' : 'Open' }`}</td>
    }

    return <td key={field}>{fieldData}</td>
  });
}

export default function ResultsView({ issues }) {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          {Object.keys(fieldNamesMapper).map(field => (
            <th key={field}>{fieldNamesMapper[field]}</th>
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
