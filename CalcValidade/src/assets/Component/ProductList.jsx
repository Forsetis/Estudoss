import React from 'react';
import ProductItem from './ProductItem';

class ProductList extends React.Component {
  render() {
    const { products, onDeleteProduct } = this.props;

    return (
      <ul>
        {products.map((item, index) => (
          <ProductItem
            key={index}
            index={index}
            product={item.product}
            validData={item.validData}
            onDelete={() => onDeleteProduct(index)}
          />
        ))}
      </ul>
    );
  }
}

export default ProductList;