import logo from './logo.svg';
import './App.css';
import Layout from './layout/Layout';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs.js';
import CapacityProfile from './pages/CapacityProfile';
import News from './pages/News';
import Products from './pages/Products';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Navigate to="/homepage" />} />
          <Route path='/homepage' element={<HomePage />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/capacityprofile' element={<CapacityProfile />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/news' element={<News />} />
          <Route path='/products' element={<Products />} />

        </Route>
      </Routes>




    </Router>

  );
}

export default App;
