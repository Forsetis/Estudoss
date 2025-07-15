import React from 'react';
import RemainingTooltip from './RemainingTooltip';
import Button from './Button';
import './Button.css';
class ProductItem extends React.Component {
  render() {
    const { product, validData, onDelete } = this.props;

    return (
      <li>
        {product} — <RemainingTooltip validDate = {validData}/>
        <Button
        typeButton="button"
        labelButton="x"
        onClickButton={onDelete}
        className="button--delete"
        />
        {/* <button className='button' onClick={onDelete}> x </button> */}
      </li>
    );
  }
}

export default ProductItem;