import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RoomList = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('/rooms');
      setRooms(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Room List</h1>
      <ul>
        {rooms.map((room) => (
          <li key={room._id}>Room {room.roomNumber} - Capacity: {room.capacity}</li>
        ))}
      </ul>
    </div>
  );
};

export default RoomList;
