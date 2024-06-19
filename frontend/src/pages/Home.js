import React from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';

export default function Home() {
  const handleAddUser = async () => {
    try {
      const response = await axios.get('http://localhost:5000/start');
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      Home
      <Button variant="contained" onClick={handleAddUser}>Add User</Button>
    </div>
  );
}
