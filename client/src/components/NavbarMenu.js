import {  Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import logoIcon from '../../assets/logo.svg'

const NavbarMenu = () => {
    return (
        <Navbar bg="primary" expand="lg" className='shadow' variant='dark'>
            <Navbar.Brand as={Link} to='/' className='font-weight-bolder text-white'>
                {/* <img src={logoIcon} alt="logoLearnIt"
                    width='32' height='32' className='mr-2'
                /> */}
                MQTT</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/" className='font-weight-bolder text-white'>
                        Dashboard
                    </Nav.Link>
                    <Nav.Link as={Link} to="/about" className='font-weight-bolder text-white'>
                        About
                    </Nav.Link>
                </Nav>
                <Nav >
                    <Nav.Link className='font-weight-bolder text-white' disabled>
                        Welcome Client
                    </Nav.Link>
                </Nav>


            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavbarMenu