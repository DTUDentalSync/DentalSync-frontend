import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table, Card, Badge } from 'react-bootstrap';
import { appointmentService } from '../services/appointmentService';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const DoctorDashboard = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        appointmentService.getByDoctor('currentDoctor').catch(() => { }); // Mock
        // Mock data
        setAppointments([
            { _id: 1, patientName: 'Nguyễn Văn A', date: '2024-04-20', time: '9:00', status: 'pending' },
            { _id: 2, patientName: 'Trần Thị B', date: '2024-04-21', time: '14:00', status: 'confirmed' }
        ]);
    }, []);

    const chartData = {
        labels: ['Th4', 'Th5', 'Th6'],
        datasets: [{ label: 'Lịch hẹn', data: [12, 19, 25], borderColor: 'rgb(75, 192, 192)' }]
    };

    return (
        <Container className="py-5">
            <h1>Dashboard Bác sĩ</h1>
            <Row>
                <Col md={8}>
                    <Card className="mb-4">
                        <Card.Header>Lịch hẹn hôm nay</Card.Header>
                        <Card.Body>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Bệnh nhân</th>
                                        <th>Ngày</th>
                                        <th>Giờ</th>
                                        <th>Trạng thái</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {appointments.map(apt => (
                                        <tr key={apt._id}>
                                            <td>{apt.patientName}</td>
                                            <td>{apt.date}</td>
                                            <td>{apt.time}</td>
                                            <td><Badge bg={apt.status === 'pending' ? 'warning' : 'success'}>{apt.status}</Badge></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Header>Biểu đồ</Card.Header>
                        <Card.Body>
                            <Line data={chartData} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default DoctorDashboard;

