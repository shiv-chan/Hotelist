import React, { useContext } from 'react';
import { allData } from './DataProvider';

import Hero from './Hero';
import HotelCard from './HotelCard';
import { Row, Col } from 'react-bootstrap';

// const allData = React.createContext();
// const passedData = React.createContext();

// filter hotels by stars
function filterByStars(stars, arr) {
	return arr.filter((item) => item.stars === stars);
}

export default function Home() {
    const { data } = useContext(allData);

	// const [data, setData] = useState(null);
	// console.log(`🚀 ~ Home ~ data`, data);

	// // fetch fake-hotel api
	// const fetchHotel = async () => {
	// 	return (
	// 		await fetch('http://fake-hotel-api.herokuapp.com/api/hotels')
	// 	).json();
	// };

	// // set data
	// const setAllData = async () => {
	// 	try {
	// 		const responseGalleryTitle = await fetch(
	// 		  "http://fake-hotel-api.herokuapp.com/api/hotels"
	// 		);

	// 		if (responseGalleryTitle.status !== 200)
	// 		  throw Error(`Oops, error! Error code: ${responseGalleryTitle.status}`);
	  
	// 		const galleryTitlesData = await responseGalleryTitle.json();

	// 		setData(galleryTitlesData)
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	// useEffect(() => {
	// 	setAllData();
	// 	// console.log('test');
	// }, []);

	// if (data) console.log(filterByStars(5, data).slice(0, 20));

	return data === null ? (
		'loading'
	) : (
		<>
			<Hero />
			<div className="m-5">
				{/* Show Top 20 of 5 stared hotels */}
				<Row>
					{filterByStars(5, data)
						.slice(0, 20)
						.map((hotel) => (
							<Col md={6} lg={3} className="mb-5" key={hotel.id}>
								<HotelCard hotel={hotel} />
							</Col>
						))}
				</Row>
			</div>
		</>
	);
}

// export { allData };
// export { passedData };