import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Row, Col } from 'react-bootstrap'
import base_url from '../Services/BaseUrl';

function ProjectCarf({ item }) {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    

    return (


        <>


            <Card style={{ width: '18rem', backgroundColor: '#1d1d1d', border: '1px solid #fff' }}>
                <Card.Img onClick={handleShow} variant="top" src={item.image? `${base_url}/uploads/${item.image}`: "https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg"} />

                <Card.Body>

                    <Card.Title>{item.title}</Card.Title>

                </Card.Body>
            </Card>







            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{item.title}</Modal.Title>
                </Modal.Header>


                <Modal.Body>


                    <Row>

                        <Col>

                            <img src={item.image ? `${base_url}/uploads/${item.image}` : "https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg" } className='img-fluid' alt="" />


                        </Col>

                        <Col>

                            <h4>{item.title}</h4>
                            <p>{item.overview}</p>
                            <h6>{item.languages}</h6>

                            <div className='mt-3 p-3 d-flex justify-content-between'>

                                <a href="">
                                    <i className="fa-brands fa-github fa-xl"></i>

                                </a>



                                <a href=""> <i className="fa-solid fa-link fa-xl"></i></a>

                            </div>




                        </Col>


                    </Row>


                </Modal.Body>


                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Save</Button>
                </Modal.Footer>


            </Modal >



        </>


    )

}

export default ProjectCarf