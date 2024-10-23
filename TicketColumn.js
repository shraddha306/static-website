// src/TicketColumn.js

import React from 'react';
import TicketCard from './TicketCard';

const TicketColumn = ({ title, tasks }) => {
  return (
    <div className="ticket-column">
      <h3 className="column-title">{title}</h3>
      <div className="tasks-container">
        {tasks.map(task => (
          <TicketCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TicketColumn;
