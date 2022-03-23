import './App.css';
import {useState, useEffect} from 'react'

import Header from './components/Header';
import Product from './components/Product';
import products from './products.json'

function App() {

  const [money, setMoney] = useState(100)

  return (
    <>
      <Header money={money}/>
      {products.map(product => (
        <Product product={product}/>
      ))}
    </>
  );
}

export default App;
