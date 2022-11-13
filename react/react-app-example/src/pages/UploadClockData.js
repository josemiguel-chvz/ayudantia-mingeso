import axios from "axios";
import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const UploadClockData = () => {

    const [selectedFile, setSelectedFile] = useState(null);

    const handleUpload = (e) => {
        e.preventDefault();

        let url = 'http://localhost:8080/schedules/files/clocks/upload';
        let form_data = new FormData();
        form_data.append("file", selectedFile);

        axios.post(url, form_data)
        .then((response) => {
            alert(response.data);
        })
        .catch((err) => {
            alert(err.response.data);
        })


    }

    return (
        <Container stye={{display: 'flex', justifyContent: 'center', marginTop: '90px'}}>
            <Row className="mt-5">
                <Col sm="8">
                    <Form onSubmit={handleUpload}  className="mt-5">
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Subir Archivo</Form.Label>
                            <Form.Control
                                type="file"
                                size="lg"
                                required
                                onChange={(e) => setSelectedFile(e.target.files[0])}
                            />
                        </Form.Group>
                        <Button type="submit">Subir</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
};

export default UploadClockData;