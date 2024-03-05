// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// List display component
const ListDisplay = ({ lists, onSelectList }) => (
  <div>
    {lists.map((list, index) => (
      <div key={index} onClick={() => onSelectList(list)}>
        {list.name}
      </div>
    ))}
  </div>
);

// Form component for adding a new list
const AddListForm = ({ onAddList }) => {
  const [listName, setListName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddList({ name: listName, gifts: [] });
    setListName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={listName}
        onChange={(e) => setListName(e.target.value)}
        placeholder="List Name"
      />
      <button type="submit">Add List</button>
    </form>
  );
};

// Main App component
const App = () => {
  const [lists, setLists] = useState([]);

  // Fetch lists from the backend on component mount
  useEffect(() => {
    axios.get('/api/lists').then((response) => setLists(response.data));
  }, []);

  // Handle adding a new list
  const handleAddList = (newList) => {
    axios.post('/api/lists', newList).then((response) => {
      setLists([...lists, response.data]);
    });
  };

  // Select a list to view details or edit
  const handleSelectList = (list) => {
    // Implement functionality to select and display list details or modify
    console.log('Selected list:', list);
  };

  return (
    <div>
      <h1>Birthday Gift List Management System</h1>
      <AddListForm onAddList={handleAddList} />
      <ListDisplay lists={lists} onSelectList={handleSelectList} />
    </div>
  );
};

export default App;
