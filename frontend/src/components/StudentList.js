import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('/students');
      setStudents(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {students.map((student) => (
          <li key={student._id}>{student.name} - {student.room}</li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
