import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Header from '../Components/Header'
import Add from '../Components/Add'
import Edit from '../Components/Edit'
import Profile from '../Components/Profile'
import { userprojects } from '../Services/Allapi'


function Dashboard() {

  const [user,setuser]=useState("")
  const [projects,setprojects]=useState([])


  useEffect(()=>{


    setuser(sessionStorage.getItem("username"))
    getdata()


  },[])


  const getdata =async()=>{

    const header ={"Authorization": `Bearer ${sessionStorage.getItem('token')}`}
    const result = await userprojects(header)

    if(result.status == 200){

      setprojects(result.data)

    }
    else{

      console.log(result.response.data);


    }

  }


  return (


    <>
      <Header />
      <div>
        <Row>

          <Col sm={12} md={8} className='p-3'>

            <h3>Your Projects</h3>


            <div className='border border-3 p-4'>

              <Add />

              <div className='d-flex justify-content-between border shadow mb-3 p-3 rounded'>

                <h4>Project Title 1</h4>

                <div>

                  <a href="" className='btn me-3'> <i className='fa-brands fa-github fa-2xl'></i></a>

                  <Edit />

                  <button className='btn me-3'>

                    <i className='fa-solid fa-trash fa-2xl' style={{ color: '#e1141e' }}></i>

                  </button>


                </div>

              </div>



            </div>

          </Col>

          <Col sm={12} md={4}>

            <Profile />

          </Col>

        </Row>


      </div>






    </>



  )
}



export default Dashboard