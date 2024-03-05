import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GiftListDisplay = () => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const fetchLists = async () => {
      const { data } = await axios.get('/api/lists');
      setLists(data);
    };
    fetchLists();
  }, []);

  return (
    <div>
      {lists.map(list => (
        <div key={list._id}>{list.name}</div>
      ))}
    </div>
  );
};

export default GiftListDisplay;
