import './home.css';
import { Component } from 'react';
import ProductCard from '../../components/product-card';

export default class Home extends Component {
  
  render() {
    const productData = [
      {
        id: 0,
        title: 'Product 0',
        price: 0.99,
        descr: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Circle-icons-image.svg'
      },
      {
        id: 1,
        title: 'Product 1',
        price: 0.99,
        descr: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Circle-icons-image.svg'
      },
      {
        id: 2,
        title: 'Product 2',
        price: 0.99,
        descr: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Circle-icons-image.svg'
      },
      {
        id: 3,
        title: 'Product 3',
        price: 0.99,
        descr: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Circle-icons-image.svg'
      },
      {
        id: 4,
        title: 'Product 4',
        price: 0.99,
        descr: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Circle-icons-image.svg'
      },
      {
        id: 5,
        title: 'Product 5',
        price: 0.99,
        descr: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Circle-icons-image.svg'
      },
    ];

    return (
      <>
        <div className="header-1">
          Featured products
        </div>

        <div className="featured-products">
          {
            productData.map(item => <ProductCard itemData={item} />)
          }
        </div>
      </>
    );
  }
}
