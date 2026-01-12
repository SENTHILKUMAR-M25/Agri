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
import Products from './Components/Products/Products'
import Profile from './Components/Account/Profile'
import CartSection from './Components/Products/CardSection'
import PaymentMethod from './Components/Pages/Payment'
import MyOrders from './Components/Account/MyOrder'
import AgriServices from './Components/Pages/Sevices'
import ServiceDetail from './Components/Service/ServiceDetail'
import ServiceBooking from './Components/Service/ServiceBooking'
import AddProduct from './Components/Products/AddProduct'
import LandingPage from './Components/Pages/LandingPage'

function Layout() {
  const location = useLocation();

  // Hide navbar on auth pages
  const hideNavbar =
    location.pathname === "/auth" ||
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/landingpage"||
    location.pathname === "/";


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
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/mandi" element={<Mandi />} />
        <Route path="/settings" element={<Setting />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/mycart" element={<CartSection />} />
        <Route path="/payment" element={<PaymentMethod />} />
        <Route path="/myorder" element={<MyOrders />} />
        <Route path="/services" element={<AgriServices />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/services/:id/book" element={<ServiceBooking />} />
        <Route path="/Addproduct" element={<AddProduct />} />
        <Route path="/landingpage" element={<LandingPage />} />
        

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
