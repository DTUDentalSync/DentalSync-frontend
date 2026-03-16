import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Navbar as BSNavbar, Nav, Container, Button } from 'react-bootstrap';
import { FaUser, FaSignOutAlt, FaHome } from 'react-icons/fa';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <BSNavbar bg="primary" variant="dark" expand="lg" sticky="top">
            <Container>
                <BSNavbar.Brand as={Link} to="/">
                    Phòng Nha ABC
                </BSNavbar.Brand>
                <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BSNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/doctors">Tìm Bác Sĩ</Nav.Link>
                        {user && (
                            <>
                                <Nav.Link as={Link} to="/book">Đặt Lịch</Nav.Link>
                                {user.role === 'doctor' && <Nav.Link as={Link} to="/doctor-dashboard">Dashboard</Nav.Link>}
                                {user.role === 'staff' && <Nav.Link as={Link} to="/staff-dashboard">Staff</Nav.Link>}
                            </>
                        )}
                    </Nav>
                    <Nav>
                        {user ? (
                            <>
                                <Nav.Link><FaUser /> {user.name}</Nav.Link>
                                <Button variant="outline-light" onClick={handleLogout}><FaSignOutAlt /> Logout</Button>
                            </>
                        ) : (
                            <>
                                <Nav.Link as={Link} to="/login">Đăng Nhập</Nav.Link>
                                <Nav.Link as={Link} to="/register">Đăng Ký</Nav.Link>
                            </>
                        )}
                    </Nav>
                </BSNavbar.Collapse>
            </Container>
        </BSNavbar>
    );
};

export default Navbar;

