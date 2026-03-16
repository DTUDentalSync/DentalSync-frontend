import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Badge } from 'react-bootstrap';
import DoctorCard from '../components/DoctorCard';
import { doctorService } from '../services/doctorService';

const DocterSearch = () => {
    const [doctors, setDoctors] = useState([]);
    const [search, setSearch] = useState('');
    const [specialty, setSpecialty] = useState('');

    const loadDoctors = async () => {
        const params = { specialty, q: search };
        const res = await doctorService.getAll(params);
        setDoctors(res.data);
    };

    useEffect(() => {
        loadDoctors();
    }, []);

    const handleSearch = () => {
        loadDoctors();
    };

    return (
        <Container className="py-5">
            Tìm nha sĩ
            <Row className="mb-5">
                <Col md={4}>
                    <Form.Control
                        placeholder="Tìm theo tên..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </Col>
                <Col md={3}>
                    <Form.Select value={specialty} onChange={(e) => setSpecialty(e.target.value)}>
                        <option value="">Chuyên khoa</option>
                        <option value="Nha khoa tổng quát">Nha khoa tổng quát</option>
                        <option value="Nhổ răng">Nhổ răng</option>
                        <option value="Niềng răng">Niềng răng</option>
                        <option value="Răng hàm mặt">Răng hàm mặt</option>
                    </Form.Select>
                </Col>
                <Col md={2}>
                    <Button onClick={handleSearch} className="w-100">Tìm</Button>
                </Col>
            </Row>
            <Row>
                {doctors.length ? (
                    doctors.map(doctor => (
                        <Col md={4} key={doctor._id} className="mb-4">
                            <DoctorCard doctor={doctor} />
                        </Col>
                    ))
                ) : (
                    <Col>
                        <h4 className="text-center text-muted">Không tìm thấy bác sĩ</h4>
                    </Col>
                )}
            </Row>
        </Container>
    );
};

export default DocterSearch;

