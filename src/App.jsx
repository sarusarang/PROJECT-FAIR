
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap.min.css'
import {Routes,Route} from 'react-router-dom'
import Landing from './Pages/Landing'
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login'
import Projects from './Pages/Projects'
import Reg from './Pages/Reg'
import Auth from './Pages/Auth'

function App() {

  return (
    <>

    <Routes>

      <Route path='/' element={<Landing/>}></Route>
      <Route path='/dash' element={<Dashboard/>}></Route>
      <Route path='/projects' element={<Projects/>}></Route>
      <Route path='/log' element={<Login/>}></Route>
      <Route path='/reg' element={<Reg/>}></Route>
      <Route path='/auth' element={<Auth/>}></Route>

    </Routes>
      
    </>
  )
}

export default App
