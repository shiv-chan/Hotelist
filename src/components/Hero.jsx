import { Container, Button } from 'react-bootstrap';

export default function Hero() {
	return (
		<div className="jumbotron-fluid" style={{ marginTop: '80px' }}>
			<Container>
				<h1>The Greatest Outdoors</h1>
				<p>Wishlists curated by Hotelist.</p>
				<Button variant="dark">Get Inspired</Button>
			</Container>
		</div>
	);
}
