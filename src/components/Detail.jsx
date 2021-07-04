import React, { useContext, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import { allData } from './DataProvider'

import Slider from './Slider'
import HotelDetail from './HotelDetail'
import Checkout from './Checkout'

import { Container, Row, Col } from 'react-bootstrap'

const Detail = () => {
    const { hotelId } = useParams()
    const { setHotel, hotelData } = useContext(allData)

	useEffect(() => {
        if (hotelId !== undefined)
            setHotel(hotelId)
	}, [])

    return hotelData === null ? (
		'loading'
	) : (
        <>
            <Slider />

            <section className="detail-section py-5">
                <Container>
                    <Row>
                        <Col md={8}>
                            <HotelDetail hotel={hotelData} />
                        </Col>
                        <Col md={4}>
                            <Checkout hotel={hotelData} />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Detail