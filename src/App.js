import * as React from 'react';
import Header from './components/commun/Header'
import ProductList from './components/Product/List/ProductList';
import { Routes, Route } from "react-router-dom";
import ProductDetail from './components/Product/Details/ProductDetail';

function App() {
  const headTitle = 'Mobile Ecommerce';
  return(
    <>
      <Header title = {headTitle}></Header>
      <Routes>
        <Route path="/" element={ <ProductList /> } />
        <Route path="products/:productId" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;
