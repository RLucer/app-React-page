
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom'
export const NavBar = () => {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to='/app-React-page/'>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/app-React-page/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/app-React-page/Movie'>Movie</Nav.Link>
          
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}