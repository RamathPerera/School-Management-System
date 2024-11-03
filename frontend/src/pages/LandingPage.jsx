import React, { useState } from 'react';
import Button from '../components/Button';
import LoginForm from '../components/Forms/LoginForm'
import RegisterForm from '../components/Forms/RegisterForm';

function LandingPage() {
    const [isLoginModalOpen, setLoginModalOpen] = useState(false);
    const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);

    const openLoginModal = () => setLoginModalOpen(true);
    const openRegisterModal = () => setRegisterModalOpen(true);

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-purple-700 mb-8">Welcome to the School Management System</h1>
            <div className="flex gap-4">
                <Button label="Login" onClick={openLoginModal} />
                <Button label="Register" onClick={openRegisterModal} />
            </div>

            <LoginForm isOpen={isLoginModalOpen} onClose={() => setLoginModalOpen(false)} />
            <RegisterForm isOpen={isRegisterModalOpen} onClose={() => setRegisterModalOpen(false)} />
        </div>
    );
};

export default LandingPage;
