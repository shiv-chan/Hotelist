import { Card } from 'react-bootstrap';

export default function HotelCard() {
	return (
		<Card style={{ width: '100%' }}>
			<Card.Img
				variant="top"
				src="https://images.unsplash.com/photo-1586611292717-f828b167408c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
			/>
			<Card.Body>
				<Card.Title>Hotel Name</Card.Title>
				<Card.Subtitle
					className="font-weight-light"
					style={{ fontSize: '0.8em' }}
				>
					City, Country
				</Card.Subtitle>
			</Card.Body>
		</Card>
	);
}
