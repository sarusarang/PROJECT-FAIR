import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ProjectCarf from '../Components/ProjectCarf'
import Footer from '../Components/Footer'
import { useState, useEffect } from 'react'
import { homeprojects } from '../Services/Allapi'



function Landing() {

  const [projectshome, setprojects] = useState([])

  const [token, settoken] = useState("")

  useEffect(() => {

    settoken(sessionStorage.getItem("token"))

    homepro();

  }, [])


  const homepro = async () => {

    const result = await homeprojects()

    if(result.status==200){

      setprojects(result.data)

    }else{

      console.log(result.response.data);
    }

  }


  return (
    <>

      <div className='w-100 p-5 align-items-center d-flex project-main' style={{ height: '100vh' }}>

        <Row>

          <Col className='align-items-center d-flex'>

            <div>

              <h1 className='display-4 mb-2 text-light'>Project Fair 2024</h1>
              <p style={{ textAlign: 'justify', color: '#fff' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>

              {

                token ?

                  <Link to={"/dash"} class="btn btn-outline-warning w-100">Start To Explore</Link>


                  :

                  <Link to={'/auth'} class="btn btn-outline-warning w-100">Explore</Link>



              }

            </div>


          </Col>

          <Col>

            <img src="https://smartpro.vn/images/programes/768x1024/423247project_mobile.jpg" className='img-fluid' alt="" />

          </Col>

        </Row>

      </div>


      <section style={{ backgroundColor: '#1d1d1d' }}>

        <div className='p-5 w-100'>

          <h1 className='text-center mb-5'>Projects For You</h1>


          <marquee behavior="fast" direction="right">

            <div className='d-flex justify-content-evenly mt-2'>

              {

                projectshome.length > 0 ?

                  projectshome.map(item => (

                    <ProjectCarf item={item} />

                  ))
                  :

                  <h1>no projects</h1>

              }


              
            </div>

          </marquee>

        </div>

        <div className='text-center p-5'>

          <Link to={'/projects'}>Click For More</Link>

        </div>

      </section>

      <Footer />


    </>
  )
}

export default Landing