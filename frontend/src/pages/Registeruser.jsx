import React, { useState, useEffect } from 'react';
import Appbar from '../components/Appbar';
import Successmsg from '../components/Successmsg.jsx';
import MultiActionAreaCard from '../components/MultiActionAreaCard.js';

const Registeruser = () => {
    const [newUsername, setNewUsername] = useState('');
    const [newUserId, setNewUserId] = useState('');
    const [newUserSucess, setUserSucess] = useState(false);
    const [totalUsers, setTotalUsers] = useState(0);

    useEffect(() => {
        // Fetch total users from the backend when the component mounts
        const fetchTotalUsers = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/getusers');
                console.log(response)
                if (response.ok) {
                    const data = await response.json();
                    setTotalUsers(data.total); // Assuming the backend returns { total: number }
                } else {
                    console.error('Failed to fetch total users');
                }
            } catch (error) {
                console.error('Error fetching total users:', error);
            }
        };

        fetchTotalUsers();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Adding new user');
        const formData = new FormData();
        formData.append('newusername', newUsername);
        formData.append('newuserid', newUserId);

        try {
            const response = await fetch('http://127.0.0.1:5000/add', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                // Handle successful response
                console.log('User added successfully');
                // Refresh the page
                setUserSucess(true);
                //window.location.reload();
            } else {
                // Handle error response
                console.error('Failed to add user');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Appbar />
            <div className="flex justify-center items-center flex-grow">
                <div className="bg-black bg-opacity-80 rounded-2xl p-0 m-2 h-96 w-96">
                    <form onSubmit={handleSubmit} className="flex flex-col items-center">
                        <h2 className="bg-pink-600 text-white rounded-t-2xl py-2 px-4 w-full text-center">
                            Add New User
                        </h2>
                        <label className="text-white text-lg mt-4">
                            <b>Enter New User Name</b>
                        </label>
                        <input
                            type="text"
                            id="newusername"
                            name="newusername"
                            value={newUsername}
                            onChange={(e) => setNewUsername(e.target.value)}
                            className="text-lg mt-2 mb-2 rounded-lg w-72 h-12 px-2"
                            required
                        />
                        <label className="text-white text-lg">
                            <b>Enter New User Id</b>
                        </label>
                        <input
                            type="number"
                            id="newuserid"
                            name="newuserid"
                            value={newUserId}
                            onChange={(e) => setNewUserId(e.target.value)}
                            className="text-lg mt-2 mb-2 rounded-lg w-72 h-12 px-2"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-gray-800 text-white text-lg rounded-lg w-72 h-12 mt-4"
                        >
                            Add New User
                        </button>
                        <h5 className="text-white py-6">
                            <i>Total Users in Database: {totalUsers}</i>
                        </h5>
                        <div className='py-6'>
                            {newUserSucess && <Successmsg />}
                        </div>
                        <div>
                            {newUserSucess && <MultiActionAreaCard
                                image="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"
                                title={newUsername}
                                description={newUserId}
                            />}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registeruser;
