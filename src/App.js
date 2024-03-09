import './App.css';
import React from 'react'
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Create } from './components/Create';
import { Update } from './components/Update';
import { Delete } from './components/Delete';
import { Read } from './components/Read';

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Home />}></Route>
          <Route path='/create' element= {<Create />}></Route>
          <Route path='/read/:id' element= {<Read />}></Route>
          <Route path='/update/:id' element= {<Update />}></Route>
          <Route path='/delete/:id' element= {<Delete />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

