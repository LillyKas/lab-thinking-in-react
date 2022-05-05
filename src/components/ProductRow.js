

const ProductRow = (props) => {
  const products = props.products;

  const style = {
    color: 'red',
  };


  const filtered = products.filter((product) => {
    if (props.queryCheck) {
      return (
        product.name.toLowerCase().includes(props.query.toLowerCase()) &&
        product.inStock === props.queryCheck
      );
    } else {
      return product.name.toLowerCase().includes(props.query.toLowerCase());
    }
  });

  return filtered.map((product) => {
    return (
      <tbody>
        <tr>
          {product.inStock ? (
            <td>{product.name}</td>
          ) : (
            <td style={style}>{product.name}</td>
          )}
          <td>{product.price}</td>
        </tr>
      </tbody>
    );
  });
};

export default ProductRow;
