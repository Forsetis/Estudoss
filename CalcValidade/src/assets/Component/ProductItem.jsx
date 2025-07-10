import React from 'react';
import RemainingTooltip from './RemainingTooltip';

class ProductItem extends React.Component {
  render() {
    const { product, validData, onDelete } = this.props;

    return (
      <li>
        {product} — <RemainingTooltip validDate = {validData}/>
        <button className='button' onClick={onDelete}> x </button>
      </li>
    );
  }
}

export default ProductItem;