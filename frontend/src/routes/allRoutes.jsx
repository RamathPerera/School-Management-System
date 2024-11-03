import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage.jsx';
import StudentPage from '../pages/StudentPage.jsx';
import LecturerPage from '../pages/LecturerPage.jsx';
import CoursePage from '../pages/CoursePage.jsx';
import EnrollmentPage from '../pages/EnrollmentPage.jsx';

function AllRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />
      <Route
        path="/students"
        element={<StudentPage />}
      />
      <Route
        path="/lecturers"
        element={<LecturerPage />}
      />
      <Route
        path="/courses"
        element={<CoursePage />}
      />
      <Route
        path="/enrollments"
        element={<EnrollmentPage />}
      />
      </Routes>
  );
}

export default AllRoutes;
