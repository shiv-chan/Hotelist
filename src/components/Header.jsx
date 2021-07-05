import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/all';

export default function Header() {
	return (
		<Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
			<Container className="justify-content-between" fluid>
				<Navbar.Brand className="font-italic"><Link to="/">Hotelist</Link></Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse
					id="responsive-navbar-nav"
					className="justify-content-between flex-grow-1"
				>
					<Nav className="align-self-center">
						<Nav.Link>Places to Stay</Nav.Link>
						<Nav.Link>Experiences</Nav.Link>
						<Nav.Link>Online Experiences</Nav.Link>
					</Nav>
					<Nav>
						<FaRegUserCircle style={{ width: '30px', height: '30px' }} />
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
