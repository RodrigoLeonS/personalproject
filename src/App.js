import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ProtectedRoute from './context/AuthContext';
import PrimaryLayout from './layouts/PrimaryLayout';
import SecondaryLayout from './layouts/SecondaryLayout';
import DashBoardPage from './pages/dashboardPage';
import AboutUsPage from './pages/homepage/aboutUsPage';
import HomePage from './pages/homepage/homePage';
import OurProductsPage from './pages/homepage/ourProductsPage';
import ProducDetailPage from './pages/homepage/ProductDetailPage';
import LoginPage from './pages/login/loginPage';
import RegisterPage from './pages/login/registerPage';
import Apptest from './pages/login/testpage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrimaryLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/products">
            <Route path=":id" element={<ProducDetailPage />} />
            <Route index element={<OurProductsPage />}/>
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Route>
        <Route path="/dashboard" element={<SecondaryLayout />}>
          <Route index element={<ProtectedRoute><DashBoardPage/></ProtectedRoute>}/>
        </Route>
        <Route path="/test" element={<Apptest/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
