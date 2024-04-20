import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Profile() {
    return (
        <>
            <div className='p-5 border shadow border-3 mm-3'>
                <div className='d-flex justify-content-between'>
                    <h4>Profile</h4>
                    <button className='btn'>
                        <i className="fa-solid fa-check" style={{ color: '#63E6BE' }} />

                    </button>

                </div>
                <div>
                    <label htmlFor="in">
                        <input type="file" name="" id="in" style={{ display: 'none' }} />
                        <img className='img-fluid' style={{ width: '200px' }} src="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="" />
                    </label>
                    <FloatingLabel className='mb-3' controlId="username" label="Username" >
                        <Form.Control type="text" placeholder="Username" />
                    </FloatingLabel>
                    <FloatingLabel className='mb-3' controlId="overviewinp" label="OverView">
                        <Form.Control type="text" placeholder="Brief about Project" />
                    </FloatingLabel>
                    <FloatingLabel className='mb-3' controlId="git" label="GitLink">
                        <Form.Control type="text" placeholder="Git Account Url" />
                    </FloatingLabel>
                    <FloatingLabel className='mb-3' controlId="Linkedin" label="Linkedin Url">
                        <Form.Control type="text" placeholder="Linkedin Url" />
                    </FloatingLabel>

                </div>

            </div>

        </>
    )
}

export default Profile