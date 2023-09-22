import {BrowserRouter as Router, Route,Link ,Routes} from 'react-router-dom'
import './App.css'
import All from './All'


import Fullstack from './Fullstack'
import Datascience from './Datascience'
import Cybersecurity from './Cybersecurity'
import Database from './Database'
 
function App() {
  return (
    <>
    <div className='navbar'>
        <div className='container'>
                 <h4 ClassNme="atla">Atlantic Education</h4>
                 <ul>
                     <li>Courses</li>
                     <li>LIVE Classes</li>
                     <li>Practice</li>
                     <li>Resource</li>
                     <li>Our Solution</li>
                 </ul>
        </div>
    </div>
    <div className="nav-img">
      <img src="./img/vinna.webp" alt="vinna" />
      <h2>We are professional by</h2>
      
   <Router>
    <div className="backnav">
        <nav>
            <ul className="ul1" >
                <li  >
                    <Link to="/" className='li1' > All</Link>
                </li>
                <li >
                    <Link to="/fullstack" className='li1'>Full stack</Link>
                </li>
                <li>
                    <Link to="/datasci" className='li1'> Data Science</Link>
                </li>
                <li>
                    <Link to="/cyber"  className='li1'> Cyber Security</Link>
                </li>
                <li>
                    <Link to="/database"  className='li1'>Database And Could Computing</Link>
                </li>
               
            </ul>
        </nav>
        <Routes>
            <Route path="/" exact  element={<All/>}></Route>
            <Route path="/fullstack"     element={<Fullstack/>}></Route>
            <Route path="/datasci"     element={<Datascience/>}></Route>
            <Route path="/cyber"     element={< Cybersecurity/>}></Route>
            <Route path="/database"     element={< Database/>}></Route>
            
         </Routes>
    </div>
   </Router>

    </div>
    </>
  
    
  )
}
 export default App