import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';
import HotelCard from './HotelCard';
import { Row, Col } from 'react-bootstrap';

export default function Home() {
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
