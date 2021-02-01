import './log-in.css';
import { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

export default class LogIn extends Component {

	render() {
		return (
			<div className='login-container'>
				<div className='header-4'>
					Log In
				</div>
				<div>
					<Form.Control type="email" className='input-field' placeholder="Email address" />
					<Form.Control type="email" className='input-field' placeholder="Password" />
				</div>
				<div className='login-button-container'>
					<Button variant="outline-dark" className='login-button'>Log in</Button>
				</div>
			</div>
		);
	}
}
