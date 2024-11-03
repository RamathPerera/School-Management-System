import React, { useState, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage.jsx';
import StudentPage from '../pages/StudentPage.jsx';
import LecturerPage from '../pages/LecturerPage.jsx';
import CoursePage from '../pages/CoursePage.jsx';
import EnrollmentPage from '../pages/EnrollmentPage.jsx';
import LandingPage from '../pages/LandingPage.jsx';

function AllRoutes() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

    useEffect(() => {
        const handleStorageChange = () => {
            setIsAuthenticated(!!localStorage.getItem('token'));
        };

        window.addEventListener('storage', handleStorageChange); // Listen for localStorage changes

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);
    
  return (
    <Routes>
      <Route
        path="/"
        element={!(isAuthenticated) ? <LandingPage /> : <Navigate to="/home" />}
      />
      <Route
        path="/home"
        element={isAuthenticated ? <HomePage /> : <Navigate to="/" />}
      />
      <Route
        path="/students"
        element={isAuthenticated ? <StudentPage /> : <Navigate to="/" />}
      />
      <Route
        path="/lecturers"
        element={isAuthenticated ? <LecturerPage /> : <Navigate to="/" />}
      />
      <Route
        path="/courses"
        element={isAuthenticated ? <CoursePage /> : <Navigate to="/" />}
      />
      <Route
        path="/enrollments"
        element={isAuthenticated ? <EnrollmentPage /> : <Navigate to="/" />}
      />
      </Routes>
  );
}

export default AllRoutes;
