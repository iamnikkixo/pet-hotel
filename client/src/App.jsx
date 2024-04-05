import dotenv from 'dotenv';
import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NewClientsPage from './pages/NewClientsPage';
import ServicesPage from './pages/ServicesPage';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/newclients" element={<NewClientsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
