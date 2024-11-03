# School Management System

## Getting Started

These instructions will guide you through setting up and running the project locally.

### Prerequisites
Make sure you have the following installed on your machine:
- **Node.js** and **npm**
- **XAMPP**, **WAMP**, or any other software to run Apache and MySQL.

### Installation and Setup
1. **Clone the Project**
   ```bash
   git clone <repository-url>
   cd <project-folder>

2. Create a .env File
In the backend folder, create a .env file with the following variables:
# Database Config
DB_HOST=your_database_host
DB_USERNAME=your_database_username
DB_PASSWORD=your_database_password
DB_NAME=your_database_name

# Server Config
PORT=your_server_port

# JWT Secret
JWT_SECRET=your_jwt_secret

3. Run Apache and MySQL
Start Apache and MySQL services using XAMPP, WAMP, or any other similar software.

4. Create the Database
Open MySQL and create a database with the name specified in your .env file for DB_NAME.

5. Install Dependencies for Backend
Navigate to the backend folder and install the necessary Node.js packages:
cd backend
npm install

6. Run the Backend Application
node app.js

7. Install Dependencies for Frontend
Navigate to the frontend folder and install the necessary Node.js packages:
cd frontend
npm install

8. Run the Frontend Application
npm start
