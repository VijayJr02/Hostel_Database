import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentList from './components/StudentList';
import RoomList from './components/RoomList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/students" element={<StudentList />} />
        <Route path="/rooms" element={<RoomList />} />
      </Routes>
    </Router>
  );
}

export default App;
