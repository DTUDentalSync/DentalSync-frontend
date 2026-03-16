import React, { useState } from 'react';
import { Form, Button, Alert, Row, Col, Container } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { appointmentService } from '../services/appointmentService';
import { useParams } from 'react-router-dom';

const AppointmentForm = ({ doctorId }) => {
    const { doctorId: paramId } = useParams();
    const id = paramId || doctorId;
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState('');
    const [notes, setNotes] = useState('');
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await appointmentService.create({ doctorId: id, date, time, notes });
            setSuccess(true);
        } catch (error) {
            alert('Lỗi đặt lịch');
        } finally {
            setLoading(false);
        }
    };

    if (success) return <Alert variant="success">Đặt lịch thành công!</Alert>;

    return (
        <Container>
            <h3>Đặt lịch với bác sĩ</h3>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Ngày khám</Form.Label>
                            <DatePicker selected={date} onChange={setDate} className="form-control" dateFormat="dd/MM/yyyy" />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Giờ</Form.Label>
                            <Form.Select value={time} onChange={(e) => setTime(e.target.value)}>
                                <option>Chọn giờ</option>
                                <option>9:00</option>
                                <option>10:00</option>
                                <option>14:00</option>
                                <option>15:00</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mt-3">
                    <Form.Label>Ghi chú</Form.Label>
                    <Form.Control as="textarea" rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} />
                </Form.Group>
                <Button type="submit" className="mt-3" disabled={loading}>Đặt lịch</Button>
            </Form>
        </Container>
    );
};

export default AppointmentForm;

