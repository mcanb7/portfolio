import{BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route element={<Home/>} path='/' exact />
      <Route element={<About/>} path='/about'/>
      <Route element={<Portfolio/>} path='/post' exact />
      <Route element={<Contact/>} path='/contact' exact />
    </Routes>
    <Footer />
  </BrowserRouter> )
}

export default App;
