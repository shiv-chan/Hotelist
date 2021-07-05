import React from 'react'

import { IconContext } from "react-icons"
import { FaStar } from 'react-icons/fa'

const HotelDetail = (props) => {
    return (
        <>
            <div className="info-top-container">
                <h1 className="mb-0">{props.hotel[0].name}</h1>
                <p className="mb-0">{props.hotel[0].city}, {props.hotel[0].country}</p>
            </div>
            <div className="rating-container mb-3">
                {[...Array(5)].map((star, index) => {
                    const iconColor = props.hotel[0].stars >= index ? '#FFD700' : 'rgba(0, 0, 0, .125)'

                    return (
                        <IconContext.Provider value={{ color: iconColor }}>
                            <FaStar key={index} />
                        </IconContext.Provider>
                    )
                })}
            </div>
            <p>{props.hotel[0].description}</p>
            <p className="font-weight-bold mb-0">rating: {props.hotel[0].rating.toFixed(2)}</p>
        </>
    )
}

export default HotelDetail