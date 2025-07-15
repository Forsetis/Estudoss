import React from 'react';
import InputProducts from './InputProducts';
import Button from './Button';

class ProductForm extends React.Component {
  render() {
    const { product, validData, onChangeInput, onSubmitForm } = this.props;

    return (
      <form onSubmit={onSubmitForm}>
        <InputProducts
          inputLabel="Produto"
          inputType="text"
          inputName="product"
          inputValue={product}
          onChangeInput={onChangeInput}
          isRequired={true}
        />
        <InputProducts
          inputLabel="Validade"
          inputType="date"
          inputName="validData"
          inputValue={validData}
          onChangeInput={onChangeInput}
          isRequired={true}
        />
        <Button
          typeButton="submit"
          labelButton="Cadastrar"
        />
      </form>
    );
  }
}

export default ProductForm;