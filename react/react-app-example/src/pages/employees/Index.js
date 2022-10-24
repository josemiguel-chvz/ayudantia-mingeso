import { Container, Row, Col, Table, Button } from "react-bootstrap";


const Employees = () => {

    return (
        <Container style={{display: 'flex', marginTop: '70px'}}>
            <Row>
                <Col lg="12">
                    <h1>Lista de empleados</h1>
                </Col>
                <Col lg="12" style={{marginTop: '10px'}}>
                    <Button href="/employees/new">+ Nuevo Empleado</Button>
                    <Button style={{float: 'right'}} variant="success" >Descargar Reporte</Button>
                </Col>
                <Col lg="12">
                    <Table striped className="mt-4">
                        <thead>
                            <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Categoria</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {employees.map((employee) => (
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.name}</td>
                                    <td>{employee.category}</td>
                                </tr>
                            ))} */}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default Employees;