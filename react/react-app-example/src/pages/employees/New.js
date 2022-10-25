import { useState } from "react";
import { Container,Row,Col, Form, Button, InputGroup, Alert } from "react-bootstrap";

const NewEmployee = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [invalidForm, setInvalidForm] = useState(false);

    const handleNewEmployeeForm = (event) => {
        event.preventDefault();
        const form = event.target;
        if (form.checkValidity() === true) {
            let form_data = new FormData(form);
            // let data = Object.fromEntries(form_data.entries());
            // POST -> Create Employee
            setShowAlert(true);
            window.setTimeout(()=>{
                setShowAlert(false);
                setInvalidForm(false);
                form.reset();
            },3000);
        } else{
            event.stopPropagation();
            setInvalidForm(true);
        }
    };


    return (
        <Container style={{display: 'flex', marginTop: '70px'}}>
            <Row>
                <Col lg="12">
                    <h1>Nuevo Empleado</h1>
                </Col>
                <Col>
                    <Form noValidate validated={invalidForm} onSubmit={handleNewEmployeeForm}>
                        <Row>
                            <Form.Group className="mb-3" controlId="identification" >
                                <Form.Label>Rut</Form.Label>
                                <Form.Control
                                    type="input"
                                    placeholder="12345678-2"
                                    name="identification"
                                    required
                                />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Col cols="6">
                                <Form.Group className="mb-3" controlId="first_name">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control
                                        type="input"
                                        placeholder="Juan"
                                        name="first_name"
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col cols="6">
                                <Form.Group className="mb-3" controlId="last_name">
                                    <Form.Label>Apellido</Form.Label>
                                    <Form.Control
                                        type="input"
                                        placeholder="Perez"
                                        name="last_name"
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Form.Group className="mb-3" controlId="entrance_date">
                                <Form.Label>Fecha Ingreso</Form.Label>
                                <Form.Control
                                    type="input"
                                    placeholder="22-01-2022"
                                    name="entrance_date"
                                    required
                                />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group className="mb-3" controlId="base_salary">
                                <Form.Label>Salario Base</Form.Label>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="money-addon">$</InputGroup.Text>
                                    <Form.Control
                                        placeholder="0"
                                        aria-label="Salario"
                                        aria-describedby="money-addon"
                                        type="number"
                                        name="base_salary"
                                        required
                                    />
                                    </InputGroup>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Col cols="6">
                                <Button variant="primary" type="submit">Crear Empleado</Button>
                            </Col>
                            <Col cols="6" >
                                <Button style={{float: 'right'}} variant="secondary" href="/employees">
                                    Volver a lista de empleados
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                    <Alert variant="success" className="mt-4" show={showAlert} >
                        Usuario Creado correctamente
                    </Alert>
                </Col>
            </Row>
        </Container>
    );
};

export default NewEmployee;