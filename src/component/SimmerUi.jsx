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
      id: 1,
      title: 'Product 1',
      description: 'Description for Product 1',
      price: 19.99,
      image: 'https://example.com/product1.jpg',
    }, {
      id: 1,
      title: 'Product 1',
      description: 'Description for Product 1',
      price: 19.99,
      image: 'https://example.com/product1.jpg',
    }, {
      id: 1,
      title: 'Product 1',
      description: 'Description for Product 1',
      price: 19.99,
      image: 'https://example.com/product1.jpg',
    }, {
      id: 1,
      title: 'Product 1',
      description: 'Description for Product 1',
      price: 19.99,
      image: 'https://example.com/product1.jpg',
    }, {
      id: 1,
      title: 'Product 1',
      description: 'Description for Product 1',
      price: 19.99,
      image: 'https://example.com/product1.jpg',
    }, {
      id: 1,
      title: 'Product 1',
      description: 'Description for Product 1',
      price: 19.99,
      image: 'https://example.com/product1.jpg',
    }, {
      id: 1,
      title: 'Product 1',
      description: 'Description for Product 1',
      price: 19.99,
      image: 'https://example.com/product1.jpg',
    }, {
      id: 1,
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