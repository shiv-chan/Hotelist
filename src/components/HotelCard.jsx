import { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { passedData } from './Home';

export default function HotelCard() {
	const { hotel } = useContext(passedData);
	return (
		<Card style={{ width: '100%' }}>
			<Card.Img variant="top" src={hotel.images[0]} />
			<Card.Body>
				<Card.Title>{hotel.name}</Card.Title>
				<Card.Subtitle
					className="font-weight-light"
					style={{ fontSize: '0.8em' }}
				>
					{hotel.city}, {hotel.country}
				</Card.Subtitle>
			</Card.Body>
		</Card>
	);
}
