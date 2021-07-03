import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';
import HotelCard from './HotelCard';
import { Row, Col } from 'react-bootstrap';

const allData = React.createContext();
const passedData = React.createContext();

// filter hotels by stars
function filterByStars(stars, arr) {
	return arr.filter((item) => item.stars === stars);
}

export default function Home() {
	const [data, setData] = useState(null);
	console.log(`🚀 ~ Home ~ data`, data);

	// fetch fake-hotel api
	const fetchHotel = async () => {
		return (
			await fetch('http://fake-hotel-api.herokuapp.com/api/hotels')
		).json();
	};

	// set data
	const setAllData = () => {
		try {
			fetchHotel().then((result) => setData(result));
		} catch (e) {
			console.error(`Failed to fetch Hotel API: ${e}`);
		}
	};

	useEffect(() => {
		setAllData();
	}, []);

	// if (data) console.log(filterByStars(5, data).slice(0, 20));

	return data === null ? (
		'loading'
	) : (
		<allData.Provider value={{ data }}>
			<Header />
			<Hero />
			<div className="m-5">
				{/* Show Top 20 of 5 stared hotels */}
				<Row>
					{filterByStars(5, data)
						.slice(0, 20)
						.map((hotel) => (
							<passedData.Provider value={{ hotel }}>
								<Col md={6} lg={3} className="mb-5" key={hotel.id}>
									<HotelCard />
								</Col>
							</passedData.Provider>
						))}
				</Row>
			</div>
			<Footer />
		</allData.Provider>
	);
}

export { allData };
export { passedData };
