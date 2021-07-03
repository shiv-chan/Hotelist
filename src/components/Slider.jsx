import React from 'react'

import Carousel from 'react-bootstrap/Carousel'

const Slider = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.trvl-media.com/hotels/1000000/10000/1900/1801/4a428f73.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium"
                    alt="First slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.trvl-media.com/hotels/1000000/10000/1900/1801/44ce7e03.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium"
                    alt="Second slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.trvl-media.com/hotels/1000000/10000/1900/1801/2600fdb7.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default Slider