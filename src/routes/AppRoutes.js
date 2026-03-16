import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import DocterSearch from '../pages/DocterSearch';
import BookAppointment from '../pages/BookAppointment';
import DoctorDashboard from '../pages/DoctorDashboard';
import StaffDashboard from '../pages/StaffDashboard';
import ManagePatients from '../pages/ManagePatients';
import ManageDoctors from '../pages/ManageDoctors';
import ManageAppointments from '../pages/ManageAppointments';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const AppRoutes = () => {
    const { user, loading } = useContext(AuthContext);

    if (loading) return <div>Loading...</div>;

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/doctors" element={<DocterSearch />} />
            <Route path="/book/:doctorId" element={<BookAppointment />} />

            <Route path="/doctor-dashboard" element={user?.role === 'doctor' ? <DoctorDashboard /> : <Navigate to="/login" />} />
            <Route path="/staff-dashboard" element={user?.role === 'staff' ? <StaffDashboard /> : <Navigate to="/login" />} />
            <Route path="/manage-patients" element={<ManagePatients />} />
            <Route path="/manage-doctors" element={<ManageDoctors />} />
            <Route path="/manage-appointments" element={<ManageAppointments />} />

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default AppRoutes;

