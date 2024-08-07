import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from './AnimatedButton';
import '../assets/styles/text-animation.css';
import { NavLink, useNavigate, useNavigation } from 'react-router-dom';
import Login from '../screens/Login';
import { useState } from 'react';

export default function NavBar(props) {
  return (
    <Navbar expand="lg" sticky='top' style={{backgroundColor:'#141a22'}}>
      <Container >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {props.items.map(item=><NavLink key={item.id} to={item.to} className='animate-text' data-text={item.text}>{item.text}</NavLink>)}
          </Nav>
          <Button name="Login" classes='outline fill-color' to="/login"></Button>
          <NavDropdown.Divider />
          <Button name="SignUp"classes='filled fill-color' to='/signup'/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}