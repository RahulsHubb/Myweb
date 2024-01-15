

const SimmerSample = ({ product }) => {
  return (
    <div className="product-card bg-gray-200">
      {/* <img src={product.image} alt={product.title} /> */}
      <div className=" h-48"></div>
      <div className="product-details">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <button className=" bg-gray-100">Add to Cart</button>
      </div>
    </div>
  );
};

export default SimmerSample;