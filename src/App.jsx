import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Login from './Components/Auth/Login'
import Auth from './Components/Auth/Auth'
import Register from './Components/Auth/Register'
import Home from './Components/Pages/Home'
import ClimateReport from './Components/Pages/ClimateReport'
import ProductPage from './Components/Products/Product'

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
        <Route path="/home" element={<Home />} />
        <Route path="/climate" element={<ClimateReport />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
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
