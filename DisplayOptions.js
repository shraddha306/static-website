import React, { useState } from 'react';

function DisplayOptions({ onGroupByChange, onOrderByChange }) {
  const [groupBy, setGroupBy] = useState('status'); // Default grouping by status
  const [orderBy, setOrderBy] = useState('priority'); // Default ordering by priority

  const handleGroupByChange = (e) => {
    setGroupBy(e.target.value);
    onGroupByChange(e.target.value); // Notify parent component
  };

  const handleOrderByChange = (e) => {
    setOrderBy(e.target.value);
    onOrderByChange(e.target.value); // Notify parent component
  };

  return (
    <div className="display-options">
      <label htmlFor="group-by">Group By:</label>
      <select id="group-by" value={groupBy} onChange={handleGroupByChange}>
        <option value="status">Status</option>
        <option value="user">User</option>
        <option value="priority">Priority</option>
      </select>

      <label htmlFor="order-by">Order By:</label>
      <select id="order-by" value={orderBy} onChange={handleOrderByChange}>
        <option value="priority">Priority</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
}

export default DisplayOptions;
