
import PropTypes from 'prop-types';
import '../App.css/Product.css'; 

function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product._id} className="product-item">
          <img src={product.image} alt={product.name} className="product-item-image" />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProductList;
