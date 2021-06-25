import { Container, Button, Row, Col } from 'react-bootstrap';

export default function Hero() {
	return (
		<div
			className="jumbotron-fluid d-flex align-items-center"
			style={{ marginTop: '80px', height: '40vh' }}
		>
			<Container className="m-5">
				<h1>The Greatest Outdoors</h1>
				<p>Wishlists curated by Hotelist.</p>
				<Button variant="dark">Get Inspired</Button>
			</Container>
		</div>
	);
}
