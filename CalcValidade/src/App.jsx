import React from 'react';
import ProductForm from './assets/Component/ProductForm.JSX';
import ProductList from './assets/Component/ProductList'
import ProdutosFiltrados from './assets/Component/Filtrodevalidade/ProdutosFiltrados';
import FiltroValidade from './assets/Component/Filtrodevalidade/FiltroValidade';
import './app.css'

class App extends React.Component {
  filterProducts = () => {
  const { products, filtroValidade } = this.state;
  const hoje = new Date();
  const margemDias = 30;
  const margem = new Date();
  margem.setDate(hoje.getDate() + margemDias);

  return products.filter(produto => {
    const validade = new Date(produto.validData);

    if (filtroValidade === 'vencidos') {
      return validade < hoje;
    }
    if (filtroValidade === 'prestes') {
      return validade >= hoje && validade <= margem;
    }
    if (filtroValidade === 'validos') {
      return validade > margem;
    }

    return true; // 'todos'
  });
};
  constructor() {
    super();
    const savedProducts = JSON.parse(localStorage.getItem('products')) || [];

    this.state = {
      product: '',
      validData: '',
      products: savedProducts,
      filtroValidade:'todos'
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFiltroValidade = (modo) => {
  this.setState({ filtroValidade: modo });
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
    const { product, validData } = this.state;

    return (
      <div>
        <h1>Mostrador de validade de produtos</h1>
        <h2>Cadastre produtos com suas datas de validade para monitorar facilmente</h2>

        <FiltroValidade onChangeFiltro={this.handleFiltroValidade}/>
        <ProductList
          products={this.filterProducts()}
          onDeleteProduct={this.handleDelete}
        />
        {/* <ProdutosFiltrados/> */}
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