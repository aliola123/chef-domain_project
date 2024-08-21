import PropTypes from 'prop-types';

function ProductList({ products }) {
  return (
    <div>
      {products.map(product => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      // Add other product properties here
    })
  ).isRequired,
};

export default ProductList;
