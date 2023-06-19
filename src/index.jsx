import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/'
import APropos from './pages/APropos'
import Header from './components/Header'
import Error from './components/Error'
import Footer from './components/Footer'
import Logement from './pages/Logement'
import { createRoot } from 'react-dom/client';

const node = document.getElementById('root');

const root = createRoot(
    node
)
root.render(<React.StrictMode>
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/APropos" element={<APropos />} />
      <Route path="*" element={<Error />} />
      <Route path="/Logement" element={<Logement />} />
    </Routes>
    <Footer/>
  </Router>
</React.StrictMode>)