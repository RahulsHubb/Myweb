import React from 'react'
import SimmerSample from './SimmerSample';

const SimmerUi = () => {
  const products = [
    // Sample product data
    {
      id: 1,
      title: 'Product 1',
      description: 'Description for Product 1',
      price: 19.99,
      image: 'https://example.com/product1.jpg',
    }, {
      id: 2,
      title: 'Product 1',
      description: 'Description for Product 1',
      price: 19.99,
      image: 'https://example.com/product1.jpg',
    }, {
      id: 3,
      title: 'Product 1',
      description: 'Description for Product 1',
      price: 19.99,
      image: 'https://example.com/product1.jpg',
    }, {
      id: 4,
      title: 'Product 1',
      description: 'Description for Product 1',
      price: 19.99,
      image: 'https://example.com/product1.jpg',
    }, {
      id: 5,
      title: 'Product 1',
      description: 'Description for Product 1',
      price: 19.99,
      image: 'https://example.com/product1.jpg',
    }, {
      id: 6,
      title: 'Product 1',
      description: 'Description for Product 1',
      price: 19.99,
      image: 'https://example.com/product1.jpg',
    }, {
      id: 7,
      title: 'Product 1',
      description: 'Description for Product 1',
      price: 19.99,
      image: 'https://example.com/product1.jpg',
    }, {
      id: 8,
      title: 'Product 1',
      description: 'Description for Product 1',
      price: 19.99,
      image: 'https://example.com/product1.jpg',
    }, {
      id: 9,
      title: 'Product 1',
      description: 'Description for Product 1',
      price: 19.99,
      image: 'https://example.com/product1.jpg',
    },
    // Add more products as needed
  ];
  return (
      <div className="product-container flex mx-2 ">
        {products.map((product) => (
          
          <SimmerSample key={product.id} product={product} />
        ))}
      </div>
  )
}

export default SimmerUi