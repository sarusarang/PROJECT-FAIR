import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header({ status }) {
  return (
    <>

      <Navbar className="bg-body-tertiary ">
        <Container>
          <Navbar.Brand href="#home">
            <i className="fa-solid fa-snowflake" style={{ color: ' #3cb993' }}></i>
            {' '}
            Project Fair
          </Navbar.Brand>
          <div>

            {
              !status &&

              <button className='btn btn-outline-danger rounded'>
                <i className="fa-solid fa-right-from-bracket fa-lg me-2"></i>
                Logout
              </button>

            }

          </div>
        </Container>
      </Navbar>
    </>
  )
}

export default Header