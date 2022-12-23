import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';
import Todo from './pages/Todo';
import Calendar from './pages/Calendar'
import Agenda from './pages/Agenda'
import Menu from './pages/Menus'
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Editor from './pages/Editor';
import About from './pages/AboutPage'
import Kanban from './pages/Kanban'
import ShoppingList from './pages/ShoppingList'


function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/todos' element={<Todo />}/>
            <Route path='/calendar' element={<Calendar />}/>
            <Route path='/agenda' element={<Agenda />}/>
            <Route path='/menus' element={<Menu />}/>
            <Route path='/editor' element={<Editor />}/>
            <Route path='/kanban' element={<Kanban />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/editor' element={<Editor />}/>
            <Route path='/shoplist' element={<ShoppingList />}/>
            


          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App;
