import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Navbar/Navbar.css';
import { MdOutlineSpa } from 'react-icons/md';

const ColorSchemesExample = () => {
    return (
        <div className='Navbar'>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container >
                <a href="http://localhost:3000/" className='logo'>
                    MASEUR  <MdOutlineSpa className="navbar-icon" />  SIMONA
                
                </a> 

                    <Nav className='nav'>
                        <Nav.Link href="http://localhost:3000/" className="navlink">Home</Nav.Link>
                        
                        <Nav.Link href="http://localhost:3000/about" className="about">About</Nav.Link>
                        
                        <Nav.Link href="http://localhost:3000/services" className="services">Services</Nav.Link>
                        <Nav.Link href="http://localhost:3000/reservation" className="reservation1">Reservation</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </div>
    )
}


export default ColorSchemesExample;
