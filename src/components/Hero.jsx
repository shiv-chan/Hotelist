import { Container, Button } from 'react-bootstrap';

export default function Hero() {
	return (
		<div
			className="jumbotron-fluid d-flex align-items-center"
			style={{
				marginTop: '55px',
				height: '40vh',
				background:
					"url('https://images.unsplash.com/photo-1501601962015-7f11b4445c43?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80') no-repeat center/cover",
			}}
		>
			<Container className="m-5" style={{ color: 'white' }}>
				<h1>The Greatest Outdoors</h1>
				<p>Wishlists curated by Hotelist.</p>
				<Button variant="dark">Get Inspired</Button>
			</Container>
		</div>
	);
}
