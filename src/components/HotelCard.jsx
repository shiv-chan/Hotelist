// import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
// import { passedData } from './Home';

export default function HotelCard(props) {
	// const { hotel } = useContext(passedData);
	return (
		<Card className="h-100" style={{ width: '100%' }}>
			<Link to={`/hotel/${props.hotel.id}`}>
				<Card.Img variant="top" src={props.hotel.images[0]} />
				<Card.Body>
					<Card.Title>{props.hotel.name}</Card.Title>
					<Card.Subtitle
						className="font-weight-light"
						style={{ fontSize: '0.8em' }}
					>
						{props.hotel.city}, {props.hotel.country}
					</Card.Subtitle>
				</Card.Body>
			</Link>
		</Card>
	);
}
