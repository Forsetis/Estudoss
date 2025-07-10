import React from 'react';
import ProductForm from './assets/Component/ProductForm.JSX';
import ProductList from './assets/Component/ProductList'
import './app.css'

class App extends React.Component {
  constructor() {
    super();
    const savedProducts = JSON.parse(localStorage.getItem('products')) || [];

    this.state = {
      product: '',
      validData: '',
      products: savedProducts,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    const { product, validData, products } = this.state;

    if (product && validData) {
      const newProducts = [...products, { product, validData }];
      this.setState({
        products: newProducts,
        product: '',
        validData: '',
      });
      localStorage.setItem('products', JSON.stringify(newProducts));
    }
  };

  handleDelete = (indexToDelete) => {
    const updatedProducts = this.state.products.filter((_, i) => i !== indexToDelete);
    this.setState({ products: updatedProducts });
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  render() {
    const { product, validData, products } = this.state;

    return (
      <div>
        <h1>Mostrador de validade de produtos</h1>
        <h2>Cadastre produtos com suas datas de validade para monitorar facilmente</h2>

        <ProductList
          products={products}
          onDeleteProduct={this.handleDelete}
        />
        <ProductForm
          product={product}
          validData={validData}
          onChangeInput={this.handleChange}
          onSubmitForm={this.onSubmitForm}
        />

      </div>
    );
  }
}

export default App;