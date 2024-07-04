import React, { useState, useEffect } from 'react';
import Appbar from '../components/Appbar';

export default function Mark() {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [attendanceData, setAttendanceData] = useState({ names: [], rolls: [], times: [], length: 0 });

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // Fetch attendance data from the backend when the component mounts
        const fetchAttendanceData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/getattendance');
                console.log(response)
                if (response.ok) {
                    const data = await response.json();
                    setAttendanceData(data);
                } else {
                    console.error('Failed to fetch attendance data');
                }
            } catch (error) {
                console.error('Error fetching attendance data:', error);
            }
        };

        fetchAttendanceData();

        // Cleanup the interval on component unmount
        return () => clearInterval(timer);
    }, []);

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/start');
            if (response.ok) {
                const data = await response.json();
                console.log('Attendance marked:', data);
            } else {
                console.error('Failed to mark attendance');
            }
        } catch (error) {
            console.error('Error marking attendance:', error);
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Appbar />
            <h1>dfsfsd</h1>
            <h1>dfsfsd</h1>
            <h1>'</h1>
            <div className="flex justify-center mt-5">
                <p className="text-lg font-bold mb-5">
                    {currentTime.toLocaleDateString()} - {currentTime.toLocaleTimeString()}
                </p>
            </div>
            <div className="flex-grow flex justify-center items-center">
                <button onClick={handleSubmit} className="bg-gray-800 text-white text-lg rounded-lg w-72 h-12 mt-4">
                    Mark Attendance
                </button>
            </div>
            <div className="flex justify-center mt-5">
                <table className="table-auto border-collapse border border-gray-400">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">Name</th>
                            <th className="border border-gray-300 px-4 py-2">Roll</th>
                            <th className="border border-gray-300 px-4 py-2">Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {attendanceData.names.map((name, index) => (
                            <tr key={index}>
                                <td className="border border-gray-300 px-4 py-2">{name}</td>
                                <td className="border border-gray-300 px-4 py-2">{attendanceData.rolls[index]}</td>
                                <td className="border border-gray-300 px-4 py-2">{attendanceData.times[index]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
