import React from 'react';

const Filter = ({ filter, setFilter }) => {
  return (
    <div>
      <button
        onClick={() => setFilter('all')}
        style={{ fontWeight: filter === 'all' ? 'bold' : 'normal' }}
      >
        All
      </button>
      <button
        onClick={() => setFilter('completed')}
        style={{ fontWeight: filter === 'completed' ? 'bold' : 'normal' }}
      >
        Completed
      </button>
      <button
        onClick={() => setFilter('pending')}
        style={{ fontWeight: filter === 'pending' ? 'bold' : 'normal' }}
      >
        Pending
      </button>
    </div>
  );
};

export default Filter;
