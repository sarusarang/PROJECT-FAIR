import React from 'react'
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Row, Col } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { toast, ToastContainer } from 'react-toastify';




function Add() {


    const [show, setShow] = useState(false);
    const [perview, setperview] = useState("")

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [projectdata, setprojectdata] = useState({

        title: "", overview: "", language: "", github: "", demo: "", projectImage: ""

    })

    const [imagestatus, setimagestatus] = useState(false)

    useEffect(() => {

        if (projectdata.projectImage.type == "image/jpg" || projectdata.projectImage.type == "image/jpeg" || projectdata.projectImage.type == "image/png") {

            setimagestatus(false)
            setperview(URL.createObjectURL(projectdata.projectImage))
        }
        else {

            setimagestatus(true)
            setperview("")
        }

    }, [projectdata.projectImage])


    const addproject = async () => {

        const { title, overview, language, github, demo, projectImage } = projectdata

        if (!title || !overview || !language || !github || !demo || !projectImage) {

            toast.error("Empty Fields..!!")
        }
        else {

            const formdata = new FormData()

            formdata.append("title", title)
            formdata.append("overview", overview)
            formdata.append("language", language)
            formdata.append("github", github)
            formdata.append("demo", demo)
            formdata.append("image", projectImage)

            const token = sessionStorage.getItem("token")

            const reqheader = {

                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${token}`

            }

            const res = await addprojects(formdata, reqheader)

            if (res.status == 200) {

                toast.success("Project Added Succesfully")

                setprojectdata({
                    title: "", overview: "", language: "", github: "", demo: "", projectImage: ""

                })

                handleClose()

            }
            else {

                toast.error(res.response.data)
            }


        }

    }



    return (
        <>
            <button className='btn btn-info mb-4 p-2' onClick={handleShow} style={{ backgroundColor: ' #3cb993' }}>
                Add Project

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
                                <label >
                                    <input type="file" name="" onChange={(e) => { setprojectdata({ ...projectdata, projectImage: e.target.files[0] }) }} style={{ display: 'none' }} />
                                    <img className='img-fluid' src={perview ? perview : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/1200px-Picture_icon_BLACK.svg.png"} alt="" />

                                    {
                                        imagestatus &&

                                        <p className='text-danger'>Invaild Image Format..!!</p>
                                    }


                                </label>
                            </Col>
                            <Col>
                                <div>
                                    <FloatingLabel controlId="titleinp" label="tittle" className="mb-3">
                                        <Form.Control type="text" onChange={e => { setprojectdata({ ...projectdata, title: e.target.value }) }} placeholder="Project Title" />
                                    </FloatingLabel>


                                    <FloatingLabel controlId="overviewinp" label="Overview" className="mb-3">
                                        <Form.Control type="text" onChange={e => { setprojectdata({ ...projectdata, overview: e.target.value }) }} placeholder="Brief about Project" />
                                    </FloatingLabel>


                                    <FloatingLabel controlId="langinp" label="Languges" className="mb-3">
                                        <Form.Control type="text" onChange={e => { setprojectdata({ ...projectdata, language: e.target.value }) }} placeholder="Languges used" />
                                    </FloatingLabel>




                                </div>
                            </Col>

                            <FloatingLabel controlId="githubinp" label="GitHub Url" className="mb-3">
                                <Form.Control onChange={e => { setprojectdata({ ...projectdata, github: e.target.value }) }} type="text" placeholder="GitHub Urlt" />
                            </FloatingLabel>

                            <FloatingLabel controlId="demoinp" label="Demo Url" className="mb-3">
                                <Form.Control onChange={e => { setprojectdata({ ...projectdata, demo: e.target.value }) }} type="text" placeholder="Demo Url " />
                            </FloatingLabel>

                        </Row>
                    </div>




                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" className='bg-success' onClick={addproject}>Save</Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer />
        </>
    )
}

export default Add