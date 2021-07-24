import React from "react";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { connect } from "react-redux"
import { logout } from "../../redux/action"

const Navbarr = ({logout, auth}) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Toffe7a</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          {!auth?<Nav>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">Signup</Nav.Link>
          </Nav>:<Nav>
          <Nav.Link href="/profile">Profile</Nav.Link>
          <Button variant="dark" onClick={()=>logout()}>Logout</Button>
          </Nav>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
const mapDispatchToProps = (dispatch) => ({
  logout : ()=> dispatch(logout())
});

export default connect(null, mapDispatchToProps)(Navbarr);