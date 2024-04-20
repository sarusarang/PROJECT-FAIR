import React,{useState} from 'react'
import { Row, Col } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


function Auth() {
    
   const [status,setStatus]=useState(true)

   const changeStatus=()=>{
    setStatus(!status)
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
                                status?
                                <h3 >Login</h3>
                                :
                                <h3>Register</h3>
                            }
                            
                            <div className='mt-4'>
                                {
                                      !status &&
                                      <FloatingLabel className='mb-3' controlId="user" label="Username">
                                      <Form.Control type="text" placeholder="username" />
                                    </FloatingLabel>
                                      
                                }
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Email address"
                                    className="mb-3"
                                >
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingPassword" label="Password">
                                    <Form.Control type="password" placeholder="Password" />
                                </FloatingLabel>
                            </div>
                            <div className='mt-3 d-flex justify-content-between'>
                                <button className='btn rounded' style={{backgroundColor:'#18898d',color:'white'}} >
                                    {
                                        status?
                                        <span>Login</span>
                                        :
                                        <span>Register</span>
                                    }
                                    </button>
                                <button className='btn btn-link' style={{color:'#18898d'}} onClick={changeStatus} >
                                {
                                        status?
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

        </>
    )
}

export default Auth