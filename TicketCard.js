// src/TicketCard.js

import React from 'react';

const TicketCard = ({ task }) => {
  return (
    <div className="ticket-card">
      <h4 className="task-title">{task.title}</h4>
      <p className="task-status">Status: {task.status}</p>
      <p className="task-priority">Priority: {task.priority}</p>
    </div>
  );
};

export default TicketCard;
