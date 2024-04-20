import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Row, Col } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


function Edit() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <button className='btn me-3' onClick={handleShow}>
                <i class="fa-solid fa-pen-to-square fa-xl"></i>
            </button>



            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Project</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <Row>
                            <Col>
                                <label htmlFor="in">
                                    <input type="file" name="" id="in" style={{ display: 'none' }} />
                                    <img className='img-fluid' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/1200px-Picture_icon_BLACK.svg.png" alt="" />
                                </label>
                            </Col>
                            <Col>
                                <div>
                                    <FloatingLabel controlId="titleinp" label="tittle" className="mb-3">
                                        <Form.Control type="text" placeholder="Project Title" />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="overviewinp" label="Overview" className="mb-3">
                                        <Form.Control type="text" placeholder="Brief about Project" />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="langinp" label="Languges" className="mb-3">
                                        <Form.Control type="text" placeholder="Languges used" />
                                    </FloatingLabel>




                                </div>
                            </Col>
                            <FloatingLabel controlId="githubinp" label="GitHub Url" className="mb-3">
                                <Form.Control type="text" placeholder="GitHub Urlt" />
                            </FloatingLabel>
                            <FloatingLabel controlId="demoinp" label="Demo Url" className="mb-3">
                                <Form.Control type="text" placeholder="Demo Url " />
                            </FloatingLabel>
                        </Row>
                    </div>




                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" className='bg-success'>Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Edit