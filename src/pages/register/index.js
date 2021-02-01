import './register.css';
import { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

export default class Register extends Component {

	render() {
		return (
			<div className='register-container'>
				<div className='header-4'>
					Create an account
				</div>
				<div>
					<Form.Control type="text" className='input-field' placeholder="Full Name" />
					<Form.Control type="email" className='input-field' placeholder="Email Address" />
					<Form.Control type="password" className='input-field' placeholder="Password" />
					<Form.Control type="password" className='input-field' placeholder="Repeat password" />
				</div>
				<div className='register-button-container'>
					<Button variant="outline-dark" className='register-button'>Register</Button>
				</div>
			</div>
		);
	}
}
