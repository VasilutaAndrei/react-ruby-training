import './header.css';
import { Component } from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Header extends Component {
	render() {
		return (
			<Navbar className="navbar" bg="light" expand="lg">
				<Navbar.Brand id="logo" href="#home">Shop.IT</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Link to={'/'}>Home</Link>
					</Nav>
					<div>
						<Link to={'/login'}>
							<Button variant="outline-dark">Log In</Button>
						</Link>{' '}
						<Link to={'/register'}>
							<Button variant="dark">Register</Button>
						</Link>
					</div>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}