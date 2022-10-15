import * as React from 'react';
import Header from './components/commun/Header'
import ProductList from './components/MainPage/ProductList';


function App() {


  return(
    <div >
      <Header title = 'Mobile Ecommerce'></Header>
      <ProductList></ProductList>
    </div>
  );
}

export default App;
