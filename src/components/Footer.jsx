import { Container } from 'react-bootstrap';
import { BiCopyright, IoGlobeOutline, BiDollar } from 'react-icons/all';

export default function Footer() {
	return (
		<Container className="bg-light d-flex justify-content-between p-4" fluid>
			<div className="d-flex align-items-center" style={{ gap: 30 }}>
				<div>
					<BiCopyright /> 2021 Hotelist, Inc.
				</div>
				<span>Privacy</span>
				<span>Terms</span>
				<span>Sitemap</span>
			</div>
			<div className="d-flex align-items-center mr-3" style={{ gap: 30 }}>
				<span>
					<IoGlobeOutline />
					English (CA)
				</span>
				<span>
					<BiDollar />
					CAD
				</span>
			</div>
		</Container>
	);
}
