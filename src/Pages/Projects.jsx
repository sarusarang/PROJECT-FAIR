import React from 'react'
import Header from '../Components/Header'
import { Row,Col } from 'react-bootstrap'
import ProjectCarf from '../Components/ProjectCarf'

function Projects() {
  return (
    <>
      <Header status={true} />

      <div className='p-5'>


        <h1>PROJECTS</h1>

        <Row>

          <Col>

          <ProjectCarf/>
          
          
          </Col>


        </Row>

      </div>




    </>
  )
}

export default Projects