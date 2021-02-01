import './product.css';
import { Component } from 'react';

export default class Product extends Component {
	componentDidMount(){
		console.log(this.props.match.params.id);
	}
	render() {
		return (
			<div className='product-container'>
				<div className='product-image'>

					<div className='product-image-ribbon'>
						
					</div>
				</div>
				<div className='product-details'>
					<div className='product-title'>

					</div>
					<div className='product-description'>
						
					</div>
					<div className='product-purchase'>
						<div className='product-purchase-price'>

						</div>
						<div className='product-purchase-add-to-cart'>

						</div>
					</div>
				</div>
			</div>
		);
	}
}
