import { useEffect } from 'react';
import './App.css';
import { HomePage } from './Components/HomePage/HomePage';
import { CategoriesPage } from './Components/CategoriesPage/CategoriesPage';
import { AllProductsPage } from './Components/AllProductsPage/AllProductsPage';
import { AllSalePage } from './Components/AllSalePage/AllSalePage';
import ShoppingCartPage  from './Components/ShoppingCartPage/ShoppingCartPage';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { CategoryProductsPage } from './Components/CategoryProductsPage/CategoryProductsPage';
import { ProductInformation}  from './Components/ProductInformation/ProductInformation';

function App() {
  useEffect(() => {
    document.title = '07_02_15-10';
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
          <Route path="/categoryproducts" element={<CategoryProductsPage />} />
          <Route path="/productinfo" element={<ProductInformation />} />
          <Route path="*" element={<CategoriesPage />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
