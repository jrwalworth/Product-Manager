
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Product from './components/Product';
import NewProduct from './components/NewProduct';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path='/' element={<ProductList />}/>
          <Route path='/product/:id' element = {<Product />} />
          <Route path='/new' element = {<NewProduct />} />
      </Routes>
    </div>
  );
}

export default App;
