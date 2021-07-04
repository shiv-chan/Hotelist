import React, { useState } from 'react'

import { Col, Form, Button } from 'react-bootstrap'
import DatePicker from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css"

const Checkout = (props) => {
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [totalRate, setTotalRate] = useState(0)

    const handleSubmitCalcRate = (e) => {
        e.preventDefault()

        // check if the dates were informed
        if (e.target.checkin.value === '')
            alert('please enter the check-in date')
        else if (e.target.checkout.value === '')
            alert('please enter the checkout date')
        else if (e.target.checkin.value >= e.target.checkout.value)
            alert('please check the dates')
        else {
            const checkInDate = new Date(e.target.checkin.value)
            const checkOutDate = new Date(e.target.checkout.value)
            const diffTime = Math.abs(checkOutDate - checkInDate)
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

            setTotalRate(props.hotel[0].price * diffDays)
        }
    }

    return (
        <div className="checkout-container p-4">
            <h3 className="mb-3"><span className="fw-bold">${props.hotel[0].price}</span> / night</h3>
            <Form onSubmit={handleSubmitCalcRate}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCheckIn">
                        <Form.Label>check-in</Form.Label>
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            selectsStart
                            startDate={startDate}
                            endDate={endDate}
                            placeholderText="check-in date"
                            name="checkin"
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCheckOut">
                        <Form.Label>checkout</Form.Label>
                        <DatePicker
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                            placeholderText="checkout date"
                            name="checkout"
                        />
                    </Form.Group>
                </Form.Row>

                <Button
                    className="mt-3 w-100"
                    type='submit'
                >
                    {totalRate > 0 ? (
                        'update total rate'
                    ) : (
                        'check total rate'
                    )}
                </Button>
            </Form>
            {totalRate > 0 ? (
                <h4 className="mt-3 text-center">your rate is ${totalRate}</h4>
            ) : (
                ''
            )}
        </div>
    )
}

export default Checkout