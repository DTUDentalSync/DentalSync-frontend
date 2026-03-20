import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';
import DoctorCard from '../../components/DoctorCard';
import { doctorService } from '../../services/doctorService';
import ChatBotAI from '../../components/ChatBotAI';

const Home = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        doctorService.getAll().then(res => setDoctors(res.data.slice(0, 6)));
    }, []);

    return (
        <>
            <section className="hero bg-primary text-white py-5 mb-5">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6}>
                            Đặt lịch khám <br />Nha khoa dễ dàng
                            <p className="lead">Tìm bác sĩ uy tín, đặt lịch nhanh chóng 24/7.</p>
                            <Button size="lg" href="/doctors" className="me-3">Tìm bác sĩ</Button>
                            <Button size="lg" variant="outline-light" href="/register">Đăng ký</Button>
                        </Col>
                        <Col md={6}>
                            <img src="https://images.unsplash.com/photo-1585435557348-5dcc936f8eed?w=600&h=400&fit=crop" className="img-fluid rounded shadow" alt="Nha khoa" />
                        </Col>
                    </Row>
                </Container>
            </section>

            <Container>
                Nha sĩ nổi bật
                <Row>
                    {doctors.map(doctor => (
                        <Col md={4} key={doctor._id} className="mb-4">
                            <DoctorCard doctor={doctor} />
                        </Col>
                    ))}
                </Row>
                <div className="text-center mt-5">
                    <Button variant="outline-primary" size="lg" href="/doctors">Xem tất cả bác sĩ</Button>
                </div>
            </Container>

            <ChatBotAI />
        </>
    );
};

export default Home;

