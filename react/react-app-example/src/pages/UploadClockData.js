import axios from "axios";
import { useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";

const UploadClockData = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleUpload = (e) => {
        e.preventDefault();

        let url = 'http://localhost:8080/schedules/files/clocks/upload';
        let form_data = new FormData();
        form_data.append("file", selectedFile);

        axios.post(url, form_data)
        .then( (response) => {
            console.log(response);
        })
        .catch((err) => {
            alert(err.response.data);
        })
    }

    return (
        <Container style={{display: 'flex', justifyContent: 'center', marginTop: '70px'}}>
            <Row className="mt-4">
                <Col col="12">
                    <Form onSubmit={handleUpload}>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Archivo data.txt</Form.Label>
                            <Form.Control type="file" size="lg" required onChange={(e) => setSelectedFile(e.target.files[0])} />
                        </Form.Group>
                        <Button type="submit">Upload</Button>
                    </Form>
                </Col>
            </Row>

        </Container>
    )
};

export default UploadClockData;