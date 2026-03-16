import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaStar, FaHospital, FaClock } from 'react-icons/fa';

const DoctorCard = ({ doctor }) => {
    return (
        <Card className="h-100 shadow-sm">
            <Card.Img
                variant="top"
                height="200"
                className="object-fit-cover"
                src="https://images.unsplash.com/photo-1593504614681-82c7646f85f0?w=300&h=300&fit=crop&crop=face"
                alt="Nha sĩ"
            />
            <Card.Body>
                <Card.Title>{doctor.userId?.name || 'Nha sĩ'}</Card.Title>
                <Badge bg="info" className="mb-2">{doctor.specialty}</Badge>
                <div className="mt-2">
                    <FaHospital /> {doctor.hospital || 'Phòng Nha ABC'}
                </div>
                <div className="mt-1">
                    <FaStar /> {doctor.rating || 4.5} ({doctor.reviewsCount || 0} đánh giá)
                </div>
                <div className="mt-1 fw-bold text-primary">
                    <FaClock /> {doctor.fee?.toLocaleString('vi-VN')}đ
                </div>
            </Card.Body>
            <Card.Footer className="pt-2 pb-2">
                <Button as={Link} to={`/book/${doctor._id}`} variant="primary" className="w-100 rounded-pill py-2">
                    Đặt lịch ngay
                </Button>
            </Card.Footer>
        </Card>
    );
};

export default DoctorCard;

