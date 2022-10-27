import { useEffect, useState } from "react";
import { Container, Row, Col, Table, Button, Alert } from "react-bootstrap";
import axios from 'axios';

const Employees = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [messageAlert, setMessageAlert] = useState('');
    const [employees, setEmployees] = useState([]);

    const getEmployees = async () => {
        try {
            let url = 'http://localhost:8080/employees/all';
            let response = await axios.get(url);
            if (response.status === 200) {
                setEmployees(response.data);
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    const downloadEmployeesReport = async () => {
        try {
            let url = 'http://localhost:8080/reports/employees';
            let response = await axios.get(url, {responseType: 'blob'});
            let downloadURL = URL.createObjectURL(new Blob([response.data]));
            let download_link = document.createElement("a");
            download_link.href = downloadURL;
            download_link.download = `employee-report.xlsx`;
            document.body.appendChild(download_link);
            download_link.click();
            download_link.remove();
            setShowAlert(false);
            setShowAlert('');
        } catch (error) {
            setShowAlert(true);
            setMessageAlert('No existen empleados suficientes.')
            console.log(error.message);
        }
    };

    useEffect(() => {
        getEmployees();
    }, []);

    return (
        <Container style={{marginTop: '70px'}}>
            <Row>
                <Col>
                    <h1>Lista de empleados</h1>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col lg="3" sm="4">
                    {/* <Button href="/employees/new">+ Nuevo Empleado</Button> */}
                    <Button variant="success" onClick={downloadEmployeesReport}>Descargar Reporte</Button>
                </Col>
                <Col lg="9" sm="8">
                    <Alert variant="danger" style={{width: "100%", height:"40px"}} show={showAlert} >
                        <p style={{marginTop: "-8px"}}>{messageAlert}</p>
                    </Alert>
                </Col>
            </Row>
            <Row>
                <Col cols="12">
                    <Table striped className="mt-4">
                        <thead>
                            <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Fecha de entrada</th>
                            <th>Salario Base</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map((employee) => (
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.first_name}</td>
                                    <td>{employee.last_name}</td>
                                    <td>{employee.entrance_date}</td>
                                    <td>{employee.base_salary}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default Employees;