import React from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';

const StaffDashboard = () => {
    const mockStats = { patients: 150, doctors: 25, appointments: 320 };
    const mockAppointments = [
        { id: 1, patient: 'A', doctor: 'B', status: 'confirmed' },
        { id: 2, patient: 'C', doctor: 'D', status: 'pending' }
    ];

    return (
        <Container className="py-5">
            <h1>Dashboard Nhân viên</h1>
            <Row className="mb-4">
                <Col md={4}>
                    <Card>
                        <Card.Body className="text-center">
                            <Card.Title>Bệnh nhân</Card.Title>
                            <h2>{mockStats.patients}</h2>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body className="text-center">
                            <Card.Title>Bác sĩ</Card.Title>
                            <h2>{mockStats.doctors}</h2>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body className="text-center">
                            <Card.Title>Lịch hẹn</Card.Title>
                            <h2>{mockStats.appointments}</h2>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Card>
                <Card.Header>Quản lý lịch hẹn</Card.Header>
                <Card.Body>
                    <Table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Bệnh nhân</th>
                                <th>Bác sĩ</th>
                                <th>Trạng thái</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mockAppointments.map(apt => (
                                <tr key={apt.id}>
                                    <td>{apt.id}</td>
                                    <td>{apt.patient}</td>
                                    <td>{apt.doctor}</td>
                                    <td>{apt.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default StaffDashboard;

