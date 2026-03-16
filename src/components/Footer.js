import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4 mt-5">
            <Container>
                <Row>
                    <Col md={4}>
                        <h5>Hệ thống đặt lịch khám</h5>
                        <p>Ứng dụng hỗ trợ đặt lịch bác sĩ nhanh chóng.</p>
                    </Col>
                    <Col md={4}>
                        <h6>Liên kết</h6>
                        <ul className="list-unstyled">
                            <li><a href="/" className="text-light">Home</a></li>
                            <li><a href="/doctors" className="text-light">Tìm bác sĩ</a></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h6>Liên hệ</h6>
                        <p>Email: support@kltm.vn</p>
                    </Col>
                </Row>
                <hr />
                <p className="text-center mb-0">&copy; 2024 KLTN. All rights reserved.</p>
            </Container>
        </footer>
    );
};

export default Footer;

