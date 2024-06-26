import React from 'react'
import Page01 from './companents/Page0125/Page01'
import Page02 from './companents/Page0125/Page02'
import Page03 from './companents/Page0125/Page03'
import Page04 from './companents/Page0125/Page04'
import Page05 from './companents/Page0125/Page05'
import Page06 from './companents/Page0125/Page06'
import Page26 from './companents/Page2650/Page26'
import Page27 from './companents/Page2650/Page27'
import Page28 from './companents/Page2650/Page28'
import Page5175 from './companents/Pages5175'
import Page76 from './companents/Pages76100/Page76'
import Page77 from './companents/Pages76100/Page77'
import Page101 from './companents/Pages101125/Page101'
import Page102 from './companents/Pages101125/Page102'
import Page151 from './companents/Pages151175/Page151'
import Page152 from './companents/Pages151175/Page152'
import Page153 from './companents/Pages151175/Page153'
import Pages126 from './companents/Pages126150/Pages126'
import Pages127 from './companents/Pages126150/Pages127'
import Pages128 from './companents/Pages126150/Pages128'
import Pages129 from './companents/Pages126150/Pages129'
import Pages130 from './companents/Pages126150/Pages130'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path='/page01' element={<Page01/>}/>
          <Route path='/page02' element={<Page02/>}/>
          <Route path='/page03' element={<Page03/>}/>
          <Route path='/page04' element={<Page04/>}/>
          <Route path='/page05' element={<Page05/>}/>
          <Route path='/page06' element={<Page06/>}/>
          <Route path='/page26' element={<Page26/>}/>
          <Route path='/page27' element={<Page27/>}/>
          <Route path='/page28' element={<Page28/>}/>
          <Route path='/page5175' element={<Page5175/>}/>
          <Route path='/page76' element={<Page76/>}/>
          <Route path='/page77' element={<Page77/>}/>
          <Route path='/page101' element={<Page101/>}/>
          <Route path='/page102' element={<Page102/>}/>
          <Route path='/page151' element={<Page151/>}/>
          <Route path='/page152' element={<Page152/>}/>
          <Route path='/page153' element={<Page153/>}/>
          <Route path='/page126' element={<Pages126/>}/>
          <Route path='/page127' element={<Pages127/>}/>
          <Route path='/page128' element={<Pages128/>}/>
          <Route path='/page129' element={<Pages129/>}/>
          <Route path='/page130' element={<Pages130/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App