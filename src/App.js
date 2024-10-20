import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './component/HomePage';
import AboutPage from './component/AboutPage';
import SkillsComponent from './component/SkillsComponent';
import UserContact from './component/UserContact';
import Submission from './component/Submission';
import { Container, Nav, Navbar } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">My Profile</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">HomePage</Nav.Link>
          <Nav.Link href="/about">AboutPage</Nav.Link>
          <Nav.Link href="/skills">SkillsComponent</Nav.Link>
          <Nav.Link href="/contact">UserContact</Nav.Link>
        </Nav>
      </Navbar>
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsComponent />} />
          <Route path="/contact" element={<UserContact />} />
          <Route path="/success" element={<Submission />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;