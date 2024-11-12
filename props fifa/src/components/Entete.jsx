import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import foot from './foot.png'
const Entete = () => {
  return (
    <div>
      <Navbar expand="lg"  style={{backdropFilter: 'blur(20px)',position:'fixed',top:'0',width:'100%',zIndex:'1'}}>
      <Container >
        <img style={{width:'5em' , marginLeft:'2em',marginRight:'2em'}} src={foot} alt="img" />
        <Navbar.Brand href="#home">Fifa-App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{marginLeft:'40em',color:'#2c80ad',fontSize:'22px'}}>

            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Games</Nav.Link>
            <NavDropdown title="Level" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Begginer</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Pro
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Pro max</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    </div>
  )
}

export default Entete
