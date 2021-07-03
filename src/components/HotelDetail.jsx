import React from 'react'

import { FaStar } from 'react-icons/fa'

const HotelDetail = () => {
    return (
        <>
            <h1>Hotel name</h1>
            <div className="rating-container">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita accusamus aliquam quae totam voluptates doloremque quisquam ratione nemo magnam fugiat animi eaque laudantium, omnis, deleniti deserunt? Totam, ad. Illo, at.</p>
        </>
    )
}

export default HotelDetail