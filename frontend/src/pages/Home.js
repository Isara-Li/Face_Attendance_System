import React from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import Appbar from '../components/Appbar';
import Card from '../components/Card';
import { motion } from "framer-motion"



export default function Home() {
  const handleAddUser = async () => {
    try {
      const response = await axios.get('http://localhost:5000/start');
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.15 },
  };

  return (
    <div className="bg-[#c9c7c7] p-4">
      <Appbar />

        <h1 className="text-2xl font-bold mb-4">Hodm,dme</h1>
     
     
        <div className="flex flex-col items-center gap-6 p-10 px-3 max-w-6xl mx-auto">
        <div className="flex flex-row flex-wrap justify-center gap-6">
        <motion.div
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={cardVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
        <Card
                        image="https://cdn2.vectorstock.com/i/1000x1000/52/91/user-icon-human-person-sign-vector-10725291.jpg"
                        title="Register User"
                       
                    />
                     </motion.div>
                    <Card
                        image="https://media.istockphoto.com/id/1397317693/vector/user-group-and-management-business-team-check-mark-sign-check-mark-person-vector-illustration.jpg?s=612x612&w=0&k=20&c=V1UUiXrdq89Fxn_Q-pRb2E2nyu6eM_WzDZDUwdZ5LS4="
                        title="Mark Attendance"
                       
                    />
                    </div>
                    </div>
                  
      
    </div>
  );
}

