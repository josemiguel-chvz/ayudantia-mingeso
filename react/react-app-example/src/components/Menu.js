import { Nav, Navbar, Container } from 'react-bootstrap';

const Menu = () => {
    return (
        <Navbar bg="dark" variant="dark" fixed="top" >
            <Container>
                <Navbar.Brand href="/">App Empleados</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar"/>
                    <Navbar.Collapse id="responsive-navbar">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Inicio</Nav.Link>
                            <Nav.Link href="/employees">Empleados</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default Menu;