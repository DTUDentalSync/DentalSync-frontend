import React from 'react';
import { Container, Table, Button, Badge } from 'react-bootstrap';

const ManageAppointments = () => {
    const mockAppointments = [
        { id: 1, patient: 'Nguyễn A', doctor: 'BS Lê C', date: '2024-04-20', status: 'pending' },
        { id: 2, patient: 'Trần B', doctor: 'BS Phạm D', date: '2024-04-21', status: 'confirmed' },
        { id: 3, patient: 'Lê E', doctor: 'BS Nguyễn F', date: '2024-04-22', status: 'cancelled' }
    ];

    return (
        <Container className="py-5">
            <h1>Quản lý lịch hẹn</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Bệnh nhân</th>
                        <th>Bác sĩ</th>
                        <th>Ngày</th>
                        <th>Trạng thái</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {mockAppointments.map(apt => (
                        <tr key={apt.id}>
                            <td>{apt.id}</td>
                            <td>{apt.patient}</td>
                            <td>{apt.doctor}</td>
                            <td>{apt.date}</td>
                            <td><Badge bg={apt.status === 'confirmed' ? 'success' : apt.status === 'cancelled' ? 'danger' : 'warning'}>{apt.status}</Badge></td>
                            <td>
                                <Button variant="outline-success" size="sm" className="me-1">Xác nhận</Button>
                                <Button variant="outline-danger" size="sm">Hủy</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default ManageAppointments;

