
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Main from './views/Main';
import ProductList from './components/ProductList';
import Product from './components/Product';
import NewProduct from './components/NewProduct';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path='/' element={<Main />} default />
          <Route path='/products/:id' element = {<Product />} />
          <Route path='/products' element = {<ProductList />} />
          <Route path='/new' element = {<NewProduct />} />
      </Routes>
    </div>
  );
}

export default App;
