import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Row, Col } from 'react-bootstrap'
import ProjectCarf from '../Components/ProjectCarf'
import { allprojects } from '../Services/Allapi'
import { toast } from 'react-toastify'

function Projects() {


  const [projects, setprojects] = useState([])
  const [logstatus, setlogstatus] = useState(false)

  useEffect(() => {

    if (sessionStorage.getItem("token")) {

      getdata()
      setlogstatus(true)


    } else {

      toast.error("Login First")
    }


  }, [])

  const getdata = async () => {


    const headers = { "Authorization": `Bearer ${sessionStorage.getItem("token")}` }

    const results = await allprojects(headers)

    if (results.status == 200) {

      setprojects(results.data)

    }
    else {

      console.log(results.response.data);

    }

  }

  return (
    <>
      <Header status={true} />

      <div className='p-5'>


        <h1>PROJECTS</h1>

        {

          logstatus ?

            <Row>

              {

                projects.length > 0 ?
                  projects.map(item => (

                    <Col>

                      <ProjectCarf item={item} />

                    </Col>


                  ))
                  :

                  <h1>No projects </h1>
              }




            </Row>

            :

            <h1 className='text-Warning text-center'>Please Login First</h1>


        }


      </div>




    </>
  )
}

export default Projects