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

#### Setup and Installation

1\. **Clone the Repository:**

   ``` bash

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
