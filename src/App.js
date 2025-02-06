import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import LogIn from './Compoent/LogIn'
import Signup from './Compoent/Signup';
import Snake from './Snakegame/Snake'
const App = () => {
  return (
    <>
    <Snake />
      // <Router>
        // <div>
        //   {/* <Link to={"/"}></Link> */}
        //   <Signup />
        // </div>
        // <Routes>
        //   <Route path='/login' element={<LogIn />} />
        //   {/* <Route path='/' element={<Signup />} /> */}
        // </Routes>
      // </Router>


    </>
  )
}

export default App
