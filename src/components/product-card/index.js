import './product-card.css';
import {Component} from 'react';

export default class ProductCard extends Component {
	render() {
		const {itemData} = this.props;

		return (
			<div key={itemData.id} className="product-card">
				<div className="product-card--image">
					<img className="product-card--image-rounded" src={itemData.image} alt='img'/>
				</div>
				<div className="product-card--description">
					{itemData.descr}
				</div>
				<div className="product-card--separator"/>
				<div className="product-card--title">
					{itemData.title}
				</div>
				<div className="product-card--price">
					${itemData.price}
				</div>
			</div>
		);
	}
}