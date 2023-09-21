import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Post from './Post'
import GetData from './GetData'
import Update from './Update'
// import Check from './Check'

const App = () => {
  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Post/>}/>
        <Route path='/GetData' element={<GetData/>}/>
        <Route path='/Update/:sid' element={<Update/>}/>
        {/* <Route path='/Check' element={<Check/>}/>         */}
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
