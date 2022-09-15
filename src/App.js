import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './Component/Header';
import Footer from './Component/Footer';
import Home from './Component/Home';
import Product from './Component/Product';
import Offer from './Component/Offer';
import Aboutus from './Component/Aboutus';
import Incoming from './Component/Incoming';
import CrilumyDestination from './Component/CrilumyDestination';
import CrilumyPicture from './Component/CrilumyPicture';
import CrilumyFriends from './Component/CrilumyFriends';
import Wedding from './Component/Wedding';
import Contact from './Component/Contact'
import CrilumyProduct from './Component/CrilumyProduct';
import IncomingNav from './Component/IncomingNav';
// import HomeSlide4Card from './Component/HomeSlide4Card';
function App() {
  return (
    <div className="App">
     
      <Router>
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>} />
      {/* <Route path="/slide4card" element={<HomeSlide4Card/>} /> */}
      <Route path="/i" element={<IncomingNav/>} />
      <Route path="/offer" element={<Offer/>} />
      <Route path="/product" element={<Product/>} />
      <Route path="/about-us" element={<Aboutus/>} />
      <Route path="/crilumydestination" element={<CrilumyDestination/>} />
      <Route path="/crilumyproduct" element={<CrilumyProduct/>} />

      <Route path="/crilumypicture" element={<CrilumyPicture/>} />
      <Route path="/crilumyfriends" element={<CrilumyFriends/>} />
      <Route path="/wedding" element={<Wedding/>} />
      <Route path="/incoming" element={<Incoming/>} />

      <Route path="/contact" element={<Contact/>} />

      </Routes>
      </Router>
      <Footer/> 
    </div>
  );
}

export default App;
