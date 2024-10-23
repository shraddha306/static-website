import React, { useState } from 'react';
import './App.css';

// Importing category images
import todoImage from './icons_FEtask/To-do.svg'; // Update the path as necessary
import inProgressImage from './icons_FEtask/in-progress.svg'; // Update the path as necessary
import doneImage from './icons_FEtask/Done.svg'; // Update the path as necessary
import backlogImage from './icons_FEtask/Backlog.svg'; // Update the path as necessary
import highPriorityImage from './icons_FEtask/Img-high.svg'; // Update with actual path
import mediumPriorityImage from './icons_FEtask/Img-medium.svg'; // Update with actual path
import lowPriorityImage from './icons_FEtask/Img-low.svg'; // Update with actual path
import urgentColorImage from './icons_FEtask/urgent.svg'; // Add your urgent color icon path
import noPriorityImage from './icons_FEtask/3dots.svg'; // Add your no priority icon path
import displayImage from './icons_FEtask/Display.svg'; // Add your display dropdown icon path
import plusImage from './icons_FEtask/add.svg'; // Add your plus icon path
import ellipsisImage from './icons_FEtask/3dots.svg'; // Add your ellipsis icon path

const categoryImages = {
  'To Do': todoImage,
  'In Progress': inProgressImage,
  'Done': doneImage,
  'Backlog': backlogImage,
  'High Priority': highPriorityImage,
  'Medium Priority': mediumPriorityImage,
  'Low Priority': lowPriorityImage,
  'Urgent - Color': urgentColorImage,
  'No Priority': noPriorityImage,
};

const initialTasks = [
  { id: 1, title: 'Implement feature A', status: 'To Do', assignedUser: 'Alice', priority: 3 },
  { id: 2, title: 'Fix bug B', status: 'In Progress', assignedUser: 'Bob', priority: 1 },
  { id: 3, title: 'Review code C', status: 'Backlog', assignedUser: 'Charlie', priority: 2 },
  { id: 4, title: 'Write documentation', status: 'To Do', assignedUser: 'Alice', priority: 4 },
  { id: 5, title: 'Update UI', status: 'In Progress', assignedUser: 'David', priority: 0 },
];

const App = () => {
  const [tasks] = useState(initialTasks);
  const [groupBy, setGroupBy] = useState('Status');
  const [ordering, setOrdering] = useState('Priority');
  const [displayOptions, setDisplayOptions] = useState(false);

  const getGroupedTasks = () => {
    const grouped = {};

    // Define categories based on selected grouping
    let categories = [];
    if (groupBy === 'Status') {
      categories = ['To Do', 'In Progress', 'Done', 'Backlog'];
    } else if (groupBy === 'User') {
      categories = [...new Set(tasks.map(task => task.assignedUser))]; // Unique users
    } else if (groupBy === 'Priority') {
      categories = [
        'High Priority',
        'Medium Priority',
        'Low Priority',
        'Urgent - Color',
        'No Priority',
      ];
    }

    // Initialize grouped object for each category
    categories.forEach(category => {
      grouped[category] = tasks.filter(task => {
        if (groupBy === 'Status') return task.status === category;
        if (groupBy === 'User') return task.assignedUser === category;
        if (groupBy === 'Priority') {
          return (task.priority === 3 && category === 'High Priority') ||
                 (task.priority === 2 && category === 'Medium Priority') ||
                 (task.priority === 1 && category === 'Low Priority') ||
                 (task.priority === 0 && category === 'No Priority') ||
                 (task.priority === 5 && category === 'Urgent - Color');
        }
      });
    });

    return Object.entries(grouped).map(([key, value]) => ({
      key,
      tasks: value.sort((a, b) => {
        if (ordering === 'Priority') {
          return b.priority - a.priority;
        } else {
          return a.title.localeCompare(b.title);
        }
      }),
    }));
  };

  const groupedTasks = getGroupedTasks();

  return (
    <div className="kanban-board">
      <div className="display-options">
        <div className="dropdown">
          <button onClick={() => setDisplayOptions(!displayOptions)}>
            <img src={displayImage} alt="Display" style={{ width: '20px', marginRight: '5px' }} />
            Display
          </button>
          {displayOptions && (
            <div className="dropdown-content">
              <div>
                <label htmlFor="groupBy">Group By:</label>
                <select id="groupBy" value={groupBy} onChange={e => setGroupBy(e.target.value)}>
                  <option value="Status">Status</option>
                  <option value="User">User</option>
                  <option value="Priority">Priority</option>
                </select>
              </div>
              <div>
                <label htmlFor="ordering">Ordering:</label>
                <select id="ordering" value={ordering} onChange={e => setOrdering(e.target.value)}>
                  <option value="Priority">Priority</option>
                  <option value="Title">Title</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="ticket-info">
        <div className="ticket-columns">
          {groupedTasks.map(group => (
            <div key={group.key} className="ticket-column">
              <div className="category-name">
                <img src={categoryImages[group.key] || '/images/default.png'} alt={group.key} style={{ width: '20px', marginRight: '5px' }} />
                {group.key || 'Unassigned'}
                <img src={plusImage} alt="Plus" style={{ width: '15px', marginLeft: '5px' }} />
                <img src={ellipsisImage} alt="Ellipsis" style={{ width: '15px', marginLeft: '2px' }} />
              </div>
              <div className="ticket-list">
                {group.tasks.length > 0 ? (
                  group.tasks.map(task => (
                    <div key={task.id} className="ticket-card">
                      <input type="checkbox" className="checkbox" />
                      {task.title} (Priority: {task.priority})
                    </div>
                  ))
                ) : (
                  <div className="empty">No tasks</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
