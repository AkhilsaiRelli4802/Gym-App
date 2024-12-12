import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Header.css"
import { NavLink } from 'react-router-dom';


function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" fixed='top'>
        <Container className='navContainer'>
            <div>
            <Navbar.Brand to="/Home" style={{color:"red",fontSize:"30px"}}>Sprit Flow</Navbar.Brand>
            </div>
            <div>
          <Nav className="me-auto" >
            <NavLink to="/Home" className="navElements">Home</NavLink>
            <NavLink to="/About" className="navElements">About</NavLink>
            <NavLink to="/Price" className="navElements">pricingPlans</NavLink>
            <NavLink to="/Trainers" className="navElements">Trainers</NavLink>
            <NavLink to="/Contact" className="navElements">ContactUs</NavLink>
          </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;