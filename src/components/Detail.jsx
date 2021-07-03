import React from 'react'

import Slider from './Slider'
import Checkout from './Checkout'

import { Container, Row, Col, Modal, Image, Form, Button } from 'react-bootstrap'

const Detail = () => {
    return (
        <>
            <Slider />

            <section className="detail-section">
                <Container>
                    <Row>
                        <Col>
                        </Col>
                        <Col>
                            <Checkout />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Detail