import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div>
        <div className='logo'>
           <Link to='/'>Dashboard</Link>
        </div>
        <div className='logo'>
            <Link to='/todos'>Todos</Link>
        </div>
        <div className='logo'>
            <Link to='/menus'>Menus</Link>
        </div>
        <div className='logo'>
            <Link to='/agenda'>Agenda</Link>
        </div>
        <div className='logo'>
            <Link to='/editor'>Editor</Link>
        </div>
        <div className='logo'>
            <Link to='/shoplist'>ShoppingList</Link>
        </div>
        <div className='logo'>
            <Link to='/kanban'>Kanban</Link>
        </div>
        <div className='logo'>
            <Link to='/about'>About</Link>
        </div>
    </div>
  )
}

export default Navbar