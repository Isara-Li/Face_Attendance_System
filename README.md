# Face_Attendance_System

### Face Attendance System

This project is a Face Attendance System that leverages advanced machine learning algorithms for facial recognition and attendance tracking. It consists of a Python backend using Flask, OpenCV, and machine learning libraries, along with a React frontend for a user-friendly interface.

#### Features

1\. **Real-time Face Detection and Recognition:**

   - Utilizes OpenCV for real-time face detection.

   - Employs a K-Nearest Neighbors (KNN) classifier for face recognition, trained with user-provided images.

2\. **Automated Attendance Marking:**

   - Automatically marks attendance upon recognizing a registered face.

   - Stores attendance data with timestamps in CSV files.

3\. **User Registration:**

   - Allows new users to register by capturing their facial images through a webcam.

   - Automatically trains the recognition model with new user data.

4\. **Attendance Data Retrieval:**

   - Provides endpoints to fetch attendance data for specific dates.

   - Displays attendance data in a tabular format.

5\. **Cross-Origin Resource Sharing (CORS):**

   - CORS enabled for seamless communication between the backend and frontend.

#### Backend Components

- **Flask API:**

  - Serves various endpoints for attendance marking, user registration, and data retrieval.

  - Handles image processing and model training tasks.

- **OpenCV:**

  - Used for face detection and image preprocessing.

- **Machine Learning:**

  - Implements a KNN classifier for face recognition.

  - Trains the model with user-provided images stored in the `static/faces` directory.

- **Data Storage:**

  - Stores attendance data in CSV files, organized by date.

  - Manages user images in a structured directory format.

#### Frontend Components

- **React Application:**

  - Provides a responsive and interactive user interface.

  - Utilizes React Router for navigation between different pages (Home, Mark Attendance, Register User).

  - Integrates with the backend through API calls to fetch and display data.

- **Components:**

  - **Appbar:** Navigation bar for the application.

  - **MultiActionAreaCard:** Reusable card component for displaying actions (e.g., Register User, Mark Attendance).

  - **CustomizedDialogs:** Dialog component for user interactions.

  - **Successmsg:** Displays success messages after user registration.

#### Usage

1\. **Home Page:**

   - Introduction to the Face Attendance System.

   - Links to register new users and mark attendance.

2\. **Register User:**

   - Form to enter new user details (name and ID).

   - Captures facial images through the webcam.

   - Trains the recognition model with the new user's data.

3\. **Mark Attendance:**

   - Real-time attendance marking using the webcam.

   - Displays current time and allows fetching of attendance data by date.

#### Setup and Installation

1\. **Clone the Repository:**

   ```bash

   git clone https://github.com/your-repo/face-attendance-system.git

   cd face-attendance-system

   ```

2\. **Backend Setup:**

   - Ensure you have Python and pip installed.

   - Install the required packages:

     ```bash

     pip install -r requirements.txt

     ```

   - Run the Flask server:

     ```bash

     python app.py

     ```

3\. **Frontend Setup:**

   - Navigate to the frontend directory:

     ```bash

     cd frontend

     ```

   - Install the required packages:

     ```bash

     npm install

     ```

   - Start the React application:

     ```bash

     npm start

     ```

4\. **Access the Application:**

   - Open your browser and navigate to `http://localhost:3000` to access the frontend.

   - The Flask backend runs on `http://127.0.0.1:5000`.

#### Dependencies

- **Backend:**

  - Flask

  - OpenCV

  - NumPy

  - Pandas

  - scikit-learn

  - joblib

  - Flask-CORS

- **Frontend:**

  - React

  - React Router

  - Framer Motion

  - React Typing Effect

#### Contributing

Feel free to fork this repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

#### License

This project is licensed under the MIT License. See the LICENSE file for details.

---

This project demonstrates the integration of machine learning with web technologies to create a functional and interactive face attendance system. Contributions and feedback are welcome to further enhance its capabilities and features.
