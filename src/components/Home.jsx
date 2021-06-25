import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';
import HotelCard from './HotelCard';
import { Row, Col } from 'react-bootstrap';

export default function Home() {
	const [data, setData] = useState(null);

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

	console.log(data);

	return (
		<>
			<Header />
			<Hero />
			<div className="m-5">
				<Row>
					{Array.from({ length: 10 }).map((_, idx) => (
						<Col md={6} lg={3} className="mb-5">
							<HotelCard />
						</Col>
					))}
				</Row>
			</div>
			<Footer />
		</>
	);
}
