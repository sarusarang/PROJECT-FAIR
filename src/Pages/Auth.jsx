import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { toast, ToastContainer } from 'react-toastify';
import { register } from '../Services/Allapi';
import { useNavigate } from 'react-router-dom';
import { userlogin } from '../Services/Allapi';


function Auth() {


    const navigate = useNavigate()
    

    const [status, setStatus] = useState(true)

    const [data, setdata] = useState({

        username: "", password: "", email: ""

    })

    const changeStatus = () => {
        setStatus(!status)
    }

    const handleRegister = async () => {

        const { username, password, email } = data

        if (!username || !password || !email) {

            toast.warning("Please Fill the Form Correctly")

        } else {

            const res = await register(data)

            if (res.status >= 200 && res.status < 300) {

                toast.success("success")
                setStatus(true)

            } else {

                toast.error(res.data)
            }

        }

    }

    const handlelogin = async () => {

        const { email, password } = data

        if (!email || !password) {

            toast.warning("Invaild Details...!!")
        }
        else {

            const results = await userlogin({ email, password })

            sessionStorage.setItem("token", results.data.token)
            sessionStorage.setItem("username", results.data.user)
            toast.success("Login Successfull...")

            setTimeout(() => {

                navigate('/')

            }, 1000);

        }

    }

    return (
        <>
            <div className='d-flex justify-content-center align-items-center w-100' style={{ height: '100vh' }}>

                <div className='shadow border w-50 p-4'>
                
                    <Row>
                        <Col sm={12} md={6}>

                            <img className='img-fluid' src="https://cdni.iconscout.com/illustration/premium/thumb/biometric-security-4916162-4092822.png" alt="" />
                        </Col>
                        <Col sm={12} md={6}>

                            {
                                status ?
                                    <h3 >Login</h3>
                                    :
                                    <h3>Register</h3>
                            }

                            <div className='mt-4'>
                                {
                                    !status &&
                                    <FloatingLabel onChange={(e) => { setdata({ ...data, username: e.target.value }) }} className='mb-3' controlId="user" label="Username">

                                        <Form.Control type="text" placeholder="username" />

                                    </FloatingLabel>

                                }
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Email address"
                                    className="mb-3"
                                >
                                    <Form.Control type="email" onChange={(e) => { setdata({ ...data, email: e.target.value }) }} placeholder="name@example.com" />

                                </FloatingLabel>

                                <FloatingLabel controlId="floatingPassword" label="Password">

                                    <Form.Control type="password" onChange={(e) => { setdata({ ...data, password: e.target.value }) }} placeholder="Password" />

                                </FloatingLabel>
                            </div>
                            <div className='mt-3 d-flex justify-content-between'>


                                {
                                    status ?

                                        <button className='btn rounded' style={{ backgroundColor: '#18898d', color: 'white' }} onClick={handlelogin} >Login </button>

                                        :
                                        <button className='btn rounded' style={{ backgroundColor: '#18898d', color: 'white' }} onClick={handleRegister} >Register </button>
                                }

                                <button className='btn btn-link' style={{ color: '#18898d' }} onClick={changeStatus} >
                                    {
                                        status ?
                                            <span><b>Are You New?</b></span>
                                            :
                                            <span><b>Already A User?</b></span>
                                    }
                                </button>
                            </div>
                        </Col>
                    </Row>
                </div>

            </div>

            <ToastContainer />

        </>
    )
}

export default Auth