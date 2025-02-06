import { useEffect } from 'react';
import './App.css';
import { HomePage } from './Components/HomePage/HomePage';
import { CategoriesPage } from './Components/CategoriesPage/CategoriesPage';
import { AllProductsPage } from './Components/AllProductsPage/AllProductsPage';
import { AllSalePage } from './Components/AllSalePage/AllSalePage';
import ProductInformation from './Components/ProductInformation/ProductInformation'
import ShoppingCartPage from './Components/ShoppingCartPage/ShoppingCartPage';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  useEffect(() => {
    document.title = '05_02_9-40';
  }, []);

  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category" element={<CategoriesPage />} />
          <Route path="/allproducts" element={<AllProductsPage />} />
          <Route path="/allsales" element={<AllSalePage />} />
          <Route path="/shippingcart" element={<ShoppingCartPage />} />
          <Route path="*" element={<CategoriesPage />} />
          <Route path="/productinfo" element={<ProductInformation />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
