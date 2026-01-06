import Navbar from './Components/Pages/Navbar'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Login from './Components/Auth/Login'
import Auth from './Components/Auth/Auth'
import Register from './Components/Auth/Register'
import Home from './Components/Pages/Home'
import ClimateReport from './Components/Pages/ClimateReport'
import SplashScreen from './Components/Pages/SplashScreen'
import ProductPage from './Components/Products/Product'
import Footer from './Components/Pages/Footer'
import ProductDetail from './Components/Products/ProductDetails'
import Mandi from './Components/Pages/Mandi'
import Setting from './Components/Pages/Settings'

function Layout() {
  const location = useLocation();

  // Hide navbar on auth pages
  const hideNavbar =
    location.pathname === "/auth" ||
    location.pathname === "/login" ||
    location.pathname === "/register";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>

        <Route path="/" element={<SplashScreen />} />
        <Route path="/home" element={<Home />} />
        <Route path="/climate" element={<ClimateReport />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/mandi" element={<Mandi />} />
        <Route path="/settings" element={<Setting />} />
      </Routes>
   {!hideNavbar && <Footer />}

    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
