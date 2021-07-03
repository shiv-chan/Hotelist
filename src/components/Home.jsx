import React, { useEffect, useState } from 'react';
import Hero from './Hero';
import HotelCard from './HotelCard';
import { Row, Col } from 'react-bootstrap';

const allData = React.createContext();

export default function Home() {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);

	// filter hotels by stars
	const filterByStars = (stars, array) => {
		// console.log(array);
		return array.filter((item) => item.stars === stars);
	}

	// fetch fake-hotel api
	const fetchHotel = async () => {
		return (
			await fetch('http://fake-hotel-api.herokuapp.com/api/hotels')
		).json();
	};

	// set data
	const setAllData = async () => {
		try {
			// fetch gallery titles ... only get 10 albums with userId 1
			const responseGalleryTitle = await fetch(
			  "http://fake-hotel-api.herokuapp.com/api/hotels"
			);

			if (responseGalleryTitle.status !== 200)
			  throw Error(`Oops, error! Error code: ${responseGalleryTitle.status}`);
	  
			const galleryTitlesData = await responseGalleryTitle.json();

			setData(galleryTitlesData)
			setLoading(false)
		} catch (error) {
			console.log(error);
		}
	  

		// try {
		// 	setLoading(true)
		// 	// fetchHotel().then((result) => setData(result));

		// 	const response = await fetch('https://jsonplaceholder.typicode.com/albums?userId=1')
		// 	const result = await response.json()

		// 	setData(result)
		// 	setLoading(false)
		// } catch (e) {
		// 	console.error(`Failed to fetch Hotel API: ${e}`);
		// }
	};

	useEffect(() => {
		setAllData();
		// console.log('test');
	}, []);

	// console.log(data);

	return (
		<>
			{loading ? '' :
			<>
				<allData.Provider value={{ data }}>
				<Hero />
				<div className="m-5">
					{/* <Row>
						{Array.from({ length: 10 }).map((_, idx) => (
							<Col md={6} lg={3} className="mb-5">
								<HotelCard />
							</Col>
						))}
					</Row> */}

					{/* Show Top 20 of 5 stared hotels */}
					{console.log(data)}
					<Row>
						{filterByStars(5, data)
							.slice(0, 20)
							.map((hotel) => (
								<Col md={6} lg={3} className="mb-5" key={hotel.id}>
									<HotelCard />
								</Col>
							))}
					</Row>
				</div>
				</allData.Provider>
			</>
			}
		</>
	);
}
