import { fetchOneDevice } from 'http/deviceAPI';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Image, Row, Stack } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import bigStar from '../assets/bigStar.png';

const DevicePage = () => {
    const [device, setDevice] = useState({ info: [] })
    const { id } = useParams()

    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    return (
        <Container className='mt-3'>
            <Stack direction='horizontal'>
                <Col md={4} className="ms-1">
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img} />
                </Col>
                <Col md={4}>
                    <Stack className="align-items-center">
                        <h2>{device.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{ background: `url(${bigStar}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64 }}
                        >
                            {device.rating}
                        </div>
                    </Stack>
                </Col>
                <Stack direction="horizontal" className="justify-content-center ms-4">
                    <Col md={4}>
                        <Card
                            className="d-flex flex-column align-items-center justify-content-around"
                            style={{ width: 300, height: 300, fontSize: 32, border: "5px solid lightgray" }}
                        >
                            <h3>От: {device.price} руб.</h3>
                            <Button variant={"outline-dark"}>Добавить в корзину</Button>
                        </Card>
                    </Col>
                </Stack>
            </Stack>
            <Stack className="m-3">
                <h1>Характеристики</h1>
                {device.info.map((info, index) =>
                    <Row key={info.id} style={{ background: index % 2 === 0 ? "lightgrey" : "transparent", padding: 10 }}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Stack>
        </Container>
    );
};

export default DevicePage;