import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Homepage'
import About from './components/pages/about'
import Contact from './components/pages/contact'
import Portfolio from './components/pages/portfolio'
import Navbar from './components/pages/navbar'
import Footer from './components/pages/footer'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App