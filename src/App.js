import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ProductProvider from './Context/ProductProvider';
import About from './Pages/About';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import TopRated from './Pages/TopRated';
import Navbar from './Share/Navbar/Navbar';

function App() {
  return (
    <ProductProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/top-rated' element={<TopRated />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  );
}

export default App;
