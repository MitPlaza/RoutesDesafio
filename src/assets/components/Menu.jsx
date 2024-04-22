import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const Menu = () => {

return(

<Navbar bg="primary" data-bs-theme="dark">
<Container>
  <Navbar.Brand href="#home">Navbar</Navbar.Brand>
  <Nav className="justify-content-end">
  <NavLink className={({ isActive }) => (isActive ? "activo" : "linkend") }
 to="/">Home</NavLink>
 <NavLink className={ ({ isActive }) => (isActive ? "activo" : "linkend") }
 to="/personajes">Personajes</NavLink>
  </Nav>
</Container>
</Navbar>
)

}

export default Menu