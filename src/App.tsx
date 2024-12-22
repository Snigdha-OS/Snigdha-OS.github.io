import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { DownloadPage } from './pages/Download';
import { Donors } from './pages/Donors';
import { Maintainers } from './pages/Maintainers';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="/donors" element={<Donors />} />
          <Route path="/maintainers" element={<Maintainers />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;