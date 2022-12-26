import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PrimaryLayout from './layouts/PrimaryLayout';
import SecondaryLayout from './layouts/SecondaryLayout';
import AboutUsPage from './pages/homepage/aboutUsPage';
import HomePage from './pages/homepage/homePage';
import OurProductsPage from './pages/homepage/ourProductsPage';
import ProducDetailPage from './pages/homepage/ProductDetailPage';
import LoginPage from './pages/login/loginPage';
import RegisterPage from './pages/login/registerPage';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrimaryLayout/>}>
            <Route index element={<HomePage/>}/>
            <Route path="/about" element={<AboutUsPage/>}/>
            <Route path="/products" element={<OurProductsPage/>}>
              <Route path="/products/id" element={<ProducDetailPage />} />
            </Route>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
          </Route>
          <Route path="/dashboard" element={<SecondaryLayout/>}>

          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
