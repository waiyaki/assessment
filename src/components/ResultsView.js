import React from 'react';

const fields = ['title', 'created_at', 'updated_at', 'closed_at']

export const renderFields = (issue) => {
  return fields.map(field => {
    const fieldData = issue[field];
    if (field === 'closed_at') {
      return <td key={field}>{`${fieldData ? 'Closed' : 'Open' }`}</td>
    }
    return <td key={field}>{fieldData}</td>
  })
}

export default function ResultsView({ issues }) {
  return (
    <table>
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
  )
}
