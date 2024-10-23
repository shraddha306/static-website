// src/ControlPanel.js

import React, { useState } from 'react';

const ControlPanel = ({ onGroupByChange, onOrderingChange }) => {
  const [groupBy, setGroupBy] = useState('Status');
  const [ordering, setOrdering] = useState('Priority');

  const handleGroupByChange = (e) => {
    setGroupBy(e.target.value);
    onGroupByChange(e.target.value);
  };

  const handleOrderingChange = (e) => {
    setOrdering(e.target.value);
    onOrderingChange(e.target.value);
  };

  return (
    <div className="control-panel">
      <label htmlFor="groupBySelect">Group By:</label>
      <select id="groupBySelect" value={groupBy} onChange={handleGroupByChange}>
        <option value="Status">Status</option>
        <option value="Priority">Priority</option>
        <option value="User">User</option>
      </select>

      <label htmlFor="orderingSelect">Ordering:</label>
      <select id="orderingSelect" value={ordering} onChange={handleOrderingChange}>
        <option value="Priority">Priority</option>
        <option value="Alphabetical">Alphabetical</option>
      </select>
    </div>
  );
};

export default ControlPanel;
