import React, { useState, useEffect, useContext } from 'react'
import Header from '../Components/Header'
import { Row, Col } from 'react-bootstrap'
import Add from '../Components/Add'
import Edit from '../Components/Edit'
import Profile from '../Components/Profile'
import { userprojects } from '../Services/Allapi'
import projectCarf from '../Components/ProjectCarf'
import { addProjectResponseContext } from '../Contextapi/ConApi'
import { deleteproject } from '../Services/Allapi'
import { toast } from 'react-toastify'


function Dashboard() {

  const { addProjectResponse, setAddProjectResponse } = useContext(addProjectResponseContext)

  const [user, setUser] = useState("")

  const [projects, setProjects] = useState([])

  useEffect(() => {
    setUser(sessionStorage.getItem("username"))
    getData()

  }, [addProjectResponse])



  const getData = async () => {

    const header = { "Authorization": `Bearer ${sessionStorage.getItem('token')}` }

    const result = await userprojects(header)
    console.log(result);

    if (result.status == 200) {
      setProjects(result.data)
    }
    else {
      console.log(result.response.data);
    }
  }




  const handeldelete =async(_id)=>{

  
    const headers = {


      "Content-Type":"application/json",
      "Authorization": `Bearer ${sessionStorage.getItem('token')}`

    }

    const results =await deleteproject(_id,headers)

    if(results.status==200){

      toast.success("Project Deleted Successfully")
      getData()

    }
    else{

      toast.error(results.response.data)
    }

  }
  



  return (
    <>
      <Header />
      <div>
        <div className='p-5'>
          <h1>Welcome <span className='text-warning'>{user}</span></h1>
        </div>
        <Row>
          <Col sm={12} md={8} className='p-3'>
            <h3 className='ms-5'>Your Projects</h3>
            <Add />

            {
              projects.length > 0 ?
                projects.map(item => (
                  <div className='border border-3 p-4'>
                    <div className='d-flex justify-content-between border shadow mb-3 p-3 rounded'>
                      <h4>{item.title}</h4>
                      <div>
                        <a href={item.github} className='btn me-3'>
                          <i className="fa-brands fa-github fa-2xl" style={{ color: '#18898d' }}></i>
                        </a>
                        <Edit project={item} />

                        <button className='btn me-3' onClick={()=>{handeldelete(item._id)}}>
                          <i class="fa-solid fa-trash fa-xl " style={{ color: 'red' }}></i>
                        </button>
                      </div>
                    </div>

                  </div>

                ))
                :
                <h3 className='text-center'>No Projects Available!!</h3>

            }


          </Col>

          <Col sm={10} md={4} className=' mt-3' >
            <Profile />
          </Col>

        </Row>

      </div>
    </>
  )
}

export default Dashboard