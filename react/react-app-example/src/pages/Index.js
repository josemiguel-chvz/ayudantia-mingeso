import { Col, Container, Row } from "react-bootstrap";
import logo from '../logo.svg';

const Index = () => {
    return (
        <Container style={{display: 'flex', justifyContent: 'center', marginTop: '70px'}}>
            <Row>
                <Col lg="12" sm="4" className="mt-4">
                    <h3 className="text-center">Hola mundo!</h3>
                </Col>
                <Col lg="12" sm="8">
                    <img src={logo} className="App-logo" alt="logo" />
                </Col>
            </Row>
        </Container>
    )
};

export default Index;