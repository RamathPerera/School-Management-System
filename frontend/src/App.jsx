import React from 'react'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';


import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AllRoutes from './routes/allRoutes.jsx';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<AllRoutes />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
