import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from './AnimatedButton';
import '../assets/styles/text-animation.css';

export default function NavBar(props) {
  return (
    <Navbar expand="lg" sticky='top' style={{backgroundColor:'#141a22'}}>
      <Container >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {props.items.map(item=><a key={item.id} href={item.href} className='animate-text' data-text={item.text}>{item.text}</a>)}
          </Nav>
          <Button name="Login" classes='outline fill-color'/>
          <NavDropdown.Divider />
          <Button name="SignUp"classes='filled fill-color'/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}