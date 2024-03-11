// import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Buyer from './components/Buyer';
// import Seller from './components/Seller';


function App() {

  if (window.location.pathname === '/buyers') {
    document.title = 'Buyers'
    return <Buyer />
  }
  return (
    <>
    
      {/* <Routes>
        <Route path='/buyers' element={<Buyer/>} />
        <Route path='/sellers' element={<Seller />} />
      </Routes> */}

    <Navbar></Navbar>
    <Home></Home>
    <AboutUs></AboutUs>
    <Services></Services>
    <ContactUs></ContactUs>
    <Footer></Footer>
    </>
  );
}

export default App;
