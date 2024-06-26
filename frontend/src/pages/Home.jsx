import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Appbar from '../components/Appbar';
import MultiActionAreaCard from '../components/MultiActionAreaCard'; // Ensure the import path is correct
import CustomizedDialogs from '../components/CustomizedDialogs'; // Ensure the import path is correct
import { motion } from "framer-motion";
import ReactTypingEffect from 'react-typing-effect';

export default function Home() {
  const navigate = useNavigate();
  const [dialogOpen, setDialogOpen] = useState(false);


  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleSaveChanges = () => {
    setDialogOpen(false);
    navigate('/register');
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.15 },
  };

  const textShadowVariants = {
    initial: { textShadow: "0px 0px 0px rgba(0,0,0,0)" },
    hover: { textShadow: "2px 2px 10px rgba(0,0,0,0.5)", transition: { duration: 0.3 } },
  };

  return (
    <div className="bg-[#c9c7c7] p-4">
      <Appbar />

      <h1 className="text-2xl font-bold mb-4">Hodm,dme</h1>

      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
        <motion.h1
          className='text-slate-700 font-bold text-3xl lg:text-6xl'
          initial="initial"
          whileHover="hover"
          variants={textShadowVariants}
        >
          Face Attendance <motion.span variants={textShadowVariants} className='text-slate-500'>System</motion.span>
          <br />
          Powered by <motion.span variants={textShadowVariants} className='text-slate-500'>Machine Learning</motion.span>
        </motion.h1>
        <div className='text-slate-800 text-xs sm:text-sm'>
          <ReactTypingEffect
            text={[
              "This system uses advanced machine learning algorithms to detect and recognize human faces.",
              "It can be used to mark attendance of students and employees."
            ]}
            speed={50}
            eraseSpeed={30}
            eraseDelay={5000}
            typingDelay={200}
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-6 p-10 px-3 max-w-6xl mx-auto">
        <h2 className="text-center text-2xl py-3 font-semibold text-slate-700">Functions</h2>
        <div className="flex flex-row flex-wrap justify-center gap-6">
          <motion.div
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={cardVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <MultiActionAreaCard
              image="https://cdn2.vectorstock.com/i/1000x1000/52/91/user-icon-human-person-sign-vector-10725291.jpg"
              title="Register User"
              description=""
              onClick={() => console.log('Register User Card Clicked')}
            />
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={cardVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <MultiActionAreaCard
              image="https://media.istockphoto.com/id/1397317693/vector/user-group-and-management-business-team-check-mark-sign-check-mark-person-vector-illustration.jpg?s=612x612&w=0&k=20&c=V1UUiXrdq89Fxn_Q-pRb2E2nyu6eM_WzDZDUwdZ5LS4="
              title="Mark Attendance"
              description=""
              onClick={handleDialogOpen}
            />
          </motion.div>
        </div>
      </div>

      <CustomizedDialogs
        open={dialogOpen}
        handleClose={handleDialogClose}
        handleSave={handleSaveChanges}
      />
    </div>
  );
}
