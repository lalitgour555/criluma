import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Product from './Product';
import Offer from './Offer';
import Aboutus from './Component/Aboutus';
import Incoming from './Incoming';
import CrilumyDestination from './CrilumyDestination';
import CrilumyPicture from './CrilumyPicture';
import CrilumyFriends from './CrilumyFriends';
import Wedding from './Wedding';
import Contact from './Contact'
import CrilumyProduct from './CrilumyProduct';
import IncomingNav from './IncomingNav';
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
