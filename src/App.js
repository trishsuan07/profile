// src/App.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import HomePage from './component/HomePage';
import AboutPage from './component/AboutPage';
import SkillsComponent from './component/SkillsComponent';
import UserContact from './component/UserContact';

function App() {
  return (
    <div>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar>

      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsComponent />} />
          <Route path="/contact" element={<UserContact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
